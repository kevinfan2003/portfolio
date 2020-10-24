import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import { Button } from "@material-ui/core";
import FlamingoesintheSky from "../img/farAways/FlamingoesintheSky.jpeg";
class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div
        id='home'
        className='intro route bg-image'
        style={{
          backgroundImage: "url(" + FlamingoesintheSky + ")",
        }}
      >
        {/* <div id='stars' />
        <div id='stars2' />
        <div id='stars3' /> */}

        <div className='intro-content display-table'>
          <div className='table-cell'>
            <div className='container'>
              <h1 className='intro-title mb-4'>Hello, I am Kevin Fan</h1>
              <p className='intro-subtitle' style={{ marginBottom: "200px" }}>
                <span className='text-slider-items'></span>
                <strong className='text-slider'>
                  <Typed
                    strings={["An Artist Through the Lens"]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <Button
                variant='outlined'
                className='btn btn-primary btn js-scroll px-4'
                href='#gallary'
                size='large'
                style={{
                  color: "white",
                  borderColor: "white",
                  width: "300px",
                  height: "100px",
                  fontSize: 20,
                }}
              >
                Gallary
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
