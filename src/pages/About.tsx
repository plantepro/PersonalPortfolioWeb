import SecondaryPageLayout from "../components/SecondaryPageLayout";

function About() {
  return (
    <SecondaryPageLayout
      eyebrow="About"
      title="Building with curiosity and care."
      intro="I’m Vivian, a data and cloud engineer with a background in analytics, software development, and cloud technologies. I’m interested in how data, cloud infrastructure, and AI can come together to build reliable and useful systems."
    >
      <section className="editorial-section">
        <h2 className="editorial-section__label">Background</h2>
        <div className="editorial-section__body">
          <p>
            My experience spans data engineering and cloud technologies,I’ve expanded my knowledge across cloud infrastructure, Linux system administration, AI，
            IoT and modern application development.
          </p>
          <p>
            That foundation continues to shape my interest in building reliable data systems and practical cloud-native solutions. 
            I’m now bringing these areas together to better understand the full lifecycle of data — from connected devices and application systems 
            to cloud storage, processing, databases, analytics, and AI. I’m particularly interested in building scalable data solutions that connect engineering, 
            cloud infrastructure, and intelligent applications.
          </p>
        </div>
      </section>

      <section className="editorial-section">
        <h2 className="editorial-section__label">Selected skills</h2>
        <div className="editorial-section__body">
          <div className="skill-group">
            <h3>Data Engineering</h3>
            <ul className="skill-list">
              <li>Python, SQL, PySpark</li>
              <li>ETL & Data Pipelines</li>
              <li>Data Processing & Modeling</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Cloud & Infrastructure</h3>
            <ul className="skill-list">
              <li>AWS: S3, Glue, Redshift, Lambda</li>
              <li>Cloud Architecture & Cloud-Native Applications</li>
              <li>Linux & System Administration</li>
              <li>Docker, Git & GitHub</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>AI & IoT</h3>
            <ul className="skill-list">
              <li>AI & Machine Learning</li>
              <li>IoT, MQTT & Node-RED</li>
              <li>Connected Systems</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Application & Databases</h3>
            <ul className="skill-list">
              <li>JavaScript, React, Node.js</li>
              <li>REST APIs</li>
              <li>PostgreSQL, MariaDB, MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <h2 className="editorial-section__label">Learning</h2>
        <div className="editorial-section__body">
          <p>
            My previous portfolio highlights project work in web development,
            including an e-commerce capstone and multilingual educational
            experiences. I keep building on that professional and project
            background as I explore cloud services, data workflows, and
            responsible applications of AI.
          </p>
        </div>
      </section>
    </SecondaryPageLayout>
  );
}

export default About;
