import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services">
        <h1 className="py-5">my services</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 com-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                <h3>Web Deisgn</h3>
                <p>I approach every project individually and always focus on the result.</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 com-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                <h3>Web Development</h3>
                <p>Your website wil be built with new proven technologies.</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 com-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>
                <h3>Facebook Ads SMM</h3>
                <p>Your potential clients will see your services or products on Facebook</p>
              </div>
            </div>
            {/* - */}
            <div className="col-md-3 com-sm-6">
              <div className="box">
                <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                <h3>Google Ads</h3>
                <p>Your service or product will appear at the top of the Google search results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
