import React from "react";
import "./Skills.css";
import Slider from "react-slick"

let Skills = (props) => (
  <div className="padd">
    <div className="bckG">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <h2>Skills</h2>
            <h4 className="mt-5">Languages</h4>
          </div>
          <div className="col-md-7 mt-5">
            <SliderList settings={props.settings} data={props.sliderContJS}/>
          </div>
        </div>


        <div className="row">
          <div className="col-md-5 mt-5">
            <h4>Frameworks</h4>
          </div>
          <div className="col-md-7 mt-5">
            <SliderList settings={props.settings} data={props.sliderFrameWares}/>
          </div>
        </div>

        <div className="row">
          <div  className="col-md-5 mt-5">
            <h4>DataBases & Unit Tests</h4>
          </div>
          <div className="col-md-7 mt-5">
            <SliderList settings={props.settings} data={props.sliderDBUnit}/>
          </div>
        </div>

      </div>
    </div>
    <div className="color-over"></div>
  </div>
)

let SliderList = (props) => (
  <Slider {...props.settings}>
    {props.data.map((item, i) => (
      <div key={item.name + i}>
        <div className="row">
          <img src={item.imgUrl} className="img-fluid siz rounded mx-auto d-block"/>
        </div>
        <div className="text-container">
          <p>
            <b>{item.name}</b>
          </p>
        </div>
      </div>
    ))
}
  </Slider>
)

export default Skills;
