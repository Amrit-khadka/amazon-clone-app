import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
  }

  return (
    <nav className="header">

      <Link to="/">
          <img className="header__logo" alt="amazon_logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" />
      </Link>
      
      {/*  Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links -> sign in, order, .. */}
      <div className="header__nav">
        {/* 1st link sign in, order, .. */}
        {/* only redirect to login if there is not user */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick = {handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hello,Guest</span>
            <span className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* 4th link */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Shopping Basket icon */}
          <ShoppingBasketIcon />
          {/** Number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
        </div>
      </Link>

      
    </nav>
    
  )  
      
    
  
}

export default Header
