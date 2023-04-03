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

const AluminumFence = (props) => {
  return (
    <>
      <div className="aluminum-fence-container">
        <Head>
          <title>aluminum-fence - Beitzell Fence Company</title>
          <meta
            name="description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
          <meta
            property="og:title"
            content="aluminum-fence - Beitzell Fence Company"
          />
          <meta
            property="og:description"
            content="Pool fencing for Northern Virginia and the surrounding areas"
          />
        </Head>
        <div className="aluminum-fence-page-container">
          <div className="aluminum-fence-header-container">
            <HeaderBrand phone_number="703-774-9110"></HeaderBrand>
          </div>
          <HeroForm
            inputclient_id_placeholder="58152ae5-3092-48a4-ae8d-1c830e0b904c"
            inputlanding_page_id_placeholder="a0fa1304-36dd-43e8-833f-49393299ba10"
          ></HeroForm>
          <OfferRow></OfferRow>
          <div className="aluminum-fence-content-section">
            <h1 className="aluminum-fence-text">
              <span>Aluminum Fences</span>
              <br></br>
            </h1>
            <div className="aluminum-fence-content-body-row ContentBodyRowParagraph">
              <span className="aluminum-fence-text03">
                <span>
                  Upgrade your property with a durable and stylish aluminum
                  fence from Beitzell Fence. Our experts design and install
                  fences that are both elegant and secure, adding value to your
                  property while providing a reliable barrier against intruders.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our aluminum fences are available in a range of styles,
                  colors, and heights, ensuring that you can find the perfect
                  match for your needs. From traditional picket styles to sleek
                  and modern designs, we offer something for everyone. Our team
                  of designers will work with you to create a customized
                  solution that complements your property&apos;s existing
                  aesthetic while fulfilling your specific requirements.
                </span>
                <br></br>
                <br></br>
                <span>
                  Aluminum fences offer many benefits over traditional fencing
                  materials. They are lightweight and low maintenance, requiring
                  no painting or staining. Unlike wood, they do not rot or decay
                  and are not susceptible to termite infestation. Aluminum
                  fences are also durable and long-lasting, providing years of
                  reliable service without requiring costly repairs.
                </span>
                <br></br>
                <br></br>
                <span>
                  Our aluminum fences are also incredibly versatile. We offer a
                  range of customization options, including ornamental designs
                  and decorative features such as rings and finials. With an
                  aluminum fence from Beitzell Fence, you can add a touch of
                  sophistication and elegance to your property, elevating its
                  curb appeal and overall value.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence, we pride ourselves on delivering
                  exceptional customer service. Our team of experts is dedicated
                  to providing you with the best possible experience, from
                  initial design through final installation. We offer free
                  estimates and competitive pricing to ensure that our services
                  are accessible to everyone.
                </span>
                <br></br>
                <br></br>
                <span>
                  Choose Beitzell Fence for your aluminum fence needs and enjoy
                  peace of mind knowing that your property is secure and
                  stylish. Contact us today to schedule your free estimate and
                  discover the many benefits of an aluminum fence from Beitzell
                  Fence.
                </span>
              </span>
            </div>
          </div>
          <BrandSpacer></BrandSpacer>
          <AboutSection></AboutSection>
          <BrandSpacer rootClassName="brand-spacer-root-class-name22"></BrandSpacer>
          <TestimonialSection></TestimonialSection>
          <div className="aluminum-fence-content-section1">
            <h1 className="aluminum-fence-text20">
              <span>Fencing Experts</span>
              <br></br>
            </h1>
            <div className="aluminum-fence-content-body-row1 ContentBodyRowParagraph">
              <span className="aluminum-fence-text23">
                <span>
                  At Beitzell Fence, we offer a wide range of aluminum fence
                  options for our clients. Our aluminum fences are perfect for
                  residential and commercial properties alike. They are durable,
                  low-maintenance, and come in a variety of styles to complement
                  any property.
                </span>
                <br></br>
                <br></br>
                <span>
                  One of the main benefits of choosing an aluminum fence is its
                  durability. Aluminum fences are designed to withstand harsh
                  weather conditions and resist rust and corrosion. Unlike
                  wooden fences that can rot or warp, aluminum fences maintain
                  their strength and beauty for years to come.
                </span>
                <br></br>
                <br></br>
                <span>
                  Another benefit of aluminum fences is that they are
                  low-maintenance. You won&apos;t have to worry about painting
                  or staining your fence, and it won&apos;t warp or crack over
                  time. Aluminum fences require very little upkeep, making them
                  a popular choice for busy homeowners and business owners.
                </span>
                <br></br>
                <br></br>
                <span>
                  We offer a variety of styles for our aluminum fences,
                  including ornamental and decorative designs. Our experts can
                  help you choose the perfect style for your property and
                  provide you with a free estimate for the installation.
                </span>
                <br></br>
                <br></br>
                <span>
                  In addition to their durability and low-maintenance, aluminum
                  fences are also environmentally friendly. They are made from
                  recycled materials and are 100% recyclable at the end of their
                  lifespan. Choosing an aluminum fence for your property is not
                  only a wise investment, but it is also a responsible choice
                  for the environment.
                </span>
                <br></br>
                <br></br>
                <span>
                  At Beitzell Fence, we are committed to providing our clients
                  with high-quality fencing solutions. Our team of experts will
                  work closely with you to ensure that you receive the best
                  possible aluminum fence for your property. Contact us today
                  for a free estimate and let us help you enhance the security
                  and beauty of your property with an aluminum fence.
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
          .aluminum-fence-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .aluminum-fence-page-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
          }
          .aluminum-fence-header-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .aluminum-fence-content-section {
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
          .aluminum-fence-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .aluminum-fence-content-body-row {
            height: auto;
          }
          .aluminum-fence-text03 {
            width: 100%;
            z-index: 100;
          }
          .aluminum-fence-content-section1 {
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
          .aluminum-fence-text20 {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .aluminum-fence-content-body-row1 {
            height: auto;
          }
          .aluminum-fence-text23 {
            width: 100%;
            z-index: 100;
          }
          @media (max-width: 991px) {
            .aluminum-fence-text {
              text-align: left;
            }
            .aluminum-fence-text20 {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .aluminum-fence-content-section {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .aluminum-fence-text {
              text-align: left;
            }
            .aluminum-fence-content-section1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .aluminum-fence-text20 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .aluminum-fence-content-section {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .aluminum-fence-content-section1 {
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

export default AluminumFence
