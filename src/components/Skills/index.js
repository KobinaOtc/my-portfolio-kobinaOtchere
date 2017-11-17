import React from "react";
import Skills from "./Skills.js";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  pauseOnHover: true,
  arrows: false
};

let sliderContJS = [
{
    imgUrl: "http://developrx.com/wp-content/uploads/2015/09/Unofficial_JavaScript_logo_2.svg_.png",
    name: "JavaScript"
  },

{
    imgUrl: "http://fr.seaicons.com/wp-content/uploads/2015/07/Other-html-5-icon.png",
    name: "HTML"
  },

  {
      imgUrl: "http://divinitycomputing.com/wp-content/uploads/2015/12/css.png",
      name: "CSS"
    }
]

let sliderFrameWares = [
  {
      imgUrl: "http://elmerbalbin.me/assets/img/logos/react.png",
      name: "React"
    },
  {
      imgUrl: "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-128.png",
      name: "Node JS"
    },
  {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXcnXDThflGCCH6mfPNC0AZc6TLO7iO4jKccwA-5Ri7IyM6DH",
      name: "Redux"
    },
  {
      imgUrl: "https://getbootstrap.com/assets/img/bootstrap-stack.png",
      name: "Bootstrap"
    }
]

let sliderDBUnit = [
  {
      imgUrl: "https://zdnet3.cbsistatic.com/hub/i/r/2017/10/19/58167892-60ef-4eec-a43a-3e5cda4a7ea5/resize/370xauto/44143a11635e1f75ab8ec36318aaa16d/mongo-db-logo.png",
      name: "Mongo DB"
    },
  {
      imgUrl: "https://cdn.worldvectorlogo.com/logos/mocha-1.svg",
      name: "Mocha JS"
    },
  {
      imgUrl: "https://camo.githubusercontent.com/431283cc1643d02167aac31067137897507c60fc/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67",
      name: "Chai JS"
    }
]
class SkillsContainer extends React.Component {
  render() {
    return (
      <div>
        <Skills settings={settings} sliderContJS={sliderContJS} sliderFrameWares={sliderFrameWares} sliderDBUnit={sliderDBUnit} />
      </div>
    )
  }
}

export default SkillsContainer;
