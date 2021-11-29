import React from "react";
import { Routes, Route } from "react-router";

import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Education from "../pages/Education/Education";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Technologies from "../pages/Technologies/Technologies";

const MainSectionRoutes = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/education"} element={<Education />} />
      <Route path={"/services"} element={<Services />} />
      <Route path={"/technologies"} element={<Technologies />} />
    </Routes>
  );
};

export default MainSectionRoutes;
