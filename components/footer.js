import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-footer-row-locations">
          <div className="footer-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image"
            />
          </div>
          <div className="footer-container1">
            <span className="footer-text">{props.text}</span>
            <span className="footer-text01">
              <span>16351 Lee Highway,</span>
              <br></br>
              <span>Gainesville, VA 20155</span>
              <br></br>
            </span>
            <a href="tel:7037540011" className="footer-link button">
              <span className="footer-text06 fa-phone-square fa">
                {props.Text}
              </span>
              <span className="footer-text07">
                <span>703-754-0011</span>
                <br></br>
              </span>
            </a>
          </div>
          <div className="footer-container2">
            <span className="footer-text10">{props.text1}</span>
            <span className="footer-text11">
              <span>Monday-Friday</span>
              <br></br>
              <span>9am-5pm</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="footer-footer-row-privacy"></div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
          }
          .footer-footer-row-locations {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .footer-container {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            width: 100%;
            object-fit: cover;
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            color: var(--dl-color-secondary-300);
            font-size: 40px;
            font-weight: 700;
          }
          .footer-text01 {
            font-size: 30px;
          }
          .footer-link {
            width: 100%;
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-success-300);
          }
          .footer-text06 {
            color: #ffffff;
            font-size: 35px;
          }
          .footer-text07 {
            color: rgb(255, 255, 255);
            font-size: 25px;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text10 {
            color: var(--dl-color-secondary-300);
            font-size: 40px;
            font-weight: 700;
          }
          .footer-text11 {
            font-size: 30px;
          }
          .footer-footer-row-privacy {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .footer-footer-row-locations {
              flex-wrap: wrap;
            }
            .footer-container {
              width: 100%;
            }
            .footer-image {
              width: 250px;
              align-self: center;
            }
            .footer-container1 {
              width: 80%;
            }
            .footer-container2 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Text: ' \n',
  text: 'Location',
  image_src: '/playground_assets/beitzell-logo-1500w.png',
  text1: 'Hours',
  image_alt: 'image',
}

Footer.propTypes = {
  Text: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
