import Button from "./components/button/Button";

export default function NotFound() {
  return (
    <section className="section banner" aria-label="Error Page">
      <div className="container">
        <h1>404 | Something went wrong</h1>
        <Button text="Go back to home" link="/" isButton={false} />
      </div>
    </section>
  );
}