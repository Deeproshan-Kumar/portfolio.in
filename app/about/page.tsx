import About from "../components/about/About";

export default function page() {
  return (
    <main className="main">
      <section className="section banner" aria-label="Banner">
        <div className="container">
          <h1>About Me</h1>
          <p>More about me</p>
        </div>
      </section>
      <About />
    </main>
  );
}