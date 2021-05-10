// Write your JS code here
import './index.css'

import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="nav-bar-container">
          <div className="nav-bar-mobile-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />

            <button type="button" className="nav-mobile-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                alt="nav logout"
                className="nav-bar-image"
              />
            </button>
          </div>
          <div className="nav-bar-desktop-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <div className="nav-bar-desktop-container-text">
              <ul className="nav-menu-items-list">
                <li className="nav-menu-item">Home</li>

                <li className="nav-menu-item">Products</li>

                <li className="nav-menu-item">Cart</li>
              </ul>
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav-menu">
          <ul className="mobile-nav-items">
            <li className="mobile-nav-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
            <li className="mobile-nav-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </li>
            <li className="mobile-nav-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
