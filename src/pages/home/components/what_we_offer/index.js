import React, { Component } from 'react';
import Expertise from './expertise';
import Products from './products';
import Stories from './stories';


class WhatWeOffer extends Component {
  render() {
    return (
      <div className='what-we-offer'>
        <Products showPopup={id => this.props.showPopup(id)} />
        {/* <Expertise /> */}
        {/* <Stories /> */}
        
      </div>
    );
  }
}

export default WhatWeOffer;