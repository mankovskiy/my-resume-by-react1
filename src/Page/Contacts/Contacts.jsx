// import './contacts.css';
import '../../styles/style.css';
export const Contacts = () => {
  return (
    <main>
      <section className="contacts">
        <div className="container">
          <h1 className="section-title">Contacts</h1>
          <h2 className="section-title__point">Location</h2>
          <p className="section-title__text">England, Birminghah</p>
          <h3 className="section-title__point">WhatsApp</h3>
          <a href="tel:+644646464649" className="section-title__text">
            +644646464649
          </a>
          <h3 className="section-title__point">Email</h3>
          <a
            href="mailto:odnorazka25@gmail.com"
            className="section-title__text section-title__text--color"
          >
            odnorazka25@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
};
