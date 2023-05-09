import React from 'react'
import '../style/footer.css'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='frame33'>
            <h4>AUCTION</h4>
            <a href="#">About us</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy and Policy</a>
        </div>
        <div className='frame34'>
            <h4>GET IN TOUCH</h4>
            <p>Call us at: +123 797-567-2535</p>
            <p>support@auction.com</p>
            <div className='icons'>
                <FaFacebook style={{background: '#9B9B9B'}}/>
                <FaInstagram style={{background: '#9B9B9B'}}/>
                <FaTwitter style={{background: '#9B9B9B'}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer