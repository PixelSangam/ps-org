import Heading from "../componenets/Heading";
import Service from "../componenets/Service";
import serviceData from "../data/services.json";

const Services = () => {
  const serviceElement = serviceData.map((service) => {
    return (
      <Service
        key={service.id}
        name={service.name}
        photo={service.image}
        about={service.about}
      />
    );
  });

  return (
    <section className="section" id="services">
      <div className="services">
        <Heading headingText="Our Services" />
        <div className="services__content">{serviceElement}</div>
      </div>
    </section>
  );
};

export default Services;
