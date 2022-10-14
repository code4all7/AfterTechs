import Link from 'next/link'

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className='site-footer style-1'
        id='footer'
        style={{ backgroundImage: 'url(images/background/bg10.png)' }}
      >
        <div className='footer-top'>
          <div className='container'>
            <div
              className='footer-info wow fadeIn'
              data-wow-duration='2s'
              data-wow-delay='0.8s'
            >
              <div className='row align-items-center'>
                <div className='col-xl-6 col-md-4'>
                  <div className='footer-logo'>
                    <a href='/'>
                      {/* <img src='images/logo-white.png' alt='' /> */}
                      <h2 className='logo-color'>AfterTechs</h2>
                    </a>
                  </div>
                </div>
                <div className='col-xl-3 col-md-4 col-sm-6'>
                  <div className='icon-bx-wraper left m-b10'>
                    <div className='icon-lg'>
                      <Link href='#'>
                        <a className='icon-cell'>
                          <i className='flaticon-email'></i>
                        </a>
                      </Link>
                    </div>
                    <div className='icon-content'>
                      <p>
                        {/* +91 987-654-3210
                        <br /> */}
                        info@example.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-4 col-sm-6'>
                  <div className='icon-bx-wraper left m-b10'>
                    <div className='icon-lg'>
                      <Link href='#'>
                        <a className='icon-cell'>
                          <i className='flaticon-location'></i>
                        </a>
                      </Link>
                    </div>
                    <div className='icon-content'>
                      <p>New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div
                className='col-xl-3 col-lg-4 col-sm-6 wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.2s'
              >
                <div className='widget widget_about'>
                  <h5 className='footer-title'>About Us</h5>
                  <p>
                    Our mission is to be forward thinking digital agency ,that
                    helps clients world-wide build stronger digital presence
                    that people remember.
                  </p>
                  <div className='dlab-social-icon'>
                    <ul>
                      {/* <li>
                        <a
                          className='fa fa-facebook'
                          href='https://en-gb.facebook.com/'
                        ></a>
                      </li>
                      <li>
                        <a
                          className='fa fa-instagram'
                          href='https://www.instagram.com/'
                        ></a>
                      </li> */}
                      <li>
                        <a
                          className='fa fa-linkedin'
                          href='https://twitter.com/login?lang=en'
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-3 col-lg-2 col-sm-6 wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.4s'
              >
                <div className='widget widget_services'>
                  <h5 className='footer-title'>Our links</h5>
                  <ul>
                    <li>
                      <Link href='#'>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Team</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href='#'>
                        <a>Blog</a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-3 col-lg-3 col-sm-6 wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.6s'
              >
                <div className='widget widget_services'>
                  <h5 className='footer-title'>Our Services</h5>
                  <ul>
                    <li>
                      <Link href='#'>
                        <a>UI/UX</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Web Design</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Web Development</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href='#'>
                        <a>Digital Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>App Design </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div
                className='col-xl-3 col-lg-3 col-sm-6 wow fadeIn'
                data-wow-duration='2s'
                data-wow-delay='0.8s'
              >
                <div className='widget widget_services'>
                  <h5 className='footer-title'>Other links</h5>
                  <ul>
                    {/* <li>
                      <Link href='#'>
                        <a>FAQ</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href='#'>
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <a>Support</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className='footer-bottom wow fadeIn'
          data-wow-duration='2s'
          data-wow-delay='0.2s'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 text-center'>
                <span className='copyright-text'>
                  Copyright © 2022{' '}
                  <a href='/' target='_blank'>
                    Aftertechs
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer
