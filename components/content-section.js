import React from 'react'

import PropTypes from 'prop-types'

const ContentSection = (props) => {
  return (
    <>
      <div
        className={`content-section-content-section ${props.rootClassName} `}
      >
        <h1 className="content-section-text">
          <span>Fencing Experts</span>
          <br></br>
        </h1>
        <div className="content-section-content-body-row ContentBodyRowParagraph">
          <span className="content-section-text03">
            <span>
              Welcome to Beitzell Fence, your trusted fencing contractor for
              over 30 years. We offer a wide range of fencing solutions for
              residential, commercial, and athletic facilities. Our goal is to
              provide you with high-quality fences that enhance your property’s
              security and beauty.
            </span>
            <br></br>
            <br></br>
            <span>
              If you’re looking for a pool fence to protect your loved ones and
              add privacy to your backyard oasis, you’ve come to the right
              place. Our team of experts can design and install a pool fence
              that meets your specific needs and preferences.
            </span>
            <br></br>
            <br></br>
            <span>
              At Beitzell Fence, we understand that safety is a top priority for
              any pool owner. That’s why we offer a variety of pool fence
              options, including aluminum, vinyl, and wood. Our fences are built
              with durability and strength in mind to withstand harsh weather
              conditions and keep your pool secure.
            </span>
            <br></br>
            <br></br>
            <span>
              Whether you need a fence for a residential or commercial pool, we
              have you covered. Our fences are designed to meet local safety
              regulations and ensure your pool area is protected.Not only do we
              offer a wide range of pool fence options, but we also provide free
              estimates and special offers to help you save on your fence
              installation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              With our $200 off installation of over 100 feet of new fence and
              free gate with any 150-foot fence installation offers, you can
              have peace of mind knowing that you’re getting a great deal.
            </span>
            <br></br>
            <br></br>
            <span>
              When you choose Beitzell Fence, you can trust that you’re working
              with a family-owned and operated business that values exceptional
              customer service. We’ll work closely with you to understand your
              fencing needs and provide you with personalized solutions that
              meet your budget and timeline.
            </span>
            <br></br>
            <br></br>
            <span>
              Don’t wait any longer to install a pool fence to keep your loved
              ones safe and add privacy to your backyard oasis. Contact us today
              to schedule a free estimate and claim our special offer. We look
              forward to working with you!
            </span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .content-section-content-section {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: 800px;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .content-section-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .content-section-content-body-row {
            height: auto;
          }
          .content-section-text03 {
            width: 100%;
            z-index: 100;
          }

          @media (max-width: 991px) {
            .content-section-text {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .content-section-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .content-section-text {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .content-section-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

ContentSection.defaultProps = {
  rootClassName: '',
  text: 'Welcome to Beitzell Fence, your trusted fencing contractor for over 30 years. We offer a wide range of fencing solutions for residential, commercial, and athletic facilities. Our goal is to provide you with high-quality fences that enhance your property’s security and beauty.<br />If you’re looking for a pool fence to protect your loved ones and add privacy to your backyard oasis, you’ve come to the right place. Our team of experts can design and install a pool fence that meets your specific needs and preferences.At Beitzell Fence, we understand that safety is a top priority for any pool owner. That’s why we offer a variety of pool fence options, including aluminum, vinyl, and wood. Our fences are built with durability and strength in mind to withstand harsh weather conditions and keep your pool secure.Whether you need a fence for a residential or commercial pool, we have you covered. Our fences are designed to meet local safety regulations and ensure your pool area is protected.Not only do we offer a wide range of pool fence options, but we also provide free estimates and special offers to help you save on your fence installation. With our $200 off installation of over 100 feet of new fence and free gate with any 150-foot fence installation offers, you can have peace of mind knowing that you’re getting a great deal.When you choose Beitzell Fence, you can trust that you’re working with a family-owned and operated business that values exceptional customer service. We’ll work closely with you to understand your fencing needs and provide you with personalized solutions that meet your budget and timeline.Don’t wait any longer to install a pool fence to keep your loved ones safe and add privacy to your backyard oasis. Contact us today to schedule a free estimate and claim our special offer. We look forward to working with you!',
}

ContentSection.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ContentSection
