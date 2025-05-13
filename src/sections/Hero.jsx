import image from "../../public/images/bg.png";
import ideas from "../../public/images/ideas.svg";
import concepts from "../../public/images/concepts.svg";

const words = [
  { text: "Ideas", imgPath: ideas },
  { text: "Concepts", imgPath: concepts },
];
const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={image} alt="background" />
      </div>
      <div className="hero-layout">
        {/* left hero content  */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping Ideas</h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
          </div>
        </header>
        {/* right hero content  */}
      </div>
    </section>
  );
};

export default Hero;
