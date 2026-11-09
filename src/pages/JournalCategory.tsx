import { Link, Navigate, useParams } from "react-router-dom";
import SecondaryPageLayout from "../components/SecondaryPageLayout";
import { findJournalCategory } from "../data/journal";

function JournalCategory() {
  const { category: categorySlug } = useParams();
  const category = findJournalCategory(categorySlug);

  if (!category) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="journal-page">
      <SecondaryPageLayout
        eyebrow={`Quiet Frames · ${category.title}`}
        title={category.title}
        intro={category.intro}
      >
        <div className="journal-archive">
          {category.entries.map((entry) => (
            <article className="journal-archive-entry" key={entry.slug}>
              <p className="journal-archive-entry__date">
                <time>{entry.date}</time>
              </p>
              <div>
                <h2>
                  <Link to={`/journal/${category.slug}/${entry.slug}`}>
                    {entry.title}
                  </Link>
                </h2>
                <p>{entry.description}</p>
                <Link
                  className="journal-read"
                  to={`/journal/${category.slug}/${entry.slug}`}
                >
                  Read <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <Link className="journal-back" to="/journal">
          ← All journal categories
        </Link>
      </SecondaryPageLayout>
    </div>
  );
}

export default JournalCategory;
