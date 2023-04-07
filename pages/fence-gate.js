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

const ResidentialFence = (props) => {
  return (
    <>
      <div className="residential-fence-container">
        <Head>
          <title>residential-fence - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="residential-fence - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="residential-fence-page-container">
          <div className="residential-fence-header-container">
            <HeaderBrand phone_number="703-774-9110"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <div className="residential-fence-content-section">
            <h1 className="residential-fence-text">
              <span>Residential Fences</span>
              <br></br>
              <h1>Fence Gate Installation by Beitzell Fence</h1>

<p>Welcome to Beitzell Fence, your go-to fencing contractor for over 30 years. We are a family-owned and operated business that offers high-quality fences, unsurpassed service, and low prices. Our goal is to enhance your property and boost your security with our wide variety of residential and commercial fencing options.</p>

<p>If you're looking for a fence gate installation, you've come to the right place. Our team of experts can provide you with a free estimate and help you choose the best fence gate for your needs. With our experience and dedication, we guarantee you'll be satisfied with the final product.</p>

<h2>What Our Customers Say</h2>

<p>Don't just take our word for it. Here's what our customers have to say:</p>

<blockquote>
    <p>"We chose Beitzell Fence to replace an older wooden fence because of their professionalism, good communication, and they offered the best price out of multiple estimates. The work crew was punctual, hardworking and professional, and cleaned up the job site when the job was complete. I can wholeheartedly recommend Beitzell Fence based on our good experience with their team."</p>
    <footer>- Robin H.</footer>
</blockquote>

<p>Robin's experience is a testament to our commitment to excellent service. We prioritize communication and professionalism throughout the entire process, from the initial estimate to the final installation.</p>

<h2>Our Offers</h2>

<p>At Beitzell Fence, we strive to make our services as affordable as possible. Here are some of our current offers:</p>

<ul>
    <li>Free Estimates</li>
    <li>$200 OFF installations of over 100′ of new fence</li>
    <li>Free Gate with any 150 foot fence installation</li>
</ul>

<p>Take advantage of these offers to save money while still getting the best fence gate installation service in the business.</p>

<h2>Choose Beitzell Fence for Your Fence Gate Installation</h2>

<p>With over 30 years of experience, Beitzell Fence is the best choice for your fence gate installation needs. As a family-owned and operated business, we take pride in our work and strive to make our customers happy. Our tagline, "Making Good Neighbors," reflects our commitment to enhancing your property and boosting your security.</p>

<p>Contact us today for a free estimate
          </div>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name23"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="residential-fence-content-section1">
            <h1 className="residential-fence-text32">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="residential-fence-content-body-row1 ContentBodyRowParagraph">
              <span className="residential-fence-text35">
              <h1>Fence Gate Installation by Beitzell Fence</h1>

<p>Welcome to Beitzell Fence, your go-to fencing contractor for over 30 years. We are a family-owned and operated business that offers high-quality fences, unsurpassed service, and low prices. Our goal is to enhance your property and boost your security with our wide variety of residential and commercial fencing options.</p>

<p>If you're looking for a fence gate installation, you've come to the right place. Our team of experts can provide you with a free estimate and help you choose the best fence gate for your needs. With our experience and dedication, we guarantee you'll be satisfied with the final product.</p>

<h2>What Our Customers Say</h2>

<p>Don't just take our word for it. Here's what one of our customers has to say:</p>

<blockquote>
    <p>"After collecting quotes from five regional fence companies, I selected Beitzell Fence for their competitive quote and engaged approach. Due to land slope, HOA requirements, and privacy needs, the sales rep customized my fence layout and then came by on installation day to ensure the work crew understood the different design. The work crew was prompt, friendly, and efficient, and checked with me for clarification whenever needed. Done in one day and all of my old fence carted away. Yes, would hire again."</p>
    <footer>- Curtis R.</footer>
</blockquote>

<p>Curtis' experience is a testament to our dedication to providing personalized and customized fence gate installations. We understand that every property is unique and we work closely with our customers to ensure that their specific needs are met.</p>

<h2>Our Offer</h2>

<p>At Beitzell Fence, we strive to make our services as affordable as possible. Take advantage of our current offer:</p>

<ul>
    <li>Free Estimates</li>
</ul>

<p>With our free estimate, you can get a better idea of the cost and timeline for your fence gate installation without any commitment or obligation.</p>

<h2>Choose Beitzell Fence for Your Fence Gate Installation</h2>

<p>With over 30 years of experience, Beitzell Fence is the best choice for your fence gate installation needs. As a family-owned and operated business, we take pride in our work and strive to make our customers happy. Our tagline, "Making Good Neighbors," reflects our commitment to enhancing your property and boosting your security.</p
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
          .residential-fence-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .residential-fence-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .residential-fence-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .residential-fence-content-section {
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
          .residential-fence-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .residential-fence-content-body-row {
            height: auto;
          }
          .residential-fence-text03 {
            width: 100%;
            z-index: 100;
          }
          .residential-fence-content-section1 {
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
          .residential-fence-text32 {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .residential-fence-content-body-row1 {
            height: auto;
          }
          .residential-fence-text35 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .residential-fence-text {
              text-align: left;
            }
            .residential-fence-text32 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .residential-fence-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .residential-fence-text {
              text-align: left;
            }
            .residential-fence-content-section1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .residential-fence-text32 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .residential-fence-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .residential-fence-content-section1 {
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

export default ResidentialFence
