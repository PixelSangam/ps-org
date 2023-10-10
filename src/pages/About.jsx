import Heading from "../componenets/Heading";
import aboutData from "../data/about.json";

const About = () => {
  const aboutApartElement = aboutData.apartus.map((value) => {
    return (
      <AboutApart
        id={value.id}
        key={value.id}
        heading={value.heading}
        para={value.para}
        image={value.image}
        altText={value.altText}
      />
    );
  });

  return (
    <section className="section about" id="about">
      <AboutWelcome about={aboutData.about} />
      <div className="about__apartus">
        <Heading headingText="What Sets Us Apart" />
        <div className="about__apartus--benefits">{aboutApartElement}</div>
      </div>
    </section>
  );
};

export default About;

const AboutWelcome = ({ about }) => {
  return (
    <div className="about__welcome">
      <div className="about__welcome--textbox">
        <p className="el-abtext">{about[0].firstText}</p>
        <p className="el-abtext">{about[0].secondText}</p>
      </div>
      <div className="about__welcome--imgbox">
        <img
          src={about[0].image}
          alt="Digital Solutions"
          className="el-abimg"
        />
      </div>
    </div>
  );
};

const AboutApart = (props) => {
  const { id, heading, para, image, altText } = props;
  return (
    <>
      {id % 2 === 0 ? (
        <div className="benefits" data-innovate="true">
          <div className="benefits__imgs" data-innovate="true">
            <img className="el-bimg" src={image} alt={altText} />
          </div>
          <div className="benefits__about">
            <h2 className="el-bname">{heading}</h2>
            <p className="el-btext">{para}</p>
          </div>
        </div>
      ) : (
        <div className="benefits">
          <div className="benefits__about">
            <h2 className="el-bname">{heading}</h2>
            <p className="el-btext">{para}</p>
          </div>
          <div className="benefits__imgs">
            <img className="el-bimg" src={image} alt={altText} />
          </div>
        </div>
      )}
    </>
  );
};
