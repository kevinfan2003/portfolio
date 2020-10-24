import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import animals from "../img/animals";
import photoJournalisms from "../img/photoJournalisms";
import abstracts from "../img/abstracts";
import farAways from "../img/farAways";
import { Button } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

const Portfolio = () => {
  const [images, setImages] = useState([
    ...animals,
    ...photoJournalisms,
    ...abstracts,
    ...farAways,
  ]);

  const buttonStyle = { margin: 10, borderColor: "black" };
  const buttons = [
    {
      value: "All",
      style: buttonStyle,
      onClick: () =>
        setImages([...animals, ...photoJournalisms, ...abstracts, ...farAways]),
    },
    {
      value: "Animal",
      style: buttonStyle,
      onClick: () => setImages(animals),
    },
    {
      value: "People",
      style: buttonStyle,
      onClick: () => setImages(photoJournalisms),
    },
    {
      value: "Abstract",
      style: buttonStyle,
      onClick: () => setImages(abstracts),
    },
    {
      value: "Far Far Away",
      style: buttonStyle,
      onClick: () => setImages(farAways),
    },
  ];
  return (
    <section id='gallary' className='portfolio-mf sect-pt4 route'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='title-box text-center'>
              <h3 className='title-a'>Gallary</h3>
              <p className='subtitle-a'>Here is all my photos.</p>
              <div className='line-mf'></div>
            </div>
          </div>
          <div
            className='row'
            style={{
              marginBottom: "20px",
              marginLeft: "-20px",
            }}
          >
            {buttons.map((button, i) => (
              <Button
                key={i}
                variant='outlined'
                className='btn btn-primary btn js-scroll px-4'
                size='large'
                onClick={button.onClick}
                style={button.style}
              >
                {button.value}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "auto",
          backgroundColor: "grey",
        }}
      >
        <LazyLoad>
          <StyleRoot>
            <Coverflow
              displayQuantityOfSide={2}
              navigation={false}
              enableHeading
              height='800'
              enableScroll={true}
              clickable={true}
              active={Math.floor(images.length / 2)}
              children={images.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  alt={image.title}
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                  media={{
                    "@media (max-width: 900px)": {
                      width: "600px",
                      height: "300px",
                    },
                    "@media (min-width: 900px)": {
                      width: "960px",
                      height: "600px",
                    },
                  }}
                />
              ))}
            />
          </StyleRoot>
        </LazyLoad>
      </div>
    </section>
  );
};

export default Portfolio;
