import React from 'react'

import PropTypes from 'prop-types'

const ContentSectionText2 = (props) => {
  return (
    <>
      <div
        className={`content-section-text2-container ${props.rootClassName} `}
      >
        <span className="content-section-text2-text">
          <span>
            Welcome to Beitzell Fence, your trusted fencing contractor for over
            30 years. We offer a wide range of fencing solutions for
            residential, commercial, and athletic facilities. Our goal is to
            provide you with high-quality fences that enhance your property’s
            security and beauty.
          </span>
          <br></br>
          <br></br>
          <span>
            If you’re looking for a pool fence to protect your loved ones and
            add privacy to your backyard oasis, you’ve come to the right place.
            Our team of experts can design and install a pool fence that meets
            your specific needs and preferences.
          </span>
          <br></br>
          <br></br>
          <span>
            At Beitzell Fence, we understand that safety is a top priority for
            any pool owner. That’s why we offer a variety of pool fence options,
            including aluminum, vinyl, and wood. Our fences are built with
            durability and strength in mind to withstand harsh weather
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
            free gate with any 150-foot fence installation offers, you can have
            peace of mind knowing that you’re getting a great deal.
          </span>
          <br></br>
          <br></br>
          <span>
            When you choose Beitzell Fence, you can trust that you’re working
            with a family-owned and operated business that values exceptional
            customer service. We’ll work closely with you to understand your
            fencing needs and provide you with personalized solutions that meet
            your budget and timeline.
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
      <style jsx>
        {`
          .content-section-text2-container {
            display: flex;
            position: relative;
          }
          .content-section-text2-text {
            width: 100%;
            z-index: 100;
          }
        `}
      </style>
    </>
  )
}

ContentSectionText2.defaultProps = {
  rootClassName: '',
}

ContentSectionText2.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContentSectionText2
