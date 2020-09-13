import React from 'react'

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className='hero'>
          <div className='container'>
            <div className='headerBack'>
              <h1 className='mainHeader'>Love & Light</h1>
              <h2 className='mainSubHeader'>Home Fragrances</h2>
            </div>
          </div>
        </div>

        <main>
          <section className='featured'>
            <div className='container'>
              <h2 className='section-title'>Featured Products</h2>

              <div className='split'>
                <a href='#' className='featured_item'>
                  <img src='/images/imageGrid7.jpeg' alt='' />
                  <p className='details'></p>
                </a>
                <a href='#' className='featured_item'>
                  <img src='/images/imageGrid4.jpeg' alt='' />
                  <p className='details'></p>
                </a>
                <a href='#' className='featured_item'>
                  <img src='/images/imageGrid1.jpeg' alt='' />
                  <p className='details'></p>
                </a>
              </div>
            </div>
          </section>

          <section className='products'>
            <div className='container'>
              <h2 className='section-title'>About Us</h2>

              <article className='product'>
                <h3 className='product_title'></h3>
                <p className='product_description'>
                  Welcome to this little love and passion of mine outside of
                  being a mama. <br />
                  Our journey started with making candles as a hobby in my spare
                  time for friends and family which soon turned into something I
                  love and enjoy doing everyday. <br />
                  We are proud that all of our products are Vegan and our
                  candles are made using only natural soy wax along with using
                  fragrances which many of them containing a high percentage of
                  essential oils. <br />
                  All of our diffusers and candles are handpoured by myself and
                  I take great pride and attention to detail when producing
                  these for you. <br />
                  We hope you enjoy your beautiful home fragrances as much as I
                  enjoy making them. <br />
                  Sending Love & Light to you all.
                  <br />
                </p>
              </article>

              <article className='product'>
                <h3 className='product_title'></h3>
                <p className='product_description'></p>
              </article>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
