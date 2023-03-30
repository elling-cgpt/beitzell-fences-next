import React from 'react'

import PropTypes from 'prop-types'

const HeroForm = (props) => {
  return (
    <>
      <div id="hero-form" className="hero-form-form-row">
        <div className="hero-form-form-col-inner">
          <div className="hero-form-form-col">
            <div className="hero-form-container">
              <span className="hero-form-text">
                <span>Beitzell Fence Company:</span>
                <br></br>
                <span className="hero-form-text03">Making Good Neighbors</span>
                <br className="hero-form-text04"></br>
                <span className="hero-form-text05">For Over 30 Years</span>
                <br></br>
              </span>
            </div>
            <div className="hero-form-container1">
              <span className="hero-form-text07">
                <span>
                  GET A FREE ESTIMATE &amp;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>CLAIM $200 OFF*</span>
              </span>
            </div>
            <form
              action="https://convertgpt.vercel.app/api/new_lead"
              method="post"
              enctype="application/x-www-form-urlencoded"
              className="hero-form-form"
            >
              <div className="hero-form-container2">
                <input
                  type="text"
                  name="client_id"
                  value="58152ae5-3092-48a4-ae8d-1c830e0b904c"
                  required
                  placeholder="1"
                  className="hero-form-inputclientid input"
                />
                <input
                  type="text"
                  name="landing_page_id"
                  value="a0fa1304-36dd-43e8-833f-49393299ba10"
                  required
                  placeholder={props.inputlanding_page_id_placeholder}
                  className="hero-form-inputlandingpageid input"
                />
                <input
                  type="text"
                  name="name"
                  placeholder={props.textinput_placeholder}
                  className="hero-form-textinput input"
                />
                <div className="hero-form-container3">
                  <input
                    type="email"
                    name="email"
                    placeholder={props.textinput_placeholder2}
                    className="hero-form-textinput1 input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={props.textinput_placeholder3}
                    className="hero-form-textinput2 input"
                  />
                </div>
                <div className="hero-form-container4">
                  <input
                    type="text"
                    name="city"
                    placeholder={props.textinput_placeholder4}
                    className="hero-form-textinput3 input"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder={props.textinput_placeholder5}
                    className="hero-form-textinput4 input"
                  />
                </div>
                <input
                  type="text"
                  name="message"
                  placeholder={props.textinput_placeholder1}
                  className="hero-form-textinput5 input"
                />
                <button type="submit" className="hero-form-button button">
                  <span className="hero-form-text11">
                    <span>Free Quote</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </form>
            <div className="hero-form-container5"></div>
            <div className="hero-form-container6">
              <span className="hero-form-text14">
                <span>
                  * Cannot be combined with other offers. Residential Only. Some
                  exclusions may apply. Offer Valid through 3/31/2023.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-form-form-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/white-wooden-fence-1500w.jpg');
          }
          .hero-form-form-col-inner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-form-form-col {
            width: 450px;
            padding: var(--dl-space-space-unit);
            max-width: 500px;
            box-shadow: 0px 0px 4px 0px #f9f9f9;
            margin-left: var(--dl-space-space-fourunits);
            border-color: #007733;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #79332d;
          }
          .hero-form-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .hero-form-text {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 30px;
            text-align: center;
            font-weight: bold;
            text-shadow: 0.08em 0.08em 0.08em rgb(0 0 0 / 40%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .hero-form-text03 {
            font-style: italic;
          }
          .hero-form-text05 {
            font-style: italic;
          }
          .hero-form-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-success-300);
          }
          .hero-form-text07 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 20px;
            text-align: center;
            font-weight: bold;
          }
          .hero-form-form {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
          }
          .hero-form-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-form-inputclientid {
            display: none;
          }
          .hero-form-inputlandingpageid {
            display: none;
          }
          .hero-form-textinput {
            width: 100%;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .hero-form-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .hero-form-textinput1 {
            width: 47%;
          }
          .hero-form-textinput2 {
            width: 45%;
          }
          .hero-form-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .hero-form-textinput3 {
            width: 47%;
          }
          .hero-form-textinput4 {
            width: 45%;
          }
          .hero-form-textinput5 {
            width: 100%;
            height: var(--dl-size-size-large);
            align-self: flex-start;
            text-align: start;
          }
          .hero-form-button {
            padding: var(--dl-space-space-unit);
            font-size: 20px;
            margin-top: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-300);
          }
          .hero-form-text11 {
            color: #ffffff;
          }
          .hero-form-container5 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .hero-form-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .hero-form-text14 {
            color: rgb(255, 255, 255);
            margin-top: var(--dl-space-space-twounits);
          }
          @media (max-width: 1600px) {
            .hero-form-text {
              color: rgb(255, 255, 255);
              font-size: 30px;
              font-weight: bold;
            }
            .hero-form-text03 {
              font-style: italic;
            }
            .hero-form-text04 {
              font-style: italic;
            }
            .hero-form-text05 {
              font-style: italic;
            }
            .hero-form-inputclientid {
              display: none;
            }
            .hero-form-inputlandingpageid {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .hero-form-form-row {
              align-self: center;
            }
            .hero-form-form-col-inner {
              max-width: 880px;
              align-self: center;
              align-items: center;
              justify-content: flex-start;
            }
            .hero-form-form-col {
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .hero-form-form-row {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-form-form-col {
              width: 100%;
              max-width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-form-form-row {
              padding-left: 0px;
              padding-right: 0px;
            }
            .hero-form-form-col {
              border-color: transparent;
              border-width: 0px;
              border-radius: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

HeroForm.defaultProps = {
  inputlanding_page_id_placeholder: '1',
  textinput_placeholder1: 'Message',
  textinput_placeholder4: 'City',
  inputclient_id_placeholder: '1',
  textinput_placeholder3: 'Phone',
  textinput_placeholder2: 'Email Address',
  textinput_placeholder5: 'State',
  textinput_placeholder: 'Name',
}

HeroForm.propTypes = {
  inputlanding_page_id_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  inputclient_id_placeholder: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textinput_placeholder5: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default HeroForm
