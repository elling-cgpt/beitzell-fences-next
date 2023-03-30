import React from 'react'

import PropTypes from 'prop-types'

const AboutSection = (props) => {
  return (
    <>
      <div className="about-section-about-section">
        <div className="about-section-about-row-inner-col">
          <div className="about-section-about-row-title-row">
            <span className="about-section-text">
              <span className="about-section-text01">
                Beitzell Fence Company
              </span>
              <br></br>
            </span>
          </div>
          <div className="about-section-about-row-content-row">
            <div className="about-section-about-row-content-col">
              <span className="about-section-text03">
                <span className="about-section-text04">
                  Beitzell Fence has provided high-quality fences, unsurpassed
                  service and low prices for over 30 years. Beitzell Fence is
                  family-owned and offers a wide variety of residential and
                  commercial fencing.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="about-section-text05"></br>
                <br className="about-section-text06"></br>
                <span className="about-section-text07">
                  Our fences will enhance your property and boost your security.
                  Beitzell Fence can provide fencing for homes, businesses and
                  athletic facilities. Contact us today for a
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-section-text08">FREE ESTIMATE</span>
                <span className="about-section-text09">!</span>
                <br></br>
              </span>
            </div>
            <div className="about-section-about-row-award-col">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="about-section-image"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-section-about-section {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: 800px;
            align-self: center;
            align-items: flex-start;
          }
          .about-section-about-row-inner-col {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-section-about-row-title-row {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .about-section-text {
            color: var(--dl-color-secondary-300);
            width: 100%;
            font-size: 3rem;
            text-align: left;
          }
          .about-section-text01 {
            font-weight: 700;
          }
          .about-section-about-row-content-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            justify-content: center;
          }
          .about-section-about-row-content-col {
            flex: 3;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .about-section-text03 {
            font-size: 1.2rem;
          }
          .about-section-text04 {
            font-family: Raleway;
          }
          .about-section-text05 {
            font-family: Raleway;
          }
          .about-section-text06 {
            font-family: Raleway;
          }
          .about-section-text07 {
            font-family: Raleway;
          }
          .about-section-text08 {
            color: var(--dl-color-success-300);
            font-family: Raleway;
          }
          .about-section-text09 {
            color: var(--dl-color-success-300);
            font-family: Raleway;
          }
          .about-section-about-row-award-col {
            flex: 1;
            width: 250px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-section-image {
            width: 100%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .about-section-about-row-content-row {
              flex-wrap: wrap;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-section-text03 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .about-section-about-row-content-row {
              flex-wrap: wrap;
            }
            .about-section-about-row-content-col {
              flex: 0 0 auto;
              margin-right: var(--dl-space-space-halfunit);
            }
            .about-section-about-row-award-col {
              flex: 0 0 auto;
              width: 100%;
            }
            .about-section-image {
              flex: 0;
            }
          }
          @media (max-width: 479px) {
            .about-section-text03 {
              font-size: 28px;
            }
            .about-section-text04 {
              font-family: Raleway;
            }
            .about-section-text05 {
              font-family: Raleway;
            }
            .about-section-text06 {
              font-family: Raleway;
            }
            .about-section-text07 {
              font-family: Raleway;
            }
            .about-section-text08 {
              color: var(--dl-color-success-300);
              font-family: Raleway;
            }
            .about-section-text09 {
              color: var(--dl-color-success-300);
              font-family: Raleway;
            }
          }
        `}
      </style>
    </>
  )
}

AboutSection.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/va_fairfax_fence-companies_2021-1500w.webp',
}

AboutSection.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default AboutSection
