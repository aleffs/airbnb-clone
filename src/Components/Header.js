import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <Link to="/">
                    <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/800px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
                </Link>
            </div>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>

            
        </div>
    )
}

export default Header
