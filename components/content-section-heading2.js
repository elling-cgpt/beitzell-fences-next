import React from 'react'

import PropTypes from 'prop-types'

const ContentSectionHeading2 = (props) => {
  return (
    <>
      <div
        className={`content-section-heading2-container ${props.rootClassName} `}
      >
        <h1 className="content-section-heading2-text">
          <span>Fencing Experts</span>
          <br></br>
        </h1>
      </div>
      <style jsx>
        {`
          .content-section-heading2-container {
            display: flex;
            position: relative;
          }
          .content-section-heading2-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }

          @media (max-width: 991px) {
            .content-section-heading2-text {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .content-section-heading2-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

ContentSectionHeading2.defaultProps = {
  rootClassName: '',
}

ContentSectionHeading2.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContentSectionHeading2
