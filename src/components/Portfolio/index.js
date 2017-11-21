import React from "react";
import Portfolio from "./Portfolio.js"

const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  arrows: false
};

let portfolioPicsNLinks = [
  {
    imgUrl: "https://i.imgur.com/kThZxsS.png",
    name: "Escape The Room",
    url: "https://github.com/KobinaOtc/zork-rpg-style-game"
  },
  {
    imgUrl: "https://i.imgur.com/xjsZIwk.png",
    name: "React Blog",
    url: "https://github.com/KobinaOtc/react-first-blog-project"
  }
]

class PortfolioContainer extends React.Component{
  render() {
    return (
      <div>
        <Portfolio settings={settings} portfolioPicsNLinks={portfolioPicsNLinks}/>
      </div>
    )
  }
}

export default PortfolioContainer;
