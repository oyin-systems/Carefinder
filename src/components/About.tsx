import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1>HOW IT WORKS</h1>
      <div>
        <img src="" alt="find" />
        <h3>Find Hospital</h3>
        <p>
          Find the best hospitals and doctors near you, our efficient search
          engine provides you with the best results.
        </p>
      </div>

      <div>
        <img src="" alt="save" />
        <h3>Save or Share Hospital</h3>
        <p>
          Carefinder allows users to save and share the list of hospitals with
          others. Users can share the information via email or by generating a
          shareable link.
        </p>
      </div>

      <div>
        <img src="" alt="book" />
        <h3>Book Appointment</h3>
        <p>Book appointments easily by inputing correct details.</p>
      </div>

      <div>
        <img src="" alt="visit" />
        <h3>Make a visit</h3>
        <p>
          Appointment confirmed, then make a visit to your selected hospital or
          doctor.
        </p>
      </div>
    </div>
  );
};

export default About;
