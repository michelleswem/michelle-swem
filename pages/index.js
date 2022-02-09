import { Fragment } from "react";
import AboutMe from "../components/home/AboutMe";
import Contact from "../components/home/Contact";
import MasterHeader from "../components/home/MasterHeader";

function Home() {
  return (
    <Fragment>
      <MasterHeader />
      <AboutMe />
      <Contact />
    </Fragment>
  );
}

export default Home;
