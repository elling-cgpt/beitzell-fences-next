import React from 'react'
import Head from 'next/head'

import HeaderBrand from '../components/header-brand'

const ThankYou = (props) => {
  return (
    <>
      <div className="thank-you-container">
        <Head>
          <title>Thank-You - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="Thank-You - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="thank-you-page-container">
          <div className="thank-you-header-container">
            <HeaderBrand phone_number="703-754-0011"></HeaderBrand>
          </div>
          <div className="thank-you-form-row">
            <div className="thank-you-container01">
              <h1 className="thank-you-text">Thank You</h1>
              <span className="thank-you-text01">
                We will be in touch as soon as possible
              </span>
            </div>
          </div>
          <div className="thank-you-container02"></div>
          <div className="thank-you-about-row">
            <div className="thank-you-about-row-inner-col">
              <div className="thank-you-about-row-title-row">
                <span className="thank-you-text02">
                  <span className="thank-you-text03">
                    Beitzell Fence Company
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="thank-you-about-row-content-row">
                <div className="thank-you-about-row-content-col">
                  <span className="thank-you-text05">
                    <span className="thank-you-text06">
                      Beitzell Fence has provided high-quality fences,
                      unsurpassed service and low prices for over 30 years.
                      Beitzell Fence is family-owned and offers a wide variety
                      of residential and commercial fencing. Our fences will
                      enhance your property and boost your security. Beitzell
                      Fence can provide fencing for homes, businesses and
                      athletic facilities. Contact us today for a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="thank-you-text07">FREE ESTIMATE</span>
                    <span className="thank-you-text08">!</span>
                    <br></br>
                  </span>
                </div>
                <div className="thank-you-about-row-award-col">
                  <img
                    alt="image"
                    src="/playground_assets/va_fairfax_fence-companies_2021-300w.webp"
                    className="thank-you-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="thank-you-container03"></div>
          <div className="thank-you-testimonial-row">
            <div className="thank-you-testimonial-row-inner-row">
              <div className="thank-you-testimonial-row-inner-col">
                <span className="thank-you-text10">
                  <span className="thank-you-text11">
                    “I can wholeheartedly recommend Beitzell Fence”
                  </span>
                  <br></br>
                </span>
                <span>
                  <span className="thank-you-text14">
                    “We chose Beitzell Fence to replace an older wooden fence
                    because of their professionalism, good communication, and
                    they offered the best price out of multiple estimates.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="thank-you-text15">
                    The work crew was punctual, hardworking and professional,
                    and cleaned up the job site when the job was complete.
                  </span>
                  <span className="thank-you-text16">
                    {' '}
                    I can wholeheartedly recommend Beitzell Fence based on our
                    good experience with their team.”
                  </span>
                  <br className="thank-you-text17"></br>
                  <br></br>
                </span>
                <span className="thank-you-text19">
                  <span>– Robin H.</span>
                  <br></br>
                </span>
              </div>
              <img
                alt="image"
                src="/playground_assets/family-review-1500w.jpg"
                className="thank-you-image1"
              />
            </div>
          </div>
          <div className="thank-you-final-form-row">
            <div className="thank-you-form-col">
              <div className="thank-you-container04">
                <span className="thank-you-text22">
                  <span className="thank-you-text23">
                    Get A Free Fence Estimate
                  </span>
                  <br></br>
                </span>
              </div>
              <form className="thank-you-form">
                <div className="thank-you-container05">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="thank-you-textinput input"
                  />
                  <div className="thank-you-container06">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="thank-you-textinput1 input"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      className="thank-you-textinput2 input"
                    />
                  </div>
                  <div className="thank-you-container07">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      className="thank-you-textinput3 input"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      className="thank-you-textinput4 input"
                    />
                  </div>
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="thank-you-textinput5 input"
                  />
                </div>
              </form>
              <div className="thank-you-container08">
                <button className="thank-you-button button">
                  <span className="thank-you-text25">
                    <span>Free Estimate</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="thank-you-footer-row">
            <div className="thank-you-footer-row-locations">
              <div className="thank-you-container09">
                <img
                  alt="image"
                  src="/playground_assets/beitzell-logo-1500w.png"
                  className="thank-you-image2"
                />
              </div>
              <div className="thank-you-container10">
                <span className="thank-you-text28">Location</span>
                <span className="thank-you-text29">
                  <span>16351 Lee Highway,</span>
                  <br></br>
                  <span>Gainesville, VA 20155</span>
                  <br></br>
                </span>
                <button className="thank-you-button1 button">
                  <span className="thank-you-text34 fa-phone-square fa"> </span>
                  <span className="thank-you-text35">
                    <span>703-754-0011</span>
                    <br></br>
                  </span>
                </button>
              </div>
              <div className="thank-you-container11">
                <span className="thank-you-text38">Hours</span>
                <span className="thank-you-text39">
                  <span>Monday-Friday</span>
                  <br></br>
                  <span>9am-5pm</span>
                  <br></br>
                </span>
                <button className="thank-you-button2 button">
                  <span className="fa-square-email fa"> </span>
                  <span className="thank-you-text45">
                    <span>Contact Us</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
            <div className="thank-you-footer-row-privacy"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .thank-you-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .thank-you-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .thank-you-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .thank-you-form-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/white-wooden-fence-1500w.jpg');
          }
          .thank-you-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .thank-you-text {
            color: #ffffff;
            box-shadow: 5px 5px 10px 0px #000000;
          }
          .thank-you-text01 {
            color: #ffffff;
            box-shadow: 5px 5px 10px 0px #000000;
          }
          .thank-you-container02 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
          .thank-you-about-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .thank-you-about-row-inner-col {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .thank-you-about-row-title-row {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .thank-you-text02 {
            color: var(--dl-color-secondary-300);
            width: 100%;
            font-size: 50px;
            text-align: center;
          }
          .thank-you-text03 {
            font-weight: 700;
          }
          .thank-you-about-row-content-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            justify-content: center;
          }
          .thank-you-about-row-content-col {
            flex: 0 0 auto;
            width: 700px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .thank-you-text05 {
            font-size: 28px;
          }
          .thank-you-text06 {
            font-family: Raleway;
          }
          .thank-you-text07 {
            color: var(--dl-color-success-300);
            font-family: Raleway;
          }
          .thank-you-text08 {
            color: var(--dl-color-success-300);
            font-family: Raleway;
          }
          .thank-you-about-row-award-col {
            flex: 0 0 auto;
            width: 250px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .thank-you-image {
            width: 100%;
            object-fit: cover;
          }
          .thank-you-container03 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            background-color: var(--dl-color-secondary-300);
          }
          .thank-you-testimonial-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-secondary-300);
          }
          .thank-you-testimonial-row-inner-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .thank-you-testimonial-row-inner-col {
            flex: 0 0 auto;
            width: 70%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .thank-you-text10 {
            width: 100%;
            font-size: 60px;
            font-weight: bold;
          }
          .thank-you-text11 {
            color: var(--dl-color-secondary-300);
          }
          .thank-you-text14 {
            line-height: 1.6;
          }
          .thank-you-text15 {
            font-weight: 700;
            line-height: 1.6;
          }
          .thank-you-text16 {
            line-height: 1.6;
          }
          .thank-you-text19 {
            color: var(--dl-color-secondary-300);
            width: 100%;
            font-size: 28px;
            font-style: italic;
            font-weight: 700;
          }
          .thank-you-image1 {
            width: 299px;
            height: 334px;
            align-self: center;
            object-fit: cover;
          }
          .thank-you-final-form-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-secondary-300);
          }
          .thank-you-form-col {
            width: 80%;
            padding: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-fourunits);
            background-color: #79332d;
          }
          .thank-you-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .thank-you-text22 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 80px;
            text-align: center;
            font-weight: bold;
            text-shadow: 0.08em 0.08em 0.08em rgb(0 0 0 / 40%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .thank-you-text23 {
            font-family: Roboto Slab;
          }
          .thank-you-form {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
          }
          .thank-you-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .thank-you-textinput {
            width: 100%;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .thank-you-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .thank-you-textinput1 {
            width: 47%;
          }
          .thank-you-textinput2 {
            width: 45%;
          }
          .thank-you-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .thank-you-textinput3 {
            width: 47%;
          }
          .thank-you-textinput4 {
            width: 45%;
          }
          .thank-you-textinput5 {
            width: 100%;
            height: var(--dl-size-size-large);
            align-self: flex-start;
            text-align: start;
          }
          .thank-you-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .thank-you-button {
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-300);
          }
          .thank-you-text25 {
            color: rgb(255, 255, 255);
          }
          .thank-you-footer-row {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
          }
          .thank-you-footer-row-locations {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .thank-you-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .thank-you-image2 {
            width: 100%;
            object-fit: cover;
          }
          .thank-you-container10 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .thank-you-text28 {
            color: var(--dl-color-secondary-300);
            font-size: 40px;
            font-weight: 700;
          }
          .thank-you-text29 {
            font-size: 30px;
          }
          .thank-you-button1 {
            width: 100%;
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-300);
          }
          .thank-you-text34 {
            color: #ffffff;
            font-size: 35px;
          }
          .thank-you-text35 {
            color: rgb(255, 255, 255);
            font-size: 25px;
          }
          .thank-you-container11 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .thank-you-text38 {
            color: var(--dl-color-secondary-300);
            font-size: 40px;
            font-weight: 700;
          }
          .thank-you-text39 {
            font-size: 30px;
          }
          .thank-you-button2 {
            width: 100%;
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-success-300);
          }
          .thank-you-text45 {
            color: rgb(255, 255, 255);
            font-size: 25px;
          }
          .thank-you-footer-row-privacy {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 1600px) {
            .thank-you-text {
              color: #ffffff;
            }
            .thank-you-text01 {
              color: #ffffff;
            }
          }
          @media (max-width: 1200px) {
            .thank-you-form-row {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .thank-you-text {
              color: #ffffff;
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .thank-you-text01 {
              color: #fffdfd;
            }
          }
          @media (max-width: 991px) {
            .thank-you-form-row {
              align-self: center;
            }
            .thank-you-text01 {
              color: #ffffff;
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .thank-you-about-row-content-row {
              flex-wrap: wrap;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .thank-you-text05 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .thank-you-testimonial-row-inner-row {
              flex-wrap: wrap;
              padding-bottom: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .thank-you-testimonial-row-inner-col {
              width: 100%;
              align-items: center;
              margin-left: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
              justify-content: flex-start;
            }
            .thank-you-text14 {
              font-size: 30px;
              line-height: 1.6;
            }
            .thank-you-text15 {
              font-size: 30px;
              font-weight: 700;
              line-height: 1.6;
            }
            .thank-you-text16 {
              font-size: 30px;
              line-height: 1.6;
            }
            .thank-you-text17 {
              font-size: 30px;
              line-height: 1.6;
            }
            .thank-you-image1 {
              width: 100%;
              height: 378px;
            }
            .thank-you-footer-row-locations {
              flex-wrap: wrap;
            }
            .thank-you-container09 {
              width: 100%;
            }
            .thank-you-image2 {
              width: 250px;
              align-self: center;
            }
            .thank-you-container10 {
              width: 80%;
            }
            .thank-you-container11 {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .thank-you-text01 {
              color: #ffffff;
              box-shadow: 5px 5px 10px 0px #000000;
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
            }
            .thank-you-form-col {
              width: 100%;
              max-width: 100%;
              margin-left: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .thank-you-form-row {
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .thank-you-text {
              color: var(--dl-color-gray-white);
              box-shadow: 5px 5px 10px 0px #000000;
            }
            .thank-you-text01 {
              color: #ffffff;
              box-shadow: rgb(0, 0, 0) 5px 5px 10px 0px;
            }
            .thank-you-text05 {
              font-size: 28px;
            }
            .thank-you-text06 {
              font-family: Raleway;
            }
            .thank-you-text07 {
              color: var(--dl-color-success-300);
              font-family: Raleway;
            }
            .thank-you-text08 {
              color: var(--dl-color-success-300);
              font-family: Raleway;
            }
          }
        `}
      </style>
    </>
  )
}

export default ThankYou
