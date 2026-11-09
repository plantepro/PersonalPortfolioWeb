import { Link, Navigate } from "react-router-dom";
import SecondaryPageLayout from "../components/SecondaryPageLayout";
import { findJournalCategory } from "../data/journal";
import { poems } from "../data/poems";

function PoemsArchive() {
  const category = findJournalCategory("poems");

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
        {poems.length > 0 ? (
          <div className="poem-archive" aria-label="Poems archive">
            {poems.map((poem) => (
              <article className="poem-archive-entry" key={poem.slug}>
                {poem.year && (
                  <p className="poem-archive-entry__year">
                    <time>{poem.year}</time>
                  </p>
                )}
                <div className="poem-archive-entry__content">
                  <h2>
                    <Link to={`/journal/poems/${poem.slug}`}>
                      {poem.title}
                    </Link>
                  </h2>
                  {poem.excerpt && <p>{poem.excerpt}</p>}
                  <Link
                    className="poem-read"
                    to={`/journal/poems/${poem.slug}`}
                  >
                    Read <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="poem-archive__empty">
            The archive is ready for poems.
          </p>
        )}
        <Link className="poem-back" to="/journal">
          ← All journal categories
        </Link>
      </SecondaryPageLayout>
    </div>
  );
}

export default PoemsArchive;
