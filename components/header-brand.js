import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const HeaderBrand = (props) => {
  return (
    <>
      <div className="header-brand-header-brand-row">
        <div>
          <DangerousHTML
            html={`<meta name="googlebot" content="noindex">`}
          ></DangerousHTML>
        </div>
        <div className="header-brand-header-brand-inner">
          <div className="header-brand-logo-col">
            <div className="header-brand-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="header-brand-image"
              />
            </div>
          </div>
          <div className="header-brand-buttonc-ol">
            <button className="header-brand-button button">
              {props.button_text}
            </button>
          </div>
          <div className="header-brand-call-col">
            <span className="header-brand-text">{props.phone_tagline}</span>
            <a href="tel:7037540011" className="header-brand-link">
              {props.phone_number}
            </a>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-FX4EWMMF8K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-FX4EWMMF8K');
</script>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .header-brand-header-brand-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.97);
          }
          .header-brand-header-brand-inner {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1200px;
            align-self: flex-start;
            align-items: center;
            justify-content: space-between;
          }
          .header-brand-logo-col {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-brand-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 200px;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-brand-image {
            width: 100%;
            object-fit: cover;
          }
          .header-brand-buttonc-ol {
            flex: 1;
            width: 200px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-brand-button {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-300);
          }
          .header-brand-call-col {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-end;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
          }
          .header-brand-text {
            font-size: 18px;
            text-align: right;
            font-weight: 700;
          }
          .header-brand-link {
            color: rgb(45, 121, 78);
            font-size: 30px;
            font-style: normal;
            text-align: right;
            font-weight: 700;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .header-brand-header-brand-row {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .header-brand-logo-col {
              flex: 1;
              width: auto;
            }
            .header-brand-buttonc-ol {
              flex: 1;
              width: auto;
            }
          }
          @media (max-width: 767px) {
            .header-brand-logo-col {
              width: 20%;
            }
            .header-brand-container {
              max-width: 150px;
            }
            .header-brand-buttonc-ol {
              display: none;
            }
            .header-brand-call-col {
              flex: 2;
            }
          }
          @media (max-width: 479px) {
            .header-brand-header-brand-row {
              justify-content: space-between;
            }
            .header-brand-call-col {
              flex-wrap: wrap;
            }
            .header-brand-text {
              font-size: 16px;
            }
            .header-brand-link {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

HeaderBrand.defaultProps = {
  image_alt: 'image',
  phone_tagline: 'Family-Owned & Operated',
  image_src: '/playground_assets/beitzell-logo-300w.png',
  phone_number: '(999) 999-9999',
  button_text: 'Free Quote',
}

HeaderBrand.propTypes = {
  image_alt: PropTypes.string,
  phone_tagline: PropTypes.string,
  image_src: PropTypes.string,
  phone_number: PropTypes.string,
  button_text: PropTypes.string,
}

export default HeaderBrand
