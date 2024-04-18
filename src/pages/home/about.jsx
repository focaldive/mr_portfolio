import React from "react";
import CardExperience from "./components/cardExperience";
import CardTestimonials from "./components/cardTestimonials";

const About = () => {
  return (
    <div id="about" className="my-20">
      <h1 className="font-medium text-3xl">About me</h1>
      <br />
      <p className="text-gray-400">
        As a Full Stack Developer with expertise in React, Node, NextJS, MERN,
        Flutter, and React Native, I provide cost-effective solutions without
        compromising on quality. My services are affordably priced to ensure the
        best value for your investment. With a fluent command of English and
        five years of experience in the field, my aim is to foster enduring
        professional partnerships.
      </p>
      <br />
      <br />
      <h1 className="text-xl font-medium">Work Experience</h1>
      <CardExperience
        company="FocalDive"
        duration="2024 - Present"
        description="Focal Dive is a software development company that specializes in building web and mobile applications. As a Full Stack Developer, I am responsible for developing and maintaining the company's software products."
      />
      <CardExperience
        company="Imara Software Solution"
        duration="2021 - 2024"
        description="Imara Software Solutions is a company specializing in no-code development and web design automation. As a Full Stack Developer at Imara Software Solutions, I am tasked with developing and maintaining the company's software products."
      />
      <CardExperience
        company="Freelance Web Developer & Designer"
        duration="2019 - 2021"
        description="As a freelance web developer, I specialize in both basic and advanced web development. My skills include creating static and dynamic websites, integrating JSON data, and utilizing JavaScript frameworks like React.js or Vue.js. I offer expertise in HTML, CSS, JavaScript, and other advanced web technologies, focusing on delivering high-quality, user-friendly websites tailored to my clients' needs."
      />
      <br />
      <br />
      <h1 className="text-xl font-medium">Testimonials</h1>
      <div className="my-5 grid gap-5 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 dark:bg-[#141414]">
        <CardTestimonials
          testimonial="Rishad is a digital design genius! His work on our ground booking application was exceptional. With his expertise in React, React Native, and Laravel, he crafted a seamless and user-friendly platform. Attention to detail and knack for understanding our requirements resulted in a digital masterpiece. If you're looking for a designer who listens, delivers, and exceeds expectations, Rishad is the one to choose."
          name="Riyasath"
          img="https://lh3.googleusercontent.com/pw/AP1GczOCRN-sZh44bl62IjGag3L2a9rVBzjJR8xtnTUEc5TEd4DtvxN91uRrL7qy6nUcpRSt_4M3wbKVlUPL9kzHv4iz75hbZBkHdN-obmFtgMWw8NJa9hrPWF3d-qnWkfqOiNsfuYoXkqp2E4tp1X0BxbyG=w738-h571-s-no-gm?authuser=0"
          job="CEO"
          company="R4Futsal"
          href="https://r4futsal.com/"
        />
        <CardTestimonials
          testimonial="Collaborating with Rishad on our Mediguide app was fantastic. His proficiency in Flutter and Laravel brought our vision to life. His innovative approach and dedication to user experience ensured our app stood out. If you're seeking a digital design maestro to transform your ideas into reality, He is the perfect choice."
          name="Jhone"
          img="https://lh3.googleusercontent.com/pw/AP1GczPcTX96cVjAxEiUqbRrqEgysMj7nVoW6PHadPWdq0sdZDO5htGhbDUNgL59mkkkxjD0-fD61ifp_Pc5fUkDgsrjUsH5un-qyZXu_dd3Fr6fAA7n4r_ePwTSkmRwgHTC4LAkKP6GMQrDWmOFG_Spzo9I=w919-h923-s-no-gm?authuser=0"
          job="CEO"
          company="Mediguide"
          href="https://mediguide.com/"
        />
      </div>
    </div>
  );
};

export default About;
