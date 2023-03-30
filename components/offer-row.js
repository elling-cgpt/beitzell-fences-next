import React from 'react'

import PropTypes from 'prop-types'

const OfferRow = (props) => {
  return (
    <>
      <div className="offer-row-offer-row">
        <div className="offer-row-container">
          <div className="offer-row-primary-offer-row">
            <div className="offer-row-offer-row-discount-col">
              <span className="offer-row-text">
                <span>$200 OFF installations of over 100′ </span>
                <span>of new fence.</span>
                <br></br>
              </span>
            </div>
            <div className="offer-row-container1"></div>
            <div className="offer-row-offer-row-gate-col">
              <span className="offer-row-text4">{props.text}</span>
            </div>
          </div>
          <span className="offer-row-text5">
            <span>
              Cannot be combined with other offers. Residential Only. Some
              exclusions may apply. Offer Valid through 3/31/2023.
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .offer-row-offer-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-secondary-300);
          }
          .offer-row-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .offer-row-primary-offer-row {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .offer-row-offer-row-discount-col {
            flex: 0 0 auto;
            display: flex;
            max-width: 420px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .offer-row-text {
            color: rgb(255, 255, 255);
            font-size: 1.5rem;
            text-align: center;
          }
          .offer-row-container1 {
            flex: 0 0 auto;
            width: 5px;
            height: 50px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .offer-row-offer-row-gate-col {
            flex: 0 0 auto;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .offer-row-text4 {
            color: #ffffff;
            font-size: 1.5rem;
            max-width: 420px;
            text-align: center;
          }
          .offer-row-text5 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 1.1rem;
            text-align: center;
            padding-top: var(--dl-space-space-unit);
          }
          @media (max-width: 1600px) {
            .offer-row-offer-row {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .offer-row-text5 {
              color: rgb(255, 255, 255);
              font-size: 1.1rem;
            }
          }
          @media (max-width: 991px) {
            .offer-row-container {
              align-items: center;
            }
            .offer-row-primary-offer-row {
              flex-wrap: wrap;
            }
            .offer-row-offer-row-discount-col {
              width: 100%;
              margin-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .offer-row-text {
              font-weight: bold;
            }
            .offer-row-container1 {
              display: none;
            }
            .offer-row-offer-row-gate-col {
              width: 100%;
              align-items: center;
            }
            .offer-row-text4 {
              width: 100%;
              font-weight: bold;
            }
            .offer-row-text5 {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  )
}

OfferRow.defaultProps = {
  text: 'Free Gate with any 150 foot fence installation',
}

OfferRow.propTypes = {
  text: PropTypes.string,
}

export default OfferRow
