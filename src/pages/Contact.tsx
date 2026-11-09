import SecondaryPageLayout from "../components/SecondaryPageLayout";

function Contact() {
  return (
    <SecondaryPageLayout
      eyebrow="Contact"
      title="Let’s start a conversation."
      intro="I’m open to hearing about opportunities, collaborations, or a thoughtful conversation about technology and development."
    >
      <section className="editorial-section">
        <h2 className="editorial-section__label">Get in touch</h2>
        <div className="editorial-section__body contact-links">
          <a className="contact-link" href="mailto:xuanw.git@gmail.com">
            <span>Email</span>
            <span>xuanw.git@gmail.com</span>
          </a>
          <a
            className="contact-link"
            href="https://github.com/xuanwgit"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span>@xuanwgit</span>
          </a>
        </div>
      </section>
    </SecondaryPageLayout>
  );
}

export default Contact;
