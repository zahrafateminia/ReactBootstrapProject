
 import React from 'react';

//  import"https://fonts.googleapis.com" 
// import"https://fonts.gstatic.com"     
// import"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap"
      
// import  "https://use.fontawesome.com/releases//v5.15.4/css/all.css"
    
// import"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
       
import "../lib/animate/animate.min.css"  
import "../lib/owlcarousel/assets/owl.carousel.min.css"   
// import "css/bootstrap.min.css"  
// import "css/style.css"  

 
 import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
 import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
//  import "../lib/wow/wow.min.js"
 import "../lib/easing/easing.min.js"
 import "../lib/waypoints/waypoints.min.js"
 import "../lib/owlcarousel/owl.carousel.min.js"
//  import "../js/main.js" 


 import 'bootstrap/dist/css/bootstrap.min.css';
 
import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";
// import"bootstrap";
import "bootstrap/dist/js/bootstrap.min.js"

// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'jquery/dist/jquery.min.js'

// import "../../menu-07/css/owl.carousel.min.css" 
// import "../js/popper.min.js" 

import "../../menu-07/css/bootstrap.min.css" 
// import "../../menu-07/css/style.css" 
// // import "../js/main.js" 
// // import "../js/jquery-3.3.1.min.js" 
// // import  "../js/main.js" 
// import "../js/bootstrap.min.js" 
// import "../js/jquery.sticky.js" 

// import  "../js/jquery-3.3.1.min.js"
// // import  "../js/popper.min.js" 
// import  "../js/bootstrap.min.js" 
// import  "../js/jquery.sticky.js" 

 
 const Nav = () => {
  return (
    <>
        {/* <div> */}
      <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
    

    <div className="site-navbar-wrap">
      <div className="site-navbar-top">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="d-flex mr-auto">
                <a href="#" className="d-flex align-items-center mr-4">
                  <span className="icon-envelope mr-2"></span>
                  <span className="d-none d-md-inline-block">saleh@gmail.com</span>
                </a>
                <a href="#" className="d-flex align-items-center mr-auto">
                  <span className="icon-phone mr-2"></span>
                  <span className="d-none d-md-inline-block">09198514857</span>
                </a>
              </div>
            </div>
            <div className="col-6 text-right">
              <div class="mr-auto">
                <a href="#" class="p-2 pl-0"
                  ><span class="icon-whatsapp"></span></a>
                <a href="#" className="p-2 pl-0"
                  ><span className="icon-linkedin"></span></a>
                <a href="#" className="p-2 pl-0"
                  ><span className="icon-instagram"></span></a>
                <a href="#" className="p-2 pl-0"
                  ><span className="icon-telegram"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-navbar site-navbar-target js-sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h1 className="my-0 site-logo">
                <a href="index.html">Dr.Naseri</a>
              </h1>
            </div>
            <div className="col-10">
              <nav className="site-navigation text-right" role="navigation">
                <div className="container">
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <a
                      href="#"
                      className="site-menu-toggle js-menu-toggle text-white"
                      ><span className="icon-menu h3"></span                    ></a>
                  </div>

                  <ul
                    className="site-menu main-menu js-clone-nav d-none d-lg-block"
                  >
                    <li className="active">
                      <a href="#home-section" className=" nav-link">Home</a>
                    </li>
                    <li>
                      <a href="#classes-section" className="nav-link">Classes</a>
                    </li>
                    <li className="has-children">
                      <a href="#" class="nav-link">Pages</a>
                      <ul class="dropdown arrow-top">
                        <li><a href="#" className="nav-link">Team</a></li>
                        <li><a href="#" className="nav-link">Pricing</a></li>
                        <li><a href="#" className="nav-link">FAQ</a></li>
                        <li className="has-children">
                          <a href="#">More Links</a>
                          <ul class="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#about-section" className="nav-link">About</a></li>
                    <li>
                      <a href="#events-section" className="nav-link">Events</a>
                    </li>
                    <li>
                      <a href="#gallery-section" className="nav-link">Gallery</a>
                    </li>
                    <li>
                      <a href="#contact-section" className="nav-link">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
      
   
    </>

  );
 };
 
 export default Nav;



 
 

           
            
 

 
   

    
      
             
 