import Social from './Social';
import Information from './Information';

const Footer = () => (
    <footer>
      <div id="footer">
        <Social />
        <Information />
        <button className="chownow-order-online order" src="https://ordering.chownow.com/order/25532/locations">Order Online</button>
      </div>
    </footer>
  );

export default Footer;