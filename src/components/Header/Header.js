import React from "react";
import "./Header.css";

let Header = (props) => (
  <div>
    <div className="fixed-image">
      <header id="home-section" className="header">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="mt-5">{props.name}</h1>
                  <h3>{props.description}</h3>
                </div>
                <div className="col-lg-4 mt-5 d-none d-lg-block">
                  <img src="https://z-p3-scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/10407976_928437500504430_408290674394934566_n.jpg?oh=c8265c17ce5f217fcd67b9755fe96695&oe=5A94CA4D" className="img-border img-fluid"/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </div>

    <div className="light-color"></div>
  </div>
)
export default Header;
