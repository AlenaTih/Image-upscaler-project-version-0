import React from "react"
import Oleg from "../assets/designer-photo.png"
import Alena from "../assets/frontend-photo.png"
import GitHubLogo from "../assets/github-logo.png"

function Authors() {
    return (
        <>
            <div className="authors-left">
              <h1 className="authors-title">Authors</h1>
              <p>Image Upscaler is an online service that zooms images and photos from 2 to 6 times. 
                It uses artificial intelligence that enlarges images without loss of quality, 
                making them clearer.</p>
            </div>

            <div className="authors-right">
              <div className="designer-upscaler-container">
                <div className="designer-container">

                  <div className="author-data-container">

                    <svg className="background-svg-designer" width="100%" height="100%">
                      <pattern id="pattern-circles" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                        <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#D1D5E1"></circle>
                      </pattern>
                      <rect  id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                    </svg>

                    <img className="author-image" src={Oleg}></img>
                    <h4 className="author-name">Oleg Vasendin</h4>
                    <p className="author-role">UI/UX Design</p>
                  </div>

                  <div className="contact-container">
                    <a href="#">LinkedIn</a>
                    <p className="author-role">UI/UX Design</p>
                  </div>
                </div>

                <div className="upscaler-link-container">
                  <img className="github-logo" src={GitHubLogo}></img>
                  <p className="upscaler-description"><span className="bold">UpscalerJS</span> — the library is on GitHub, and you can visit the official website with documentation</p>
                </div>
              </div>

              <div className="frontend-developer-container">

                <div className="author-data-container">

                  <svg className="background-svg-frontend" width="100%" height="100%">
                    <pattern id="pattern-circles" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#D1D5E1"></circle>
                    </pattern>
                    <rect  id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                  </svg>

                  <img className="author-image" src={Alena}></img>
                  <h4 className="author-name">Alena Tikhomirova</h4>
                  <p className="author-role">Frontend Development</p>
                </div>

                <div className="contact-container">
                  <a href="#">LinkedIn</a>
                  <p className="author-role">Frontend Development</p>
                  </div>
              </div>
            </div>
        
        </>
    )
}

export default Authors
