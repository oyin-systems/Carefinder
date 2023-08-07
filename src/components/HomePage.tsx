import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <div>
        <div>
          <img src="" alt="patient" />
          <img src="" alt="doctor" />
        </div>
        <div>
          <p>Welcome to</p>
          <h3>CareFinder</h3>
          <p>
            Carefinder is a platform where users can search for hospitals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <button>OUR SERVICES</button>
        </div>
      </div>

      <div className="boxes">
        <div>
          <img src="" alt="search" />
          <h3>Search Doctors</h3>
          <p>Effortlessly find the best hospitals near you</p>
        </div>
        <div>
          <img src="" alt="search" />
          <h3>Search Hospitals</h3>
          <p>Effortlessly find the best doctors near you</p>
        </div>
        <div>
          <img src="" alt="search" />
          <h3>Export Hospitals</h3>
          <p>Save list of hospitals</p>
        </div>
        <div>
          <img src="" alt="search" />
          <h3>Share Hospitals</h3>
          <p>Share the list of hospitals with others</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
