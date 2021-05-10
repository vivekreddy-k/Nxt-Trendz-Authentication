// Write your JS code here
import './index.css'
import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-body-container">
          <div className="home-content">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-mobile-img"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-desktop-img"
          />
        </div>
      </div>
    )
  }
}

export default Home
