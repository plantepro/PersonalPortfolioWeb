import { Link } from "react-router-dom";
import SecondaryPageLayout from "../components/SecondaryPageLayout";
import { journalCategories } from "../data/journal";

function Journal() {
  return (
    <div className="journal-page">
      <SecondaryPageLayout
        eyebrow="Quiet Frames · A Personal Journal"
        title="雑記"
        intro="Revoke the color-faded memories."
      >
        <div className="journal-categories" aria-label="Journal categories">
          {journalCategories.map((category) => (
            <Link
              className="journal-category"
              key={category.slug}
              to={`/journal/${category.slug}`}
            >
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </SecondaryPageLayout>
    </div>
  );
}

export default Journal;
