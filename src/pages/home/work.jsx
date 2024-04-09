import React from "react";
import CardWork from "./components/cardWork";

const Work = () => {
  return (
    <div className="my-20" id="work">
      <h1 className="font-medium text-3xl">Selected Works</h1>
      <br />
      <br />
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10">
        <CardWork
          title="R4 Futsal Ground Booking Application"
          description="A ground booking platform built with React, React Native, and Laravel, enabling users to book sports grounds seamlessly. Admin panel facilitates easy management of bookings and payments."
          img_src="https://lh3.googleusercontent.com/pw/AP1GczO1eVqmC7G55J8LCHVdtOwj7rkkohfcDulcSgIpHldo3HeBBgw99WXaVzT4WB1l0ehJff3hwc1MpZtQSCzfjcG2jGnIsm-20ncPCv22uoVj9mQhcc3SLcjJJ4haqyvSb8IQlmTeqiALtBWlQeS7rW_l=w923-h923-s-no-gm?authuser=0"
        />
        <CardWork
          title="Mediguide: AI-Powered Medical Reminder App"
          description="Mediguide is an innovative medical reminder app built with Flutter for the frontend and Laravel for the backend. Leveraging AI technology, it offers unique features such as AI suggestions for medical treatments, barcode scanner for medicines etc"
          img_src="https://lh3.googleusercontent.com/pw/AP1GczP-ZpkDopYvlrR3bcnvS6hp4VZuFFwVr50OzNPldcBRUasgpOa7YQHDZpmgKo70eIqHlE6Xek4fjSJmev8E3TWIyOaEalyO9alLwdKwU5spFVo954rzfx5PMVveD-LN0teD28HiLBmG-NL9DeCGnRSK=w923-h923-s-no-gm?authuser=0"
        />
      </div>
    </div>
  );
};

export default Work;
