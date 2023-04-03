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

const BestFenceCompany = (props) => {
  return (
    <>
      <div className="best-fence-company-container">
        <Head>
          <title>best-fence-company - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="best-fence-company - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="best-fence-company-page-container">
          <div className="best-fence-company-header-container">
            <HeaderBrand phone_number="703-774-9110"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <div className="best-fence-company-content-section">
            <h1 className="best-fence-company-text">
              <span>Fence Company</span>
              <br></br>
            </h1>
            <div className="best-fence-company-content-body-row ContentBodyRowParagraph">
              <span className="best-fence-company-text03">
                <span>
                  Welcome to Beitzell Fence – the Best Fence Company in Northern
                  Virginia!
                </span>
                <br></br>
                <br></br>
                <span>
                  Looking for the best fence company in Northern Virginia? Look
                  no further than Beitzell Fence. Our commitment to quality and
                  customer satisfaction has earned us a reputation as the
                  leading fence company in the area.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence, we offer a wide range of fencing options to
                  suit your needs, including wood, vinyl, aluminum, and chain
                  link fences. We use only the highest-quality materials and
                  employ a team of experienced professionals to ensure that your
                  fence is installed with precision and care.
                </span>
                <br></br>
                <br></br>
                <span>
                  But don&apos;t just take our word for it – see what our
                  satisfied customers have to say about our work. With years of
                  experience and a proven track record of success, you can trust
                  Beitzell Fence to provide you with the best fencing solutions
                  for your home or business.
                </span>
                <br></br>
                <br></br>
                <span>
                  Don&apos;t settle for anything less than the best. Choose
                  Beitzell Fence – the best fence company in Northern Virginia.
                  Contact us today to learn more and schedule your free
                  consultation.
                </span>
              </span>
            </div>
          </div>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name21"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="best-fence-company-content-section1">
            <h1 className="best-fence-company-text17">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="best-fence-company-content-body-row1 ContentBodyRowParagraph">
              <span className="best-fence-company-text20">
                <span>
                  At Beitzell Fence Co., we understand that a damaged fence can
                  be a source of stress and frustration. That&apos;s why we take
                  great pride in our Fence Repair services, which are designed
                  to be quick, efficient, and hassle-free.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our team of experienced Fencing Contractors will assess the
                  damage to your fence and provide you with a detailed estimate
                  of the repair costs. We understand that the cost of Fence
                  Repair can be a concern for our customers, which is why we
                  strive to keep our prices competitive and transparent.
                </span>
                <br></br>
                <br></br>
                <span>
                  We use only the highest-quality materials in our Fence Repair
                  services, ensuring that your fence is repaired to the highest
                  standards. Our team of expert Fencing Contractors will work
                  quickly and efficiently to repair your fence and ensure that
                  it is safe and secure for you and your family.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence Co., we understand the importance of
                  communication when it comes to Fence Repair. That&apos;s why
                  we keep our customers informed every step of the way,
                  providing regular updates on the progress of the repair and
                  answering any questions or concerns you may have.
                </span>
                <br></br>
                <br></br>
                <span>
                  In addition to our Fence Repair services, we also offer Fence
                  Maintenance services to keep your fence looking and
                  functioning its best. Our expert Fencing Contractors will work
                  with you to design a custom Fence Maintenance plan to ensure
                  that your fence stays in top shape for years to come.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence Co., we are committed to providing our
                  customers with exceptional service and top-quality results. If
                  your fence is in need of repair, contact us today to schedule
                  your free estimate and experience the Beitzell Fence Co.
                  difference.
                </span>
                <span>
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
          .best-fence-company-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .best-fence-company-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .best-fence-company-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .best-fence-company-content-section {
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
          .best-fence-company-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .best-fence-company-content-body-row {
            height: auto;
          }
          .best-fence-company-text03 {
            width: 100%;
            z-index: 100;
          }
          .best-fence-company-content-section1 {
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
          .best-fence-company-text17 {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .best-fence-company-content-body-row1 {
            height: auto;
          }
          .best-fence-company-text20 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .best-fence-company-text {
              text-align: left;
            }
            .best-fence-company-text17 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .best-fence-company-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .best-fence-company-text {
              text-align: left;
            }
            .best-fence-company-content-section1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .best-fence-company-text17 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .best-fence-company-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .best-fence-company-content-section1 {
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

export default BestFenceCompany
