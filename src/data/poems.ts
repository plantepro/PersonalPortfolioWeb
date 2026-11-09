export type Poem = {
  slug: string;
  title: string;
  author?: string;
  language?: string;
  year?: string;
  excerpt: string;
  body: string;
};

type Frontmatter = {
  title?: string;
  author?: string;
  language?: string;
  year?: string;
  excerpt?: string;
};

const poemFiles = import.meta.glob<string>("../content/poems/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function unquote(value: string) {
  const trimmed = value.trim();
  const quote = trimmed[0];

  if (
    (quote === '"' || quote === "'") &&
    trimmed[trimmed.length - 1] === quote
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parsePoemMarkdown(markdown: string) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) return undefined;

  const frontmatter: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^(title|author|language|year|excerpt):\s*(.*)$/);
    if (field) {
      frontmatter[field[1] as keyof Frontmatter] = unquote(field[2]);
    }
  }

  if (!frontmatter.title || frontmatter.excerpt === undefined) {
    return undefined;
  }

  return {
    title: frontmatter.title,
    ...(frontmatter.author ? { author: frontmatter.author } : {}),
    ...(frontmatter.language ? { language: frontmatter.language } : {}),
    ...(frontmatter.year ? { year: frontmatter.year } : {}),
    excerpt: frontmatter.excerpt,
    body: match[2],
  };
}

export const poems: Poem[] = Object.entries(poemFiles)
  .flatMap(([path, markdown]) => {
    const parsed = parsePoemMarkdown(markdown);
    const slug = path.split("/").pop()?.replace(/\.md$/, "");

    if (!parsed || !slug) return [];

    return [{ slug, ...parsed }];
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));

export function findPoem(slug: string | undefined) {
  return poems.find((poem) => poem.slug === slug);
}
