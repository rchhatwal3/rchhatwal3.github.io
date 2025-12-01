import React, { Component } from 'react'
import resumePDF from "../resume.pdf"

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav> */}
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/img_background2.JPG)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Ramneek Chhatwal</a></h1>
              <span className="email"><a href="mailto: ramychha@gmail.com" target="_blank" rel="noreferrer"><i className="icon-mail"></i>ramychha@gmail.com</a></span><br></br>
              <p><a className="btn btn-primary btn-learn" href={resumePDF} download="Ramneek Chhatwal Resume.pdf" target="_blank" rel="noopener noreferrer">View Resumé<i className="icon-download2" /></a></p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About Me</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#workandresearch" data-nav-section="workandresearch">Work, School and Research</a></li>
                  <li><a href="#certifications" data-nav-section="certifications">Certifications</a></li>
                  <li className="donate-dropdown">
                    <a href="#donate" data-nav-section="donate" className="donate-toggle">Donate</a>
                    <ul className="donate-submenu">
                      <li><a href="https://fundraisers.nyrr.org/ramneek-chhatwal" className="external" target="_blank" rel="noopener noreferrer">Help Me Run the 2026 NYC Marathon</a></li>
                      <li><a href="https://venmo.com/u/ramneek-chhatwal" className="external" target="_blank" rel="noopener noreferrer">Venmo</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="mailto: ramychha@gmail.com" target="_blank" rel="noreferrer"><i className="icon-mail2"></i></a></li>
                <li><a href="https://github.com/rchhatwal3" target="_blank" rel="noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ramneek-chhatwal/" target="_blank" rel="noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://www.facebook.com/ramneek.chhatwal" target="_blank" rel="noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/RamneekChhatwal" target="_blank" rel="noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ramneek_chhatwal/" target="_blank" rel="noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.strava.com/athletes/192998845" target="_blank" rel="noreferrer" className="external">
                  <svg className="icon-strava" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 6l-2.084 6.345z"/>
                  </svg>
                </a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                  <br></br>
                  <a href="https://en.wikipedia.org/wiki/Sikhism" target="_blank" rel="noreferrer"><i className="icon-khanda" /></a>
                  <br></br>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
