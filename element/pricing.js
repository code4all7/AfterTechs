import { useState } from 'react'
function Pricing() {
  const [open, setOpen] = useState('p2')
  return (
    <>
      <section
        className='content-inner'
        style={{
          backgroundImage: 'url(images/background/bg20.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }}
      >
        <div className='container'>
          <div className='section-head style-1 text-center'>
            {/* <h6 className='sub-title'>PRICING PER BUILD</h6> */}
            <h2 className='title'>CHOOSE PLAN</h2>
          </div>
          <div className='row pricingtable-wraper-2'>
            <div className='col-lg-4 col-md-6'>
              <div
                className={`${
                  open === 'p1'
                    ? 'pricingtable-wrapper active style-1 m-b30'
                    : 'pricingtable-wrapper style-1 center m-b30'
                }`}
                onMouseOver={() => setOpen('p1')}
              >
                <div className='pricingtable-inner'>
                  <div className='pricingtable-title'>
                    <h3 className='title'>Basic</h3>
                  </div>
                  {/* <div className='pricingtable-price'>
                    <h2 className='pricingtable-bx'>
                      $99<small>/Month</small>
                    </h2>
                  </div> */}
                  {/* <p className='text'>
                    Aliquam dui lacus, lobortis quis sapien non.
                  </p> */}
                  <ul className='pricingtable-features'>
                    <li>Web Audit</li>
                    <li>UI/UX</li>
                    <li>Development</li>
                  </ul>
                  <div className='pricingtable-footer'>
                    <a
                      href='/pricing-table-1'
                      className='btn btn-primary rounded-md'
                    >
                      Request quote <i className='fa fa-angle-right m-l10'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-6'>
              <div
                className={`${
                  open === 'p2'
                    ? 'pricingtable-wrapper style-1 active m-b30'
                    : 'pricingtable-wrapper style-1 center m-b30'
                }`}
                onMouseOver={() => setOpen('p2')}
              >
                <div className='pricingtable-inner'>
                  <div className='pricingtable-title'>
                    <h3 className='title'>Standard</h3>
                  </div>
                  {/* <div className='pricingtable-price'>
                    <h2 className='pricingtable-bx'>
                      $199<small>/Month</small>
                    </h2>
                  </div> */}
                  {/* <p className='text'>
                    Aliquam dui lacus, lobortis quis sapien non.
                  </p> */}
                  <ul className='pricingtable-features'>
                    <li>Web Audit</li>
                    <li>UI/UX</li>
                    <li>Development</li>
                    <li>Backups</li>
                    <li>Analytics</li>
                    <li>Live Chat</li>
                    <li>SEO</li>
                    <li>Content Management</li>
                  </ul>
                  <div className='pricingtable-footer'>
                    <a
                      href='/pricing-table-1'
                      className='btn btn-primary rounded-md'
                    >
                      Request quote <i className='fa fa-angle-right m-l10'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4  col-md-12'>
              <div
                className={`${
                  open === 'p3'
                    ? 'pricingtable-wrapper active style-1 m-b30'
                    : 'pricingtable-wrapper style-1 center m-b30'
                }`}
                onMouseOver={() => setOpen('p3')}
              >
                <div className='pricingtable-inner'>
                  <div className='pricingtable-title'>
                    <h3 className='title'>Premium</h3>
                  </div>
                  {/* <div className='pricingtable-price'>
                    <h2 className='pricingtable-bx'>
                      $149<small>/Month</small>
                    </h2>
                  </div>
                  <p className='text'>
                    Aliquam dui lacus, lobortis quis sapien non.
                  </p> */}
                  <ul className='pricingtable-features'>
                    <li>Web Audit</li>
                    <li>UI/UX</li>
                    <li>Development</li>
                    <li>Backups</li>
                    <li>Analytics</li>
                    <li>Live Chat</li>
                    <li>SEO</li>
                    <li>Content Management</li>
                    <li>Maintenance Agreement</li>
                    <li>eCommerce</li>
                    <li>Email Setup</li>
                    <li>Hosting</li>
                  </ul>
                  <div className='pricingtable-footer'>
                    <a
                      href='/pricing-table-1'
                      className='btn btn-primary rounded-md'
                    >
                      Request quote <i className='fa fa-angle-right m-l10'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
