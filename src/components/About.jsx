import React from "react";

const About = () => {
  const aboutMe = [
    {
      id: "first-p-about",
      content:
        "Hi there! My name is Kevin Fan and welcome to my portfolio! As a professional photographer, I am always searching for opportunities to capture every beautiful occurring in life. These include animal photography, nature photography, abstract, and even photojournalism! Take a look at my photos and learn more about my professional background!",
    },
  ];

  return (
    <section id='about' className='about-mf sect-pt4 route'>
      <div className='container'>
        <div className='col-sm-12'>
          <div className='box-shadow-full'>
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
        </div>
      </div>
    </section>
  );
};

export default About;
