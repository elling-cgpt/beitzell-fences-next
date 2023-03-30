import React from 'react'

import PropTypes from 'prop-types'

const BrandSpacer = (props) => {
  return (
    <>
      <div
        className={`brand-spacer-brand-spacer ${props.rootClassName} `}
      ></div>
      <style jsx>
        {`
          .brand-spacer-brand-spacer {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
        `}
      </style>
    </>
  )
}

BrandSpacer.defaultProps = {
  rootClassName: '',
}

BrandSpacer.propTypes = {
  rootClassName: PropTypes.string,
}

export default BrandSpacer
