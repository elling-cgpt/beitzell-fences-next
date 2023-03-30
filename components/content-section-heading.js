import React from 'react'

const ContentSectionHeading = (props) => {
  return (
    <>
      <div className="content-section-heading-container">
        <h1 className="content-section-heading-text">
          <span>Fencing Experts</span>
          <br></br>
        </h1>
      </div>
      <style jsx>
        {`
          .content-section-heading-container {
            display: flex;
            position: relative;
          }
          .content-section-heading-text {
            width: 100%;
            font-size: 3rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .content-section-heading-text {
              text-align: left;
            }
          }
          @media (max-width: 767px) {
            .content-section-heading-text {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default ContentSectionHeading
