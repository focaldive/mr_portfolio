import React from "react";
import CardService from "./components/cardService";

const Services = () => {
  return (
    <div id="service" className="my-20">
      <h1 className="font-medium text-3xl">Services</h1>
      <br />
      <CardService
        title="Custom Web Development"
        description="Building tailored web applications using technologies such as React.js, Angular, or Vue.js on the frontend, and Laravel, Django, or Express.js on the backend."
      />
      <CardService
        title="Mobile App Development"
        description="Creating mobile applications for iOS and Android platforms using frameworks like React Native, Flutter, or native development tools. Seamless integration with backend systems ensures a unified user experience."
      />
      <CardService
        title="No-Code Development"
        description="Leveraging no-code platforms like Zapier, Bubble, or Make to automate workflows, build simple applications, and integrate various services without the need for traditional coding."
      />
      <CardService
        title="E-commerce Solutions"
        description="Developing robust e-commerce platforms with features like product listings, shopping carts, secure payment gateways, and order management systems. Integration with popular e-commerce platforms or building custom solutions."
      />
      <CardService
        title="Content Management Systems (CMS)"
        description="Designing customized content management systems using platforms like WordPress, Drupal, or Joomla, or building headless CMS solutions for flexibility and scalability."
      />
      <CardService
        title="API Development and Integration"
        description="Designing and implementing RESTful or GraphQL APIs to enable seamless communication between different systems and services. Integration of third-party APIs for functionalities like payment processing or social media interaction."
      />
      <CardService
        title="User Experience (UX) Design"
        description="Providing UX design services to create intuitive and user-friendly interfaces for digital solutions. Conducting user research, wireframing, prototyping, and usability testing to ensure an optimal user experience."
      />
      <CardService
        title="Training and Support"
        description="Offering training sessions and ongoing support to help clients maximize the value of their digital solutions. Providing documentation, tutorials, and troubleshooting assistance to ensure smooth operation and user satisfaction."
      />
    </div>
  );
};

export default Services;
