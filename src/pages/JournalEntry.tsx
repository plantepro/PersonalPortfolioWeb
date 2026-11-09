import { Link, Navigate, useParams } from "react-router-dom";
import SecondaryPageLayout from "../components/SecondaryPageLayout";
import { findJournalCategory, findJournalEntry } from "../data/journal";

function JournalEntry() {
  const { category: categorySlug, entryId } = useParams();
  const category = findJournalCategory(categorySlug);

  if (!category) {
    return <Navigate to="/journal" replace />;
  }

  const entry = findJournalEntry(category, entryId);
  if (!entry) {
    return <Navigate to={`/journal/${category.slug}`} replace />;
  }

  return (
    <div className="journal-page">
      <SecondaryPageLayout
        eyebrow={`Quiet Frames · ${category.title}`}
        title={entry.title}
        intro={entry.description}
      >
        <article className="journal-article">
          <p className="journal-article__meta">
            {entry.date} · {category.title}
          </p>
          <div className="journal-article__body">
            {entry.body.map((paragraph, index) => (
              <p key={`${entry.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
        <Link className="journal-back" to={`/journal/${category.slug}`}>
          ← More in {category.title}
        </Link>
      </SecondaryPageLayout>
    </div>
  );
}

export default JournalEntry;
