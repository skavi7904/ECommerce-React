import { Fragment } from "react";
import "./About.css"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const About = () => {
    return (
      <Fragment>
        <section id="header">
            <img src="assests/img/logo.png" className="logo"/>
            <div>
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about"  className="active">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/shop"><i class="fa fa-shopping-bag" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    </section>
        <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Read about Cara to shop more...</p>
    </section>
    <section id="about-head" className="section-p1">
        <img src="assests/img/about/a6.jpg"/>
        <div>
            <h2>Who We Are?</h2>
            <p>Cara is an online shopping website that a customer or a person can buy their products at anywhere at anytime. Our main motto is to get the desired product to their customers at anywhere at anytime. <b><i>ANYWHERE AT ANYTIME</i></b></p>
            <abbr title="">Create Stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>
            <br/><br/>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create Stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
        </div>
    </section>
    <section id="about-app" className="section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <p>From App Store or Google Play</p>
            <div className="row">
                <img src="assests/img/pay/app.jpg" alt=""/>
                <img src="assests/img/pay/play.jpg" alt=""/>
            </div>
    </section>
    <section id="feature" className="section-p1">
        <div className="fe-box">
            <img src="assests/img/f1.png" alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
            <img src="assests/img/f2.png" alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src="assests/img/f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src="assests/img/f4.png" alt=""/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src="assests/img/f5.png" alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
            <img src="assests/img/f6.png" alt=""/>
            <h6>24/7 Support</h6>
        </div>
    </section>
    <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <a href="signup.html"><button className="normal">Sign Up</button></a>
        </div>
    </section>
    <Footer/>
      </Fragment>
    );
  };
  
  export default About;