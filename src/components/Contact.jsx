import React from "react";
import imageOverlay from "../img/farAways/SunsetofMasaiMara.jpg";
class Contact extends React.Component {
  render() {
    return (
      <section
        className='paralax-mf footer-paralax bg-image sect-mt4 route'
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className='overlay-mf'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='contact-mf'>
                <div id='contact' className='box-shadow-full'>
                  <div className='title-box-2 pt-4 pt-md-0'>
                    <h5 className='title-left'>Get in Touch</h5>
                  </div>
                  <div className='more-info'>
                    <p className='lead'>
                      What do you want to know from me? You can find me here,
                      here and here.
                    </p>
                  </div>
                  <div className='socials'>
                    <ul>
                      <li>
                        <a
                          href='http://www.instagram.com/kevinfanphotography'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <span className='ico-circle'>
                            <i className='ion-social-instagram'></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://github.com/kevinfan2003'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <span className='ico-circle'>
                            <i className='ion-social-github'></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='copyright-box'></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
