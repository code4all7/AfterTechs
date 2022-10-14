import { useEffect, useState } from 'react'
import Link from 'next/link'
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState('p2')
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className='content-inner-2 wow fadeInUp'
        style={{ backgroundImage: 'url(images/background/bg1.png)' }}
      >
        <div className='container'>
          <div className='section-head style-1 text-center'>
            <h6 className='sub-title bgl-primary m-b20 text-primary'>
              Services
            </h6>
            <h2 className='title'>Whatever you need, we build</h2>
          </div>
          <div className='row'>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
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
                  <Link href='#'>
                    <a className='icon-cell'>
                      <i className='flaticon-office'></i>
                    </a>
                  </Link>
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
              data-wow-delay='0.4s'
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
                  <Link href='#'>
                    <a className='icon-cell'>
                      <i className='flaticon-website'></i>
                    </a>
                  </Link>
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
              data-wow-delay='0.6s'
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
                  <Link href='#'>
                    <a className='icon-cell'>
                      <i className='flaticon-pie-charts'></i>
                    </a>
                  </Link>
                </div>
                <div className='icon-content'>
                  <h4 className='dlab-title'>UI/UX</h4>
                  <p>
                    If your product is not user-friendly no one gonna it. We
                    have this problem with our UX experts.
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

export default Service
