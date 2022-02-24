import logo from '../../data/logo.svg';

const Navigation = () => (
    <nav id="navigation">
      <img src={logo} alt ="Logo" />
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#location">Locations</a>
      <a href="#contact">Contact</a>
      <button className="chownow-order-online order" src="https://ordering.chownow.com/order/25532/locations">Order Online</button>
    </nav>
);

export default Navigation;