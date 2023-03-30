import React from 'react'

import PropTypes from 'prop-types'

import ContentSectionHeading2 from './content-section-heading2'
import ContentSectionText2 from './content-section-text2'

const ContentSection2 = (props) => {
  return (
    <>
      <div
        className={`content-section2-content-section ${props.rootClassName} `}
      >
        <ContentSectionHeading2 rootClassName="content-section-heading2-root-class-name"></ContentSectionHeading2>
        <ContentSectionText2 rootClassName="content-section-text2-root-class-name"></ContentSectionText2>
      </div>
      <style jsx>
        {`
          .content-section2-content-section {
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
          @media (max-width: 767px) {
            .content-section2-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .content-section2-content-section {
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

ContentSection2.defaultProps = {
  rootClassName: '',
}

ContentSection2.propTypes = {
  rootClassName: PropTypes.string,
}

export default ContentSection2
