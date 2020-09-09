import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>@ 2020 Airbnb clone by <Router><Link to={{ pathname: "https://codewithkarani.tech/" }} target="_blank"> codewithkarani.tech </Link></Router>! No rights Reserved - This is a demo!</p>
            <p>Privacy . Terms . Sitemap . Company Details</p>
        </div>
    )
}

export default Footer
