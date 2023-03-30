import React from 'react'

import PropTypes from 'prop-types'

const TestimonialSection = (props) => {
  return (
    <>
      <div className="testimonial-section-testimonial-section">
        <div className="testimonial-section-testimonial-row-inner-row">
          <div className="testimonial-section-testimonial-row-inner-col">
            <span className="testimonial-section-testimonial-headline">
              <span className="testimonial-section-text">
                “I can wholeheartedly recommend Beitzell Fence”
              </span>
              <br></br>
            </span>
            <span className="testimonial-section-testimonial-text">
              <span className="testimonial-section-text2">
                “We chose Beitzell Fence to replace an older wooden fence
                because of their professionalism, good communication, and they
                offered the best price out of multiple estimates.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="testimonial-section-text3">
                The work crew was punctual, hardworking and professional, and
                cleaned up the job site when the job was complete.
              </span>
              <span className="testimonial-section-text4">
                {' '}
                I can wholeheartedly recommend Beitzell Fence based on our good
                experience with their team.”
              </span>
              <br className="testimonial-section-text5"></br>
              <br></br>
            </span>
            <span className="testimonial-section-testimonial-author">
              <span>– Robin H.</span>
              <br></br>
            </span>
          </div>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="testimonial-section-testimonial-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-section-testimonial-section {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-secondary-300);
          }
          .testimonial-section-testimonial-row-inner-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            padding-left: 0px;
            padding-right: 0px;
          }
          .testimonial-section-testimonial-row-inner-col {
            flex: 0 0 auto;
            width: 70%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            flex-grow: 2;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-left: 0px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .testimonial-section-testimonial-headline {
            width: 100%;
            font-size: 1.8rem;
            font-weight: bold;
          }
          .testimonial-section-text {
            color: var(--dl-color-secondary-300);
          }
          .testimonial-section-testimonial-text {
            font-size: 1.2rem;
          }
          .testimonial-section-text2 {
            line-height: 1.6;
          }
          .testimonial-section-text3 {
            font-weight: 700;
            line-height: 1.6;
          }
          .testimonial-section-text4 {
            line-height: 1.6;
          }
          .testimonial-section-testimonial-author {
            color: var(--dl-color-secondary-300);
            width: 100%;
            font-size: 28px;
            font-style: italic;
            font-weight: 700;
          }
          .testimonial-section-testimonial-image {
            width: 299px;
            height: 334px;
            align-self: center;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .testimonial-section-testimonial-row-inner-row {
              padding-left: 0px;
              padding-right: 0px;
            }
            .testimonial-section-testimonial-row-inner-col {
              flex: 2;
              width: auto;
              flex-basis: 400px;
              margin-left: 0px;
            }
            .testimonial-section-testimonial-text {
              width: 100%;
              font-size: 1.2rem;
            }
            .testimonial-section-text2 {
              line-height: 1.6;
            }
            .testimonial-section-text3 {
              font-weight: 700;
              line-height: 1.6;
            }
            .testimonial-section-text4 {
              line-height: 1.6;
            }
            .testimonial-section-testimonial-image {
              flex: 0;
              width: auto;
              height: 100%;
              flex-basis: 25%;
              flex-shrink: 1;
              border-radius: var(--dl-radius-radius-radius4);
            }
          }
          @media (max-width: 1200px) {
            .testimonial-section-testimonial-row-inner-row {
              max-width: 1000px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .testimonial-section-testimonial-row-inner-col {
              margin-left: 0px;
            }
          }
          @media (max-width: 991px) {
            .testimonial-section-testimonial-row-inner-row {
              flex-wrap: wrap;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .testimonial-section-testimonial-row-inner-col {
              flex: 0 0 auto;
              width: 100%;
              align-items: center;
              margin-left: 0px;
              margin-bottom: 0px;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .testimonial-section-text2 {
              font-size: 30px;
              line-height: 1.6;
            }
            .testimonial-section-text3 {
              font-size: 30px;
              font-weight: 700;
              line-height: 1.6;
            }
            .testimonial-section-text4 {
              font-size: 30px;
              line-height: 1.6;
            }
            .testimonial-section-text5 {
              font-size: 30px;
              line-height: 1.6;
            }
            .testimonial-section-testimonial-image {
              width: 100%;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .testimonial-section-testimonial-image {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialSection.defaultProps = {
  image_src: '/playground_assets/family-review-1000w.jpg',
  image_alt: 'image',
}

TestimonialSection.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default TestimonialSection
