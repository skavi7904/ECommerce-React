import { Fragment } from "react";
import "./Account.css"
import Footer from "../footer/Footer"
import { Link } from "react-router-dom";
const Account = () => {
  function validated(){
    var uname=document.forms["myform"]["uname"].value;
    var upswd=document.forms["myform"]["upswd"].value;
    if(uname==null || uname==""){
        document.getElementById("errorBox").innerHTML="enter the user name*";
        return false;
    }
    if(upswd==null || upswd==""){
        document.getElementById("errorBox").innerHTML="enter the password*";
        return false; 
    }
    if(uname!=' '&& upswd!=' '){
        alert("login successfull");
    }
}
function vfun(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var email1=document.forms["myform2"]["email1"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;
    if(uname1==null || uname1==""){
        document.getElementById("errorBox1").innerHTML="enter the user name*";
        return false;
    }
    if(email1==null || email1==""){
        document.getElementById("errorBox1").innerHTML="enter the email*";
        return false;
    }
    if(upswd1==null || upswd1==""){
        document.getElementById("errorBox1").innerHTML="enter the password*";
        return false;
    }
    if(upswd2==null || upswd2==""){
        document.getElementById("errorBox1").innerHTML="enter the confirmed password*";
        return false;
    }
    if(upswd1!=upswd2){
        document.getElementById("errorBox1").innerHTML="Password does not match*";
        return false;
    }
    if(uname1!= ' ' && upswd1!=' ' && upswd2!=' '&& email1!=' '){
        alert("Register Successfully");
    }
}
    return (
        <Fragment>
          <section id="header">
            <img src="assests/img/logo.png" className="logo"/>
            <div>
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/account"  className="active">Account</Link></li>
                    <li><Link to="/shop"><i class="fa fa-shopping-bag" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    </section>
            <section id="account">
    <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Log In</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <div class="sign-in-htm">
        <form name="myform" onSubmit={validated}>
          <div class="group">
            <label for="user" class="label">Username</label>
            <input id="user"  type="text" class="input" name="uname"/>
          </div>
          <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass"  type="password" class="input" data-type="password" name="upswd"/>
          </div>
          <div class="group">
            <input id="check" type="checkbox" class="check" checked/>
            <label for="check"><span class="icon"></span> Keep me Signed in</label>
          </div>
          <div id="errorBox"></div>
          <div class="group">
            <input type="submit" class="button" value="Log In"/>
          </div>
          <div class="hr"></div>
          <div class="foot-lnk">
            <a href="#forgot">Forgot Password?</a><br/><br/>
            <label for="tab-2">New Member?</label>
          </div>
        </form>
        </div>
        <form name="myform2" onSubmit={vfun}>
        <div class="sign-up-htm">
        <div class="group">
                <label for="user" class="label">Username</label>
                <input id="user" type="text" class="input" name="uname1"/>
            </div>
            <div class="group">
                <label for="pass" class="label">Password</label>
                <input id="pass" type="password" class="input" data-type="password" name="upswd1"/>
            </div>
            <div class="group">
                <label for="pass" class="label">Confirm Password</label>
                <input id="pass" type="password" class="input" data-type="password" name="upswd2"/>
            </div>
            <div class="group">
                <label for="pass" class="label">Email Address</label>
                <input id="pass" type="email" class="input" name="email1"/>
            </div>
            <div id="errorBox1"></div>
            <div class="group">
                <input type="submit" class="button" value="Sign Up"/>
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
            </div>    
        </div>
    </form>
      </div>
    </div>
  </div>
    </section>
    <Footer/>

        </Fragment>
    );
  };
  
  export default Account;