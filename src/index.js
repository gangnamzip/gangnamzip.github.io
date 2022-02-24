import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Header';
import Main from './Main';
import Footer from './Footer';
import './index.scss';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentTab: 'Gallery',
      currentDate: new Date('Sat Aug 14 2021 19:23:45 GMT-0500 (Central Daylight Time)'),
      open: false
    }
  }
  
  render() {
    // // check if this is an off day.
    // let now = this.state.currentDate;
    // let open = (now.getDay !== 0 || now.getDay !== 1) && now.getHours() >= 11 && now.getHours() <= 20;
    // if(open) {
    //       this.setState({open:true});
    //       console.log(this.state.open, 'is it open or closed?');
    // } else {
    //   this.setState({open:false});
    // }
    return (
      <div>
        <Head />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('container'));