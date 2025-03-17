import Contact from "../components/contact/Contact";

export default function page() {
  return (
    <>
      <section className="section banner" aria-label="Banner">
        <div className="container">
          <h1>Contact</h1>
          <p>Fill the form to reach out me...</p>
        </div>
      </section>
      <Contact />
    </>
  );
}
