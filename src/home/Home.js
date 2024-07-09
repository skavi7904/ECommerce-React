import { Fragment } from "react"
import "./Home.css"
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
      <Fragment>
        <section id="header">
          <img src="assests/img/logo.png" className="logo" />
          <div>
            <ul id="navbar">
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
        <section id="hero">
          <h2>#Welcome</h2>
          <p>to Cara...</p>
        </section>
        <section id="feature" class="section-p1">
          <div class="fe-box">
            <img src="assests/img/f1.png" alt="" />
            <h6>Free Shipping</h6>
          </div>
          <div class="fe-box">
            <img src="assests/img/f2.png" alt="" />
            <h6>Online Order</h6>
          </div>
          <div class="fe-box">
            <img src="assests/img/f3.png" alt="" />
            <h6>Save Money</h6>
          </div>
          <div class="fe-box">
            <img src="assests/img/f4.png" alt="" />
            <h6>Promotions</h6>
          </div>
          <div class="fe-box">
            <img src="assests/img/f5.png" alt="" />
            <h6>Happy Sell</h6>
          </div>
          <div class="fe-box">
            <img src="assests/img/f6.png" alt="" />
            <h6>24/7 Support</h6>
          </div>
        </section>
        <section id="product1" class="section-p1">
          <h2>Top Trending Deals</h2>
          <div class="pro-container">
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_SL_31June2023_gv7luk.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_Tabs_31June2023_elpjex.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_SW_31June2023_pi1fpb.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_Voltas_31June2023_lrkjzy.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_Geysers_31June2023_wupmt9.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_WM_31June2023_upwgq2.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360141/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_AppleAcc_31June2023_zmmbd9.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
            </div>
            <div class="pro1">
              <Link to="/shop">
                <img
                  src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1688360142/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Top%20Deal/Trending%20-%2003July/HP_TopDeals_LD_31June2023_ckap9x.png/mxw_2048,f_auto"
                  alt=""
                />
              </Link>
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
  
  export default Home;
