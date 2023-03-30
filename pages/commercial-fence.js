import React from 'react'
import Head from 'next/head'

import HeaderBrand from '../components/header-brand'
import HeroForm from '../components/hero-form'
import OfferRow from '../components/offer-row'
import BrandSpacer from '../components/brand-spacer'
import AboutSection from '../components/about-section'
import TestimonialSection from '../components/testimonial-section'
import FinalFormRow from '../components/final-form-row'
import Footer from '../components/footer'

const CommercialFence = (props) => {
  return (
    <>
      <div className="commercial-fence-container">
        <Head>
          <title>commercial-fence - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="commercial-fence - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="commercial-fence-page-container">
          <div className="commercial-fence-header-container">
            <HeaderBrand phone_number="703-754-0011"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <div className="commercial-fence-content-section">
            <h1 className="commercial-fence-text">
              <span>Commercial Fence</span>
              <br></br>
            </h1>
            <div className="commercial-fence-content-body-row ContentBodyRowParagraph">
              <span className="commercial-fence-text03">
                <span>
                  Welcome to Beitzell Fence Co., your trusted partner for
                  commercial fencing solutions in Northern Virginia. We have
                  been proudly serving businesses in the area for over 30 years
                  and are dedicated to providing the highest quality products
                  and services to meet all of your commercial fencing needs.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our team of experts understands the unique challenges faced by
                  businesses when it comes to fencing. Whether you need to
                  protect your property, secure your assets, or simply enhance
                  the aesthetics of your building, we have the experience and
                  expertise to deliver customized solutions that meet your
                  specific requirements.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence Co., we offer a wide range of commercial
                  fencing options to choose from, including chain link fencing,
                  aluminum fencing, and high-security fencing. Our fences are
                  designed to provide superior protection against intruders,
                  while also adding an attractive element to your property.
                </span>
                <br></br>
                <br></br>
                <span>
                  With our team of experienced professionals, you can rest
                  assured that your commercial fencing project will be completed
                  on time and within budget. We take pride in our workmanship
                  and strive to provide our clients with the highest level of
                  customer service.
                </span>
                <br></br>
                <br></br>
                <span>
                  Contact us today to learn more about our commercial fencing
                  services and to schedule a free estimate. Let us help you
                  enhance the security and value of your business with our
                  top-quality fencing solutions
                </span>
              </span>
            </div>
          </div>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name10"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="commercial-fence-content-section1">
            <h1 className="commercial-fence-text17">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="commercial-fence-content-body-row1 ContentBodyRowParagraph">
              <span className="commercial-fence-text20">
                <span>
                  At Beitzell Fence Co., we offer a wide range of commercial
                  fencing solutions to meet the unique needs of businesses in
                  Northern Virginia. Our team of experienced fencing contractors
                  is well-equipped to handle any commercial fencing project, no
                  matter how big or small.
                </span>
                <br></br>
                <br></br>
                <span>
                  We specialize in chain link, aluminum, and high-security
                  fencing, all of which provide excellent protection and
                  durability for your commercial property. Our chain link fences
                  are versatile and can be customized with additional security
                  features such as ID access gates, barbed wire, or privacy
                  slats. Aluminum fencing, on the other hand, provides a more
                  elegant look that can enhance the visual appeal of your
                  property while still providing reliable protection. And for
                  businesses that require the ultimate in security, we offer
                  high-security fencing that is resistant to climbing, cutting,
                  and breakage.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our team understands that every business has unique security
                  needs, which is why we work closely with our clients to design
                  and install the perfect commercial fencing solution for their
                  property. Whether you need to protect a government or military
                  asset, an industrial or commercial site, or a school or
                  landfill, we have the experience and expertise to get the job
                  done right.
                </span>
                <br></br>
                <br></br>
                <span>
                  Contact us today to schedule a consultation with one of our
                  commercial fencing experts and learn how we can help you
                  protect your business with a durable, reliable fence.
                </span>
              </span>
            </div>
          </div>
          <FinalFormRow
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></FinalFormRow>
          <Footer></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .commercial-fence-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .commercial-fence-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .commercial-fence-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .commercial-fence-content-section {
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
          .commercial-fence-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .commercial-fence-content-body-row {
            height: auto;
          }
          .commercial-fence-text03 {
            width: 100%;
            z-index: 100;
          }
          .commercial-fence-content-section1 {
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
          .commercial-fence-text17 {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .commercial-fence-content-body-row1 {
            height: auto;
          }
          .commercial-fence-text20 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .commercial-fence-text {
              text-align: left;
            }
            .commercial-fence-text17 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .commercial-fence-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .commercial-fence-text {
              text-align: left;
            }
            .commercial-fence-content-section1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .commercial-fence-text17 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .commercial-fence-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .commercial-fence-content-section1 {
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

export default CommercialFence
