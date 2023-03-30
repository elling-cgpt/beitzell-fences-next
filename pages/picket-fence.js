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

const PicketFence = (props) => {
  return (
    <>
      <div className="picket-fence-container">
        <Head>
          <title>picket-fence - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="picket-fence - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="picket-fence-page-container">
          <div className="picket-fence-header-container">
            <HeaderBrand phone_number="703-754-0011"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <div className="picket-fence-content-section">
            <h1 className="picket-fence-text">
              <span>Picket Fences</span>
              <br></br>
            </h1>
            <div className="picket-fence-content-body-row ContentBodyRowParagraph">
              <span className="picket-fence-text03">
                <span>
                  At Beitzell Fence, we offer a wide range of fencing options
                  for your residential property, including the classic and
                  charming picket fence. Our picket fences are designed to
                  enhance your home&apos;s curb appeal while providing security
                  and privacy for your family.
                </span>
                <br></br>
                <br></br>
                <span>
                  Picket fences are a timeless addition to any home. They are
                  ideal for defining property boundaries, adding character to
                  your landscaping, and providing a safe space for children and
                  pets to play. Picket fences also offer excellent visibility,
                  allowing you to keep an eye on your surroundings while
                  enjoying the outdoors.
                </span>
                <br></br>
                <br></br>
                <span>
                  We offer a variety of picket fence options to suit your needs
                  and preferences. Our picket fences are available in wood,
                  vinyl, and aluminum materials, and we offer a range of styles
                  and colors to choose from. Whether you prefer a traditional
                  white picket fence or something more modern and colorful, we
                  can help you find the perfect picket fence for your home.
                </span>
                <br></br>
                <br></br>
                <span>
                  When you choose Beitzell Fence for your picket fence
                  installation, you can trust that you&apos;re getting the
                  highest quality service. Our team of experts will work with
                  you to design and install your picket fence to your exact
                  specifications. We also offer maintenance and repair services
                  to ensure that your picket fence stays looking great for years
                  to come.
                </span>
                <br></br>
                <br></br>
                <span>
                  Contact us today to schedule a free estimate and claim our
                  special offer of $200 off installations of over 100 feet of
                  new fence. We look forward to working with you!
                </span>
              </span>
            </div>
          </div>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name25"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="picket-fence-content-section1">
            <h1 className="picket-fence-text17">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="picket-fence-content-body-row1 ContentBodyRowParagraph">
              <span className="picket-fence-text20">
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
          .picket-fence-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .picket-fence-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .picket-fence-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .picket-fence-content-section {
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
          .picket-fence-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .picket-fence-content-body-row {
            height: auto;
          }
          .picket-fence-text03 {
            width: 100%;
            z-index: 100;
          }
          .picket-fence-content-section1 {
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
          .picket-fence-text17 {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .picket-fence-content-body-row1 {
            height: auto;
          }
          .picket-fence-text20 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .picket-fence-text {
              text-align: left;
            }
            .picket-fence-text17 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .picket-fence-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .picket-fence-text {
              text-align: left;
            }
            .picket-fence-content-section1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .picket-fence-text17 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .picket-fence-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .picket-fence-content-section1 {
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

export default PicketFence
