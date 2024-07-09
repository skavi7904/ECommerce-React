import { Fragment } from "react";
import "./Contact.css"
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import MapComponent from "./MapComponent";
const Contact = () => {
    function myform(){
        var name=document.forms["contact_form"]["name"].value;
        var email = document.forms["contact_form"]["email"].value;
        var sub = document.forms["contact_form"]["sub"].value;
        var text = document.forms["contact_form"]["text"].value;
        if(name==null || name==""){
            document.getElementById("errorbox").innerHTML="enter the user name*";
            return false;
        }
        if(email==null || email==""){
            document.getElementById("errorbox").innerHTML="enter the password";
            return false;
        }
        if(name!=" " && email!=" " && sub!=" " && text!=" "){
            alert("Thanks for leaving a message")
        } 
    }    
    return (
      <Fragment>
        <section id="header">
          <img src="assests/img/logo.png" className="logo" />
          <div>
            <ul id="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact" className="active">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/shop">
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section id="page-header" class="about-header">
          <h2>#let's_talk</h2>
          <p>LEAVE A MESSAGE. We love to hear from you!</p>
        </section>
        <section id="contact-details" class="section-p1">
          <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
              <li>
                <i class="fa-regular fa-map"></i>
                <p>35 Glass Street India</p>
              </li>
              <li>
                <i class="fa-regular fa-envelope"></i>
                <p>contact@example.com</p>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <p>+01 444 789 /(+91) 98 7654 3210</p>
              </li>
              <li>
                <i class="fa-regular fa-clock"></i>
                <p>Monday to Sunday: 9.00 to 16.00 pm</p>
              </li>
            </div>
          </div>
          <div class="map">
            <MapComponent />
          </div>
        </section>
        <section id="form-details">
          <form name="contact_form" onSubmit={myform}>
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" name="name" />
            <input type="email" placeholder="E-mail" name="email" />
            <input type="text" placeholder="Subject" name="sub" />
            <textarea
              name="text"
              id="text"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <div id="errorbox"></div>
            <button class="normal">Submit</button>
          </form>
          <div class="people">
            <div>
              <img src="assests/img/people/1.png" />
              <p>
                <span>
                  John Doe <br />
                </span>
                Senior Marketing manager
                <br />
                Phone: +044 1234 5678
                <br />
                Email: johndoe@gmail.com
              </p>
            </div>
            <div>
              <img src="assests/img/people/2.png" />
              <p>
                <span>
                  William <br />
                </span>
                Manager
                <br />
                Phone: +044 1243 5678
                <br />
                Email: william@gmail.com
              </p>
            </div>
            <div>
              <img src="assests/img/people/3.png" />
              <p>
                <span>
                  Smith <br />
                </span>{" "}
                Marketing manager
                <br />
                Phone: +044 1234 5768
                <br />
                Email: smith@gmail.com
              </p>
            </div>
          </div>
        </section>
        <section id="newsletter" class="section-p1 section-m1">
          <div class="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>
              Get E-mail updates about our latest shop and{" "}
              <span>special offers.</span>
            </p>
          </div>
          <div class="form">
            <input type="text" placeholder="Your email address" />
            <a href="signup.html">
              <button class="normal">Sign Up</button>
            </a>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  };
  
  export default Contact;