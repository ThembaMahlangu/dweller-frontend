import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import '../components/ContactFormStyles.css';

function Login() {
  return (
    <>
        <Navbar/>
        <Hero
            cName = "hero-about"
            heroImg = {"https://www.xtraspace.co.za/sites/default/files/the-leonardo.jpg"}
            title = "Login"
            text = "Welcome back! Please login below"
        />
        <div className="form-container">
            <form>
                <input placeholder="Email"/>
                <input placeholder="Enter Your Password"/>
                <button>Login</button>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default Login