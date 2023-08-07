import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import About from "./components/About";
import ExportHospitals from "./components/ExportHospitals";
import ShareHospitals from "./components/ShareHospitals";
import LoginPage from "./components/SignIn";
import RegisterPage from "./components/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/export" element={<ExportHospitals />} />
        <Route path="/share" element={<ShareHospitals />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;






// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import LandingPage from './components/LandingPage';
// import HomePage from './components/HomePage';
// import ExportHospitals from './components/ExportHospitals';
// import ShareHospitals from './components/ShareHospitals';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={LandingPage} />
//         <Route path="/home" Component={HomePage} />
//         <Route path="/export" Component={ExportHospitals} />
//         <Route path="/share" Component={ShareHospitals} />
//         <Route path="/login" Component={LoginPage} />
//         <Route path="/signup" Component={RegisterPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;