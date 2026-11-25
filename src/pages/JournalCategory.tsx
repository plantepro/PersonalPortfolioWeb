import { Link, Navigate, useParams } from "react-router-dom";
import SecondaryPageLayout from "../components/SecondaryPageLayout";
import { findJournalCategory, journalCategories } from "../data/journal";

function JournalCategory() {
  const { category: categorySlug } = useParams();
  const category = findJournalCategory(categorySlug);

  if (!category) {
    return <Navigate to="/journal" replace />;
  }

  const childCategories = journalCategories.filter(
    (candidate) => candidate.parentSlug === category.slug,
  );
  const isImageArchive =
    category.parentSlug === "films" || category.parentSlug === "books";
  const imageLabel = category.parentSlug === "books" ? "book cover" : "poster";

  return (
    <div className="journal-page">
      <SecondaryPageLayout
        eyebrow={`Quiet Frames · ${category.title}`}
        title={category.title}
        intro={category.intro}
      >
        {childCategories.length > 0 && (
          <div
            className="journal-categories"
            aria-label={`${category.title} categories`}
          >
            {childCategories.map((childCategory) => (
              <Link
                className="journal-category"
                key={childCategory.slug}
                to={`/journal/${childCategory.slug}`}
              >
                <h2>{childCategory.title}</h2>
                <p>{childCategory.description}</p>
              </Link>
            ))}
          </div>
        )}
        {category.entries.length > 0 && (
          <div className="journal-archive">
            {category.entries.map((entry) => {
              const imageSource = entry.cover ?? entry.poster;

              return (
              <article
                className={`journal-archive-entry${
                  isImageArchive ? " journal-archive-entry--with-artwork" : ""
                }`}
                key={entry.slug}
              >
                {isImageArchive && (
                  <div className="journal-entry-artwork">
                    {imageSource ? (
                      <img
                        src={imageSource}
                        alt={`${entry.title} ${imageLabel}`}
                      />
                    ) : (
                      <div
                        className="journal-entry-artwork__placeholder"
                        role="img"
                        aria-label={`${entry.title} ${imageLabel} placeholder`}
                      >
                        <span>{imageLabel === "book cover" ? "Cover to come" : "Poster to come"}</span>
                      </div>
                    )}
                  </div>
                )}
                {!isImageArchive && (
                  <p className="journal-archive-entry__date">
                    <time>{entry.date}</time>
                  </p>
                )}
                <div className={isImageArchive ? "journal-entry-artwork-copy" : undefined}>
                  {isImageArchive && (
                    <p className="journal-archive-entry__date">
                      <time>{entry.date}</time>
                    </p>
                  )}
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
              );
            })}
          </div>
        )}
        <Link className="journal-back" to="/journal">
          ← All journal categories
        </Link>
      </SecondaryPageLayout>
    </div>
  );
}

export default JournalCategory;
