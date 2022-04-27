import "./HomePage.css";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div >
      <div>
      <SectionOne/>
      <SectionTwo/>    
      </div>
    </div>
  );
};

export default HomePage;
