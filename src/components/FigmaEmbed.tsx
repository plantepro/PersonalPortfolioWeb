type FigmaEmbedProps = {
  figmaUrl?: string;
  mobileFigmaUrl?: string;
  desktopFigmaUrl?: string;
  title: string;
};

function getPrototypeUrl(figmaUrl: string) {
  const prototypeUrl = new URL(figmaUrl);
  if (prototypeUrl.hostname === "embed.figma.com") {
    prototypeUrl.hostname = "www.figma.com";
  }
  prototypeUrl.searchParams.delete("embed-host");
  return prototypeUrl.toString();
}

function FigmaEmbed({
  figmaUrl,
  mobileFigmaUrl,
  desktopFigmaUrl,
  title,
}: FigmaEmbedProps) {
  const responsivePair = mobileFigmaUrl && desktopFigmaUrl;
  const versions = responsivePair
    ? [
        { label: "mobile", url: mobileFigmaUrl },
        { label: "desktop", url: desktopFigmaUrl },
      ]
    : figmaUrl
      ? [{ label: "default", url: figmaUrl }]
      : [];

  return (
    <div className="figma-embed">
      {versions.map(({ label, url }) => (
        <div
          className={`figma-embed__variant figma-embed__variant--${label}`}
          key={label}
        >
          <div className={`figma-embed__frame figma-embed__frame--${label}`}>
            <iframe
              src={url}
              title={`${title} ${label === "default" ? "" : `${label} `}Figma prototype`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <a
            className="figma-embed__link text-link"
            href={getPrototypeUrl(url)}
            target="_blank"
            rel="noreferrer"
          >
            View in Figma
          </a>
        </div>
      ))}
    </div>
  );
}

export default FigmaEmbed;
