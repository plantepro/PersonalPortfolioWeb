import SecondaryPageLayout from "../components/SecondaryPageLayout";
import FigmaEmbed from "../components/FigmaEmbed";

type Project = {
  title: string;
  type: string;
  description: string;
  stack?: string;
  links: { label: string; href: string }[];
  figmaUrl?: string;
  mobileFigmaUrl?: string;
  desktopFigmaUrl?: string;
  technicalHighlights?: string[];
};

const projects: Project[] = [
  {
    title: "Superwish",
    type: "E-commerce · Educational toys",
    description:
      "An e-commerce platform for educational and entertaining toys, with product discovery, customer accounts, order history, and inventory tools.",
    stack:
      "ASP.NET Core 6 · PostgreSQL · Azure Blob Storage · Entity Framework Core · Bootstrap 5",
    links: [
      {
        label: "Project documentation",
        href: "https://xuanwgit.github.io/Superwish_FSD04_AppDevII_ASP.NET_Project/",
      },
      {
        label: "Source code",
        href: "https://github.com/xuanwgit/Superwish_FSD04_AppDevII_ASP.NET_Project",
      },
    ],
  },
  {
    title: "Spitifo",
    type: "Music · Streaming",
    description:
      "A Spotify-inspired music application with album management, streaming controls, featured albums, and saved favorites.",
    stack: "MongoDB · Express · React · Node.js · AWS S3 · JWT",
    links: [
      {
        label: "Live demo",
        href: "https://xuanwgit.github.io/Spitifo-Music-App-React/",
      },
      {
        label: "Source code",
        href: "https://github.com/xuanwgit/Spitifo-Music-App-React",
      },
    ],
  },
  {
    title: "WearFamily",
    type: "E-commerce · Full-stack",
    description:
      "A Laravel and PHP e-commerce capstone using an MVC architecture, with a shopping cart, user accounts, and product management.",
    stack: "PHP · Laravel · Blade · Vue.js · Docker",
    links: [
      {
        label: "Live demo",
        href: "https://fsd03-webdev1-wearfamily-jsd-1.onrender.com/",
      },
      {
        label: "Source code",
        href: "https://github.com/xuanwgit/FSD04_WebDev1_WearFamily_deployed",
      },
    ],
  },
  {
    title: "KeepThemBusy",
    type: "Education · Multilingual",
    description:
      "An educational platform for children with interactive activities, games, crafts, and English and French content.",
    stack: "HTML · CSS · JavaScript",
    links: [
      {
        label: "Source code",
        href: "https://github.com/xuanwgit/KeepThemBusy_DDWY",
      },
    ],
  },
  {
    title: "Mélo",
    type: "Furniture e-commerce · UI & UX Design",
    technicalHighlights: [
      "Component-Based Architecture",
      "Responsive Design",
      "Cross-Platform Development",
      "Data-Driven UI",
      "API-Oriented Architecture",
    ],
    description:
      "A modern and youthful furniture shopping experience designed for people who want to bring contemporary style into their everyday spaces.",
    links: [],
    mobileFigmaUrl:
      "https://embed.figma.com/proto/qoIF2eO3wu0rVdCv7NP20l/cig_ex-formatif_2?node-id=8897-427&page-id=603%3A18&starting-point-node-id=8897%3A427&embed-host=share",
    desktopFigmaUrl:
      "https://embed.figma.com/proto/qoIF2eO3wu0rVdCv7NP20l/cig_ex-formatif_2?node-id=8926-1506&page-id=603%3A18&starting-point-node-id=8897%3A427&scaling=min-zoom&content-scaling=fixed&embed-host=share",
  },
  {
    title: "Quite Frames",
    type: "Film & Photography Website · HTML & CSS",
    description:
      "A minimalist film and photography website built with HTML and CSS, featuring a curated collection of films and a visual gallery.",
    stack:
      "HTML5 · CSS3 · Responsive Web Design · Git/GitHub · Vercel · Static Web Deployment",
    links: [
      {
        label: "Live website",
        href: "https://quiteframes.vercel.app",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/plantepro/QuiteFrames",
      },
    ],
  },
];

function Projects() {
  return (
    <SecondaryPageLayout
      eyebrow="Selected work"
      title="Projects built to be useful."
      intro="A selection of projects across data, software development, AI and IoT. They bring my work across applications, connected systems, data pipelines, and cloud technologies into one place."
    >
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project-entry" key={project.title}>
            <div className="project-entry__heading">
              <span className="project-entry__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{project.title}</h2>
              <p className="project-entry__type">{project.type}</p>
            </div>
            <div className="project-entry__content">
              <p className="project-entry__description">
                {project.description}
              </p>
              {project.technicalHighlights && (
                <section
                  className="project-entry__highlights"
                  aria-label="Technical Highlights"
                >
                  <h3>Technical Highlights</h3>
                  <p>{project.technicalHighlights.join(" · ")}</p>
                </section>
              )}
              {project.stack && (
                <p className="project-entry__stack">{project.stack}</p>
              )}
              <div className="project-entry__links">
                {project.links.map((link) => (
                  <a
                    className="text-link"
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {(project.figmaUrl ||
                (project.mobileFigmaUrl && project.desktopFigmaUrl)) && (
                <FigmaEmbed
                  figmaUrl={project.figmaUrl}
                  mobileFigmaUrl={project.mobileFigmaUrl}
                  desktopFigmaUrl={project.desktopFigmaUrl}
                  title={project.title}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </SecondaryPageLayout>
  );
}

export default Projects;
