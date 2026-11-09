export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  description: string;
  body: string[];
};

export type JournalCategory = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  entries: JournalEntry[];
};

const placeholderBody = [
  "This is a placeholder for a future journal entry. Add your own notes, details, and writing here when you are ready.",
];

export const journalCategories: JournalCategory[] = [
  {
    slug: "films",
    title: "Films",
    description: "Films that stay with me, organized by emotion and memory.",
    intro: "A small archive of films, feelings, and scenes worth returning to.",
    entries: [
      {
        slug: "film-notes",
        title: "Film Notes",
        date: "Date to come",
        description:
          "A space for future writing about the images, ideas, and moments that linger.",
        body: placeholderBody,
      },
      {
        slug: "scenes-that-stay",
        title: "Scenes That Stay",
        date: "Date to come",
        description:
          "A future collection of memorable scenes and the details that make them resonate.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "books",
    title: "Books",
    description: "Reading notes, favorite passages, and books worth revisiting.",
    intro: "Reading notes and passages gathered along the way.",
    entries: [
      {
        slug: "books-i-return-to",
        title: "Books I Return To",
        date: "Date to come",
        description:
          "A place to write about books that invite another reading.",
        body: placeholderBody,
      },
      {
        slug: "reading-notes",
        title: "Reading Notes",
        date: "Date to come",
        description:
          "A quiet archive for future passages, annotations, and reading notes.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "songs",
    title: "Songs",
    description: "100+ plays on repeat...",
    intro: "Listening notes, recurring favorites, and songs kept close.",
    entries: [
      {
        slug: "songs-on-repeat",
        title: "Songs on Repeat",
        date: "Date to come",
        description:
          "A future listening note about songs that find their way back into rotation.",
        body: placeholderBody,
      },
      {
        slug: "listening-notes",
        title: "Listening Notes",
        date: "Date to come",
        description:
          "A space for notes on sound, lyrics, and music worth keeping nearby.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "travel",
    title: "Travel",
    description: "World in my eyes, 世界紀行",
    intro: "Places, photographs, and stories collected along the way.",
    entries: [
      {
        slug: "a-place-i-remember",
        title: "A Place I Remember",
        date: "Date to come",
        description:
          "A placeholder for a future place note; no location or story has been added.",
        body: placeholderBody,
      },
      {
        slug: "notes-from-elsewhere",
        title: "Notes from Elsewhere",
        date: "Date to come",
        description:
          "A structure for future travel writing, ready for details when you choose to add them.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "reflections",
    title: "Reflections",
    description: "Personal essays, observations, and thoughts from everyday life.",
    intro: "Personal essays and observations from ordinary days.",
    entries: [
      {
        slug: "small-reflections",
        title: "Small Reflections",
        date: "Date to come",
        description:
          "A place for future short essays and thoughts still taking shape.",
        body: placeholderBody,
      },
      {
        slug: "everyday-observations",
        title: "Everyday Observations",
        date: "Date to come",
        description:
          "An open space for noticing and writing about ordinary moments.",
        body: placeholderBody,
      },
    ],
  },
  {
    slug: "poems",
    title: "Poems",
    description: "Fragments of thought",
    intro: "Original poetry and fragments of thought, collected quietly.",
    entries: [],
  },
];

export function findJournalCategory(slug: string | undefined) {
  return journalCategories.find((category) => category.slug === slug);
}

export function findJournalEntry(
  category: JournalCategory,
  entrySlug: string | undefined,
) {
  return category.entries.find((entry) => entry.slug === entrySlug);
}
