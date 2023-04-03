import React from 'react'
import Head from 'next/head'

import HeaderBrand from '../components/header-brand'
import HeroForm from '../components/hero-form'
import OfferRow from '../components/offer-row'
import ContentSection from '../components/content-section'
import BrandSpacer from '../components/brand-spacer'
import AboutSection from '../components/about-section'
import TestimonialSection from '../components/testimonial-section'
import FinalFormRow from '../components/final-form-row'
import Footer from '../components/footer'

const Original = (props) => {
  return (
    <>
      <div className="original-container">
        <Head>
          <title>Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta property="og:title" content="Beitzell Fence Company" />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="original-page-container">
          <div className="original-header-container">
            <HeaderBrand phone_number="703-774-9110"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <ContentSection text="&quot;Welcome to Beitzell Fence Co., your trusted Fencing Contractor for all your Fence Repair needs in Northern Virginia and the surrounding areas. If your fence is in need of repair, don't worry, our expert team of Fencing Contractors is here to help!  We understand that a damaged fence can be a major headache, not to mention a safety hazard for your family and pets. That's why we offer a variety of Fence Repair services to help you get your fence back to its former glory quickly and efficiently.  Our team of experienced Fencing Contractors has the expertise to repair any type of fence, whether it's wood, vinyl, chain-link, or any other material. We take great care in ensuring that your fence is not only repaired but also strengthened to prevent future damage and ensure its longevity.  At Beitzell Fence Co., we use only the highest-quality materials and techniques to ensure that your fence is repaired to the highest standards. We understand that your fence is an investment in your property, and we take great care in ensuring that your investment lasts for years to come.  In addition to our Fence Repair services, we also offer Fence Maintenance services to keep your fence looking and functioning its best. Our expert Fencing Contractors will work with you to understand your specific needs and design a custom Fence Maintenance plan to keep your fence in top shape.  At Beitzell Fence Co., we are committed to providing our customers with exceptional service and top-quality results. With over 30 years of experience, a team of expert Fencing Contractors, and a commitment to customer satisfaction, we are confident that we can exceed your expectations.  In conclusion, if your fence is in need of repair, don't worry, Beitzell Fence Co. has got you covered. Our expert team of Fencing Contractors is here to help you get your fence back to its former glory quickly and efficiently. Contact us today to schedule your free estimate and experience the Beitzell Fence Co. difference.&quot;"></ContentSection>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="original-content-section">
            <h1 className="original-text">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="original-content-body-row ContentBodyRowParagraph">
              <span className="original-text03">
                <span>
                  Welcome to Beitzell Fence, your trusted fencing contractor for
                  over 30 years. We offer a wide range of fencing solutions for
                  residential, commercial, and athletic facilities. Our goal is
                  to provide you with high-quality fences that enhance your
                  property’s security and beauty.
                </span>
                <br></br>
                <br></br>
                <span>
                  If you’re looking for a pool fence to protect your loved ones
                  and add privacy to your backyard oasis, you’ve come to the
                  right place. Our team of experts can design and install a pool
                  fence that meets your specific needs and preferences.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence, we understand that safety is a top priority
                  for any pool owner. That’s why we offer a variety of pool
                  fence options, including aluminum, vinyl, and wood. Our fences
                  are built with durability and strength in mind to withstand
                  harsh weather conditions and keep your pool secure.
                </span>
                <br></br>
                <br></br>
                <span>
                  <span>
                    Whether you need a fence for a residential or commercial
                    pool, we have you covered. Our fences are designed to meet
                    local safety regulations and ensure your pool area is
                    protected.Not only do we offer a wide range of pool fence
                    options, but we also provide free estimates and special
                    offers to help you save on your fence installation.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <br></br>
                <br></br>
                <span>
                  With our $200 off installation of over 100 feet of new fence
                  and free gate with any 150-foot fence installation offers, you
                  can have peace of mind knowing that you’re getting a great
                  deal.
                </span>
                <br></br>
                <br></br>
                <span>
                  When you choose Beitzell Fence, you can trust that you’re
                  working with a family-owned and operated business that values
                  exceptional customer service. We’ll work closely with you to
                  understand your fencing needs and provide you with
                  personalized solutions that meet your budget and timeline.
                </span>
                <br></br>
                <br></br>
                <span>
                  Don’t wait any longer to install a pool fence to keep your
                  loved ones safe and add privacy to your backyard oasis.
                  Contact us today to schedule a free estimate and claim our
                  special offer. We look forward to working with you!
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
          .original-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .original-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .original-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .original-content-section {
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
          .original-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .original-content-body-row {
            height: auto;
          }
          .original-text03 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .original-text {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .original-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .original-text {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .original-content-section {
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

export default Original
