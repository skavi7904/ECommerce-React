import React from 'react'

const Footer = () => {
  return (
    <footer class="section-p1">
      <div class="col">
          <img class="logo" src="assests/img/logo.png" alt=""/>
          <h4>Contact</h4>
          <p><strong>Address: </strong>300 Stephen Road, Street 3, India</p>
          <p><strong>Phone:</strong> +044 3331 2456 /(+91) 12 3456 7890</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sun</p>
          <div class="follow">
              <h4>Follow us</h4>
              <div class="icon">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-pinterest-p"></i>
                  <i class="fab fa-youtube"></i>
              </div>
          </div>
      </div>
      <div class="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
      </div>
      <div class="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Orders</a>
          <a href="#">Help</a>
      </div>
      <div class="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div class="row">
              <img src="assests/img/pay/app.jpg" alt=""/>
              <img src="assests/img/pay/play.jpg" alt=""/>
          </div>
          <p>Secured Payment Gateways</p>
          <img src="assests/img/pay/pay.png" alt=""/>
      </div>
      <div class="copyright">
          <p>© 2021, ECommerce Template</p>
      </div>
  </footer>
    )
}

export default Footer