import React from 'react'
import ShippingTable from './ShippingTable'

export class Shipping extends React.Component {
  render() {
    return (
      <div className="infoContainer">
        <h1 className="infoHeader">SHIPPING + RETURNS</h1>
        <h3 className="infoSubheader">Shipping</h3>
        <div className="shippingInfo">
          <p>
            Once your order has been placed we will start to prepare your order.
            Every diffuser and candle is hand poured with love by myself with
            making sure that each fragrance is set to perfection and ensuring your
            home fragrances smell fresh and amazing.
        </p><br />
          <p>
            We aim to ship your order to you within 12-48 hours from completion of
            your order
        </p>
          <p>
            All postage prices are for orders up to 5kg, Large orders may incur extra charges.
        </p><br />
          <ShippingTable />
          <br />
          <p>
            * We offer free local pick up from Wakerley (Brisbane) or alternatively
            at one of our market days on a Sunday (Redcliffe, Manly). You will be
            notified via email when your order is ready for pick up.
        </p><br />
          <p>
            We send all orders via Wiz Me courier service (Couriers Please).
            Regular shipping arrives within 2-4 business days for the Metropolitan
            Areas from when your order has been dispatched. For regional areas,
            your order may take 4-10 business days to get to you. If you have not
            received your order by 10 working days from dispatch please contact us
            at loveandlighthomefragrances@gmail.com (Please note: Times may vary
            depending on public holidays, Christmas holiday periods)
        </p><br />
          <p>Please note we do not deliver to parcel lockers or PO boxes</p><br />

          <h3 className="infoSubheader">Returns</h3>
          <p>
            Product information is clearly described in each listing, we do not
            offer a refund due to change of mind
        </p><br />
          <p>
            We pride ourselves on delivering you with the best quality products as
            time and care is taken with producing your products and packaging them
            ready for postage. Each item in your order is thoroughly inspected
            before leaving our studio and each parcel is clearly marked with
            "Fragile" before shipping. If for some reason you do receive a faulty
            item please contact us within 48hrs of receiving your order by
            emailing <a href="mailto:loveandlighthomefragrances@gmail.com">loveandlighthomefragrances@gmail.com </a> with your name, address,
            order number and a photo of your faulty item
        </p><br />
        </div>
      </div >
    )
  }
}
export default Shipping
