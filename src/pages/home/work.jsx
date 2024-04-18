import React from "react";
import CardWork from "./components/cardWork";
import BookingApp from '../../assets/bookingapp.png'
import MediApp from '../../assets/mediapp.png'
import MakeApp from '../../assets/makeapp.png'

const Work = () => {
  return (
    <div className="my-20" id="work">
      <h1 className="font-medium text-3xl">Selected Works</h1>
      <br />
      <br />
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10">
        <CardWork
          title="R4 Futsal: Ground Booking Application"
          description="A ground booking platform built with React, React Native, and Laravel, enabling users to book sports grounds seamlessly. Admin panel facilitates easy management of bookings and payments."
          img_src={BookingApp}
          techs={['React', 'React Native', 'Laraval', 'Payhere']}
        />
        <CardWork
          title="Mediguide: AI-Powered Medical Reminder App"
          description="Mediguide is an innovative medical reminder app built with Flutter for the frontend and Laravel for the backend. Leveraging AI technology, it offers unique features such as AI suggestions for medical treatments."
          img_src={MediApp}
          techs={['Flutter', 'Chat-GPT', 'Laraval']}
        />
        <CardWork
          title="No-Code Dev Experience SEO & AI Integration Expertise"
          description="MThis automated sequence is designed to facilitate the content creation process, from data retrieval to content generation, and updating a spreadsheet with the new content. It's an example of how no-code platforms can be leveraged to create complex workflows and integrate various services and APIs, including AI-powered solutions like ChatGPT."
          img_src={MakeApp}
          techs={['Make', 'Automation']}
        />
      </div>
    </div>
  );
};

export default Work;
