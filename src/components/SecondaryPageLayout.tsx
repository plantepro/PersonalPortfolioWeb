import type { ReactNode } from "react";
import "../SecondaryPages.css";

type SecondaryPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

function SecondaryPageLayout({
  eyebrow,
  title,
  intro,
  children,
}: SecondaryPageLayoutProps) {
  return (
    <main className="secondary-page">
      <div className="secondary-page__inner">
        <header className="secondary-page__heading">
          <p className="secondary-page__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p className="secondary-page__intro">{intro}</p>}
        </header>
        <div className="secondary-page__content">{children}</div>
      </div>
    </main>
  );
}

export default SecondaryPageLayout;
