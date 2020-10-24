import React from "react";
import myImg from "../img/myself.jpeg";
const About = () => {
  const aboutMe = [
    {
      id: "first-p-about",
      content: `
        Hi there! My name is Kevin Fan and welcome to my portfolio! As a professional photographer, I am always searching for opportunities to capture every beautiful occurring in life. These include animal photography, nature photography, abstract, and even photojournalism! Take a look at my photos and learn more about my professional background!
 
         
 `,
    },

    {
      id: "second-p-about",
      content: `
 
        My favorite aspect of photography as a professional photographer is the different perspectives of all photographers. Take a deer, for example. One photographer might choose to focus on its face, one might shoot at a bird's eye view, while another might choose to focus only on its eyes! The possibilities of photography is indescribable. 
         
 `,
    },

    {
      id: "third-p-about",
      content: `
 
         
        You may explore the beauty of the world with my photos. Take a virtual safari to Kenya to explore the thirst of life of antelopes, or imagine yourself on a helicopter above the horizons of the great lakes of Masai Mara! Or, observe a flying white egret across the great High Park of Canada! Photography is truly a limitless art.
 `,
    },
  ];

  return (
    <section id='about' className='about-mf sect-pt4 route'>
      <div className='container'>
        <div className='col-sm-12'>
          <div className='box-shadow-full'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='title-box-2'>
                  <h5 className='title-left'>About Me</h5>
                </div>
                {aboutMe.map((content) => {
                  return (
                    <p className='lead' key={content.id}>
                      {content.content}
                    </p>
                  );
                })}
              </div>
              <div className='col-sm-6' style={{ margin: "auto" }}>
                <img src={myImg} alt='myself' width='450px' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
