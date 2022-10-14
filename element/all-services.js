import { useState } from 'react'

function AllServices() {
  const [open, setOpen] = useState('p2')
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className='content-inner'
        style={{ backgroundImage: 'url(images/background/bg1.png)' }}
      >
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.1s'
            >
              <div
                className={`${
                  open === 'p1'
                    ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                    : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                }`}
                onMouseOver={() => setOpen('p1')}
              >
                <div className='icon-bx-md radius bg-yellow shadow-yellow'>
                  <a href='#' className='icon-cell'>
                    <i className='flaticon-office'></i>
                  </a>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>Ecommerce</h4>
                  <p>
                    Custom product templates, payment gateways, and eCommerce
                    platforms integrated.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div
                className={`${
                  open === 'p2'
                    ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                    : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                }`}
                onMouseOver={() => setOpen('p2')}
              >
                <div className='icon-bx-md radius bg-red shadow-red'>
                  <a href='#' className='icon-cell'>
                    <i className='flaticon-website'></i>
                  </a>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>Web Development</h4>
                  <p>
                    Pixel perfect implementation using the best tech stack. From
                    simple landing page to complete web app. We do it all.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.3s'
            >
              <div
                className={`${
                  open === 'p3'
                    ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                    : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                }`}
                onMouseOver={() => setOpen('p3')}
              >
                <div className='icon-bx-md radius bg-green shadow-green'>
                  <a href='#' className='icon-cell'>
                    <i className='flaticon-pie-charts'></i>
                  </a>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>Web Solution</h4>
                  <p>
                    If your product is not user-friendly no one gonna it. We
                    have this problem with our UX experts.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.4s'
            >
              <div
                className={`${
                  open === 'p4'
                    ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                    : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                }`}
                onMouseOver={() => setOpen('p4')}
              >
                <div className='icon-bx-md radius bg-skyblue shadow-skyblue'>
                  <a href='#' className='icon-cell'>
                    <i className='flaticon-dollar'></i>
                  </a>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>Frontend Development</h4>
                  <p>
                    Offering frontend services using the latest technologies
                    like React, HTML5, CSS, Bootstrap, Material Design.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.5s'
            >
              <div
                className={`${
                  open === 'p5'
                    ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                    : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                }`}
                onMouseOver={() => setOpen('p5')}
              >
                <div className='icon-bx-md radius bg-orange shadow-orange'>
                  <a href='#' className='icon-cell'>
                    <i className='flaticon-line-graph'></i>
                  </a>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>Backend Development</h4>
                  <p>
                    Using the most popular runtime environment node js to build
                    your backend.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.6s'
            >
              <div
                className={`${
                  open === 'p6'
                    ? 'icon-bx-wraper style-1 box-hover text-center m-b30 active'
                    : 'icon-bx-wraper style-1 box-hover text-center m-b30'
                }`}
                onMouseOver={() => setOpen('p6')}
              >
                <div className='icon-bx-md radius bg-maroon shadow-maroon'>
                  <a href='#' className='icon-cell'>
                    <i className='flaticon-help'></i>
                  </a>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>24X7 Support</h4>
                  <p>
                    Supporting all your needs and guiding you through your
                    problems to ensure a satisfactory customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AllServices
