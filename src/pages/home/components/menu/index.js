import React, { Component } from 'react';
import config from './config'

class Menu extends Component {
  render() {
    return (
      <div className='menu-part df aic'>
        <div className='logo df fx1'>
          <img src={`./img/logo.png`} alt='风响树 logo' />
          <div className='item text-cl'>深圳市风响树科技有限公司</div>
        </div>
        {
          config.menus.map(m => <div
            id={m.text}
            key={m.text}
            onClick={() => this.props.onMenuClick(m.name)}
            className='item text-cl'
            >
              {m.text}
            </div>)
        }
        <a className='email main-cl df jce' href="mailto:eddy.guo@fxs-tech.com.cn?subject=业务咨询">
          <img src='/img/email.svg' className='email-icon' alt='email icon' />
          <span className='main-cl' style={{marginTop: '3px'}}>Email us</span>
        </a>
      </div>
    );
  }
}

export default Menu;