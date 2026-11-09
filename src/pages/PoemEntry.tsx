import { Link, Navigate, useParams } from "react-router-dom";
import SecondaryPageLayout from "../components/SecondaryPageLayout";
import { findPoem } from "../data/poems";

function PoemEntry() {
  const { slug } = useParams();
  const poem = findPoem(slug);

  if (!poem) {
    return <Navigate to="/journal/poems" replace />;
  }

  return (
    <div className="journal-page">
      <SecondaryPageLayout
        eyebrow="Quiet Frames · Poems"
        title={poem.title}
        intro={poem.excerpt}
      >
        <article className="poem-article">
          {poem.dedication && (
            <p className="poem-article__dedication">{poem.dedication}</p>
          )}
          <p className="poem-article__meta">
            {poem.author && <span>{poem.author}</span>}
            {poem.language && <span>{poem.language}</span>}
            {poem.year && <time>{poem.year}</time>}
          </p>
          <div className="poem-article__body">{poem.body}</div>
        </article>
        <Link className="poem-back" to="/journal/poems">
          ← Back to Poems
        </Link>
      </SecondaryPageLayout>
    </div>
  );
}

export default PoemEntry;
