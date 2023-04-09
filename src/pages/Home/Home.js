import "./Home.css";
import React from "react";
import photo1 from "../../images/pedro.jpg";
import photo2 from "../../images/pexel.jpg";
import photo3 from "../../images/stock.jpg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="home-page">
      <div className="photo-gallery">
        <div className="add-card">
          <FontAwesomeIcon icon={faPlus} />
          <p>Click to add a new photo</p>
        </div>

        <div className="photo-card">
          <img src={photo1} alt="landscape" />
          <p>Explore the world through lens with landscape photography.</p>
        </div>
        <div className="photo-card">
          <img src={photo2} alt="portrait" />
          <p>Capture the beauty of people with portrait photography.</p>
        </div>
        <div className="photo-card">
          <img src={photo3} alt="black and white" />
          <p>Experience the emotion of black and white photography.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;