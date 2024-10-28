import Card from "./Card";
import SectionHeader from "./SectionHeader";

function About() {
  return (
    <section id="about" className="pb-10">
      <div className="container">
        <SectionHeader
          tag="About Me"
          title="A glimpse into my world"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <Card></Card>
      </div>
    </section>
  );
}

export default About;
