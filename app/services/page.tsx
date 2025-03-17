import Services from "../components/services/Services";

export default function page() {
  return (
    <>
      <section className="section banner" aria-label="Banner">
        <div className="container">
          <h1>Services</h1>
          <p>What I love to do...</p>
        </div>
      </section>
      <Services />
    </>
  );
}
