import React from "react";
import "./Portfolio.css"
import Slider from "react-slick"

let Portfolio = (props) => (
  <div className="container my-5 ">
    <div className="row">
      <div className="col-md-5 al">
        <h2 className="txt">Portfolio</h2>
      </div>

      <div className="col-md-7">
        <p>Here are some of the projects and programs I have made so far, please feel free to browse through my work and you are always invited to contribute to them if you want.</p>
      </div>
    </div>

      <div className="row">
        <div className="col-md-12">
          <FolioSlider settings={props.settings} data={props.portfolioPicsNLinks}/>
        </div>
      </div>
  </div>
)

let FolioSlider = (props) => (
  <Slider {...props.settings}>
    {props.data.map((item, i) => (
      <div key={item.name + i}>
        <div className="row justify-content-center">
          <a href={item.url}>
            <img src={item.imgUrl} className="img-fluid tofit rounded mx-auto d-block px-5"/>
          </a>
        </div>
        <div className="text-container mt-5">
          <p>
            <a href={item.url}><b>{item.name}</b></a>
          </p>
        </div>
      </div>
    ))
}
    </Slider>
)

export default Portfolio;
