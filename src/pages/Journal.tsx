import SecondaryPageLayout from "../components/SecondaryPageLayout";

const categories = [
  {
    title: "Films",
    description: "Films that stay with me, organized by emotion and memory.",
  },
  {
    title: "Books",
    description: "Reading notes, favorite passages, and books worth revisiting.",
  },
    {
    title: "Songs",
    description: "100+ plays on repeat...",
  },
  {
    title: "Travel",
    description: "World in my eyes, 世界紀行",
  },
  {
    title: "Reflections",
    description: "Personal essays, observations, and thoughts from everyday life.",
  },
  {
    title: "Poems",
    description: "Fragments of thought",
  },
];

function Journal() {
  return (
    <div className="journal-page">
      <SecondaryPageLayout
        eyebrow="Quiet Frames · A Personal Journal"
        title="Little Things, Lasting Memories"
        intro="Revoke the color-faded memories."
      >
        <div className="journal-categories" aria-label="Journal categories">
          {categories.map((category) => (
            <section className="journal-category" key={category.title}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </section>
          ))}
        </div>
      </SecondaryPageLayout>
    </div>
  );
}

export default Journal;
