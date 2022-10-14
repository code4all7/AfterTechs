import Link from 'next/link'

function AboutUs() {
  return (
    <>
      <section className='content-inner'>
        <div className='container'>
          <div className='row align-items-center'>
            <div
              className='col-lg-6 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='dz-media'>
                <img src='images/about/img4.png' className='move-1' alt='' />
              </div>
            </div>
            <div
              className='col-lg-6 m-b30 wow fadeInRight'
              data-wow-duration='2s'
              data-wow-delay='0.4s'
            >
              <div className='section-head style-1 mb-4'>
                <h6 className='sub-title bgl-primary m-b20 text-primary'>
                  About Us
                </h6>
                <h2 className='title'>
                  How We Can Help You Achieve Your Business Goal
                </h2>
              </div>
              <p>
                Aftertechs is a Professional Software Solutions Platform. Here
                we will provide you only interesting content, which you will
                like very much. We're dedicated to providing you the best of
                Software Solutions, with a focus on dependability and web
                development,ui/ux.
              </p>
              <p className='m-b30'>
                We're working to turn our passion for Software Solutions into a
                booming online website. We hope you enjoy our Software Solutions
                as much as we enjoy offering them to you.
              </p>
              {/* <img src='images/sign.png' alt='' /> */}
              <h4 className='m-b30'>Founders</h4>
              <Link href='/about-us-1'>
                <a className='btn btn-link d-inline-flex align-items-center'>
                  <i className='fa fa-angle-right m-r10'></i>Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
