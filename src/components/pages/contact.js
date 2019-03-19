import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import pic from "../../../static/assets/images/login.jpg"

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column" 
        style={{
          background: `url(${pic}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone"/>
            </div>
            <div className="text">
              385-248-8552
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope"/>
            </div>
            <div className="text">
              mmyersneil@gmail.com
            </div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt"/>
            </div>
            <div className="text">
              Provo, UT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}