import React from 'react'

import PropTypes from 'prop-types'

const FinalFormRow = (props) => {
  return (
    <>
      <div className="final-form-row-final-form-row">
        <div className="final-form-row-form-col">
          <div className="final-form-row-container">
            <span className="final-form-row-text">
              <span className="final-form-row-text1">
                Get A Free Fence Estimate
              </span>
              <br></br>
            </span>
          </div>
          <form
            action="https://convertgpt.vercel.app/api/new_lead"
            method="POST"
            enctype="application/x-www-form-urlencoded"
            className="final-form-row-form"
          >
            <div className="final-form-row-container1">
              <input
                type="text"
                name="name"
                placeholder={props.textinput_placeholder}
                className="final-form-row-textinput input"
              />
              <div className="final-form-row-container2">
                <input
                  type="email"
                  name="email"
                  placeholder={props.textinput_placeholder2}
                  className="final-form-row-textinput1 input"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={props.textinput_placeholder3}
                  className="final-form-row-textinput2 input"
                />
              </div>
              <div className="final-form-row-container3">
                <input
                  type="text"
                  name="city"
                  placeholder={props.textinput_placeholder4}
                  className="final-form-row-textinput3 input"
                />
                <input
                  type="text"
                  name="state"
                  placeholder={props.textinput_placeholder5}
                  className="final-form-row-textinput4 input"
                />
              </div>
              <input
                type="text"
                name="message"
                placeholder={props.textinput_placeholder1}
                className="final-form-row-textinput5 input"
              />
              <div className="final-form-row-container4">
                <button type="submit" className="final-form-row-button button">
                  <span className="final-form-row-text3">
                    <span>Free Estimate</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <input
              type="text"
              name="client_id"
              value="58152ae5-3092-48a4-ae8d-1c830e0b904c"
              required
              placeholder={props.inputclient_id_placeholder}
              className="final-form-row-inputclientid input"
            />
            <input
              type="text"
              name="landing_page_id"
              value="a0fa1304-36dd-43e8-833f-49393299ba10"
              required
              placeholder={props.inputlanding_page_id_placeholder}
              className="final-form-row-inputlandingpageid input"
            />
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .final-form-row-final-form-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-secondary-300);
          }
          .final-form-row-form-col {
            width: 80%;
            padding: var(--dl-space-space-unit);
            max-width: 800px;
            margin-left: var(--dl-space-space-fourunits);
            background-color: #79332d;
          }
          .final-form-row-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .final-form-row-text {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 80px;
            text-align: center;
            font-weight: bold;
            text-shadow: 0.08em 0.08em 0.08em rgb(0 0 0 / 40%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .final-form-row-text1 {
            font-family: Roboto Slab;
          }
          .final-form-row-form {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
          }
          .final-form-row-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .final-form-row-textinput {
            width: 100%;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .final-form-row-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .final-form-row-textinput1 {
            width: 47%;
          }
          .final-form-row-textinput2 {
            width: 45%;
          }
          .final-form-row-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .final-form-row-textinput3 {
            width: 47%;
          }
          .final-form-row-textinput4 {
            width: 45%;
          }
          .final-form-row-textinput5 {
            width: 100%;
            height: var(--dl-size-size-large);
            align-self: flex-start;
            text-align: start;
          }
          .final-form-row-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .final-form-row-button {
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-300);
          }
          .final-form-row-text3 {
            color: rgb(255, 255, 255);
          }
          .final-form-row-inputclientid {
            display: none;
          }
          .final-form-row-inputlandingpageid {
            display: none;
          }
          @media (max-width: 1600px) {
            .final-form-row-inputclientid {
              display: none;
            }
            .final-form-row-inputlandingpageid {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .final-form-row-form-col {
              width: 100%;
              max-width: 100%;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
            }
            .final-form-row-text {
              font-size: 3rem;
            }
          }
          @media (max-width: 479px) {
            .final-form-row-form-col {
              padding: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

FinalFormRow.defaultProps = {
  textinput_placeholder1: 'Message',
  textinput_placeholder4: 'City',
  textinput_placeholder5: 'State',
  textinput_placeholder2: 'Email Address',
  inputlanding_page_id_placeholder: '1',
  textinput_placeholder3: 'Phone',
  inputclient_id_placeholder: '1',
  textinput_placeholder: 'Name',
}

FinalFormRow.propTypes = {
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  textinput_placeholder5: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  inputlanding_page_id_placeholder: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  inputclient_id_placeholder: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default FinalFormRow
