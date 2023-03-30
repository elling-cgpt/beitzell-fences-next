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

const FenceInstallation = (props) => {
  return (
    <>
      <div className="fence-installation-container">
        <Head>
          <title>Fence-Installation - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="Fence-Installation - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="fence-installation-page-container">
          <div className="fence-installation-header-container">
            <HeaderBrand phone_number="703-754-0011"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <div className="fence-installation-content-section">
            <h1 className="fence-installation-text">
              <span>Fence Installation</span>
              <br></br>
            </h1>
            <div className="fence-installation-content-body-row ContentBodyRowParagraph">
              <span className="fence-installation-text03">
                <span>
                  Welcome to Beitzell Fence Co., your premier fencing contractor
                  in Northern Virginia! If you&apos;re looking for top-notch
                  fence installation services, you&apos;ve come to the right
                  place. Our team of expert fence contractors has been providing
                  exceptional service for over 30 years, and we take pride in
                  being the leading fence company in the area.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence Co., we offer a wide range of fencing
                  services, including residential and commercial fencing,
                  athletic facility fencing, and fence installation. Our team of
                  experienced professionals will work with you to create the
                  perfect fence for your property, whether you&apos;re looking
                  for enhanced security, privacy, or a boost in curb appeal.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our fences are constructed using only the highest quality
                  materials, and our expert fence installation team ensures that
                  every fence is built to last. With our comprehensive range of
                  fencing options, we can design a fence that perfectly suits
                  your needs and budget.
                </span>
                <br></br>
                <br></br>
                <span>
                  If you&apos;re looking for fence installation services in
                  Northern Virginia, look no further than Beitzell Fence Co.
                  Contact us today for a free estimate and take advantage of our
                  current special offer: $200 off installations of over 100 feet
                  of new fence. Don&apos;t wait - get in touch with us today and
                  let us help you create the perfect fence for your property!
                </span>
              </span>
            </div>
          </div>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name11"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="fence-installation-content-section1">
            <h1 className="fence-installation-text14">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="fence-installation-content-body-row1 ContentBodyRowParagraph">
              <span className="fence-installation-text17">
                <span>
                  At Beitzell Fence, we take great pride in being the leading
                  fence company in Northern Virginia and the surrounding areas.
                  With over 30 years of experience in the fencing industry, we
                  have built a reputation for providing high-quality fences,
                  unsurpassed service, and low prices to our customers.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our family-owned and operated business offers a wide variety
                  of residential and commercial fencing options that will
                  enhance the beauty of your property and boost your security.
                  We understand that every property is unique, which is why our
                  team of experts will work with you to customize a fencing
                  solution that meets your specific needs and budget.
                </span>
                <br></br>
                <br></br>
                <span>
                  When you choose Beitzell Fence for your fence installation
                  needs, you can trust that you&apos;re getting a team of
                  professionals who are dedicated to delivering exceptional
                  customer service. From start to finish, we will ensure that
                  your fence installation project is seamless, efficient, and
                  completed on time and within budget.
                </span>
                <br></br>
                <br></br>
                <span>
                  Don&apos;t just take our word for it – our satisfied customers
                  speak for themselves. Our clients have shared their positive
                  experiences with us, citing our professionalism, good
                  communication, competitive pricing, and prompt, hardworking
                  crews.
                </span>
                <br></br>
                <br></br>
                <span>
                  So, if you&apos;re looking for a reliable and experienced
                  fencing contractor for your fence installation needs, look no
                  further than Beitzell Fence. Contact us today to schedule your
                  free estimate and claim $200 off installations of over 100
                  feet of new fence.
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
          .fence-installation-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .fence-installation-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .fence-installation-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .fence-installation-content-section {
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
          .fence-installation-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .fence-installation-content-body-row {
            height: auto;
          }
          .fence-installation-text03 {
            width: 100%;
            z-index: 100;
          }
          .fence-installation-content-section1 {
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
          .fence-installation-text14 {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .fence-installation-content-body-row1 {
            height: auto;
          }
          .fence-installation-text17 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .fence-installation-text {
              text-align: left;
            }
            .fence-installation-text14 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .fence-installation-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .fence-installation-text {
              text-align: left;
            }
            .fence-installation-content-section1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .fence-installation-text14 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .fence-installation-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .fence-installation-content-section1 {
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

export default FenceInstallation
