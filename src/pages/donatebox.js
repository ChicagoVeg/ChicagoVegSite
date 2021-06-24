import React from 'react';

const DonateBox = () => (
  <div className="donate-control">
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input
        type="hidden"
        name="encrypted"
        value="-----BEGIN PKCS7-----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-----END PKCS7-----"
      />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        className="text-wrap-image page-image"
        alt="Donate"
        border="0"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
    <p className="">Thank you for your support!</p>
  </div>
);

export default DonateBox;
