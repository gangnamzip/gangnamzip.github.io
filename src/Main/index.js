import React from 'react';
import Gallery from './Gallery';
import Menu from './Menu';
import About from './About';
import Location from './Location';
import Contact from './Contact';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      currentPage: 'gallery'
    }
  }

  renderCurrentPage() {
    switch (this.state.currentPage) {
      case 'gallery':
        return <Gallery />;
      case 'menu': 
        return <Menu />;
      case 'about':
        return <About />;
      case 'location':
        return <Location />;
      case 'contact':
        return <Contact />;
      default:
        return <Gallery />;
    }
  }

  render () {
    return (
      <main>
        {this.renderCurrentPage(this.state.currentPage)}
      </main>
    );
  }
};

export default Main;