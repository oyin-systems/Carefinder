import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">
        <p>CareFinder</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/homepage">Find Hospital</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <h3>Welcome to Carefinder</h3>
        <h1>Find the nearest hospital to you and make an appointment</h1>
        <p>
          Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
        </p>
        <p>Find, export, and share hospitals within your region.</p>
        <button>Get Started</button>
      </div>

      <div className="testimonial">
        <h1>Testimonials</h1>
        <div>
          <p>
            Finding the right hospital has never been easier! With this website,
            I was able to locate a nearby hospital quickly and efficiently. The
            search feature is user-friendly, and it provided me with all the
            essential information I needed. Highly recommended.
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <img src="" /> Sarah M.
        </div>

        <div>
          <p>
            I can't expres how grateful I am for carefinder. When I needed
            urgent medical care while travelling, it helped me locate the
            nearest hospital in a matter of seconds. The accurate results and
            detailed directions saved me valuable time and ensured I received
            the care I needed.
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <img src="" /> John D.
        </div>

        <div>
          <p>
            I recently moved to a new city and had no idea where to go for
            medical assistance, my friend shared me some hosipital details using
            the carefinder website. It made m life easier, I was able to find
            reputable hospitals near me effortelessly. The website's user
            friendly interface and comprehensive serach gave me peace of mind. I
            highly recommend.
          </p>
          <p>⭐⭐⭐⭐⭐</p>
          <img src="" /> Emily T.
        </div>
      </div>

      <div className="footer">
        <div>
          <p>Carefinder</p>
          <p>
            Plot 42, Akinza Street,
            <br />
            Victoria Island, Lagos.
            <br />
            Tel: +234-810-328-6788.
          </p>
        </div>

        <div>
          <p>© 2023 Carefinder</p>
        </div>

        <div>
          <p>Terms of Service</p>
        </div>

        <div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
