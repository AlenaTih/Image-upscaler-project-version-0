import React, { useState } from 'react';
import ImagePair from './ImagePair.jsx';
import Tab from './Tab.jsx';
import "./DemoContainer.css";
import DemoImageCat from "../assets/demo-image-cat.png";
import Sunset from "../assets/sunset.png";
import Coffee from "../assets/coffee.png";
import CoffeeLaptop from "../assets/coffee-laptop.png";
import NatureLover from "../assets/nature-lover.png";
import Spring from "../assets/spring.png";
import Succulent from "../assets/succulent.png";
import SustainableStay from "../assets/sustainable-stay.png";
import Allien from "../assets/allien.png"
import ElfGirl from "../assets/elf-girl.png"

function DemoContainer() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex)
  }

  // Array of image paths for each tab
  const imagePaths = [
    [DemoImageCat, DemoImageCat],
    [ElfGirl, ElfGirl],
    [Coffee, CoffeeLaptop], 
    [Allien, Allien]
  ]

  return (
    <div className="demo-container">
      <div className="image-pairs">
        {imagePaths.map((paths, index) => (
          <ImagePair 
            key={index} 
            active={activeTab === index} 
            imagePaths={paths} 
          />
        ))}
      </div>
      <div className="tabs">
        {imagePaths.map((paths, index) => (
          <Tab
            key={index}
            index={index}
            active={activeTab === index}
            onClick={handleTabClick}
            imagePaths={paths}
          />
        ))}
    </div>
    </div>
  );
}

export default DemoContainer
