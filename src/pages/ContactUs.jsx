import { useState } from "react";
import "../terapia/lib/wow/wow.js";
import "../terapia/lib/wow/wow.min.js"
import "../terapia/js/main.js"
// import Banner from "../components/Banner/Banner";

import '../css/fonts/icomoon/style.css';
import '../css/owl.carousel.min.css';
import '../css/bootstrap.min.css';
import '../css/style.css';
// import "../css/bootstrap."


import '../js/jquery-3.3.1.min.js';
// import ../'./js/popper.min.js';
import '../js/bootstrap.min.js';
import '../js/jquery.sticky.js';


//  import "../lib/wow/wow.js";
 import "../lib/owlcarousel/owl.carousel.js";
 import "../lib/waypoints/waypoints.min.js";
 import "../lib/easing/easing.min.js";
 import "../lib/owlcarousel/assets/owl.carousel.min.css";
 import "../lib/animate/animate.min.css"


function ContactUs(){
    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  

const [isLoading,setIsLoading] = useState(false);

  return (
   


<>

<div className="hero" style={{ backgroundImage: "url('images/forest.webp')" }}></div>




<div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div
      className="row gx-0 align-items-center"
      style={{ height: 45, direction: "ltr" }}
    >
       
    </div>
  </div>



  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3
        className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
        ارتباط با ما
      </h3>
      <ol
        className="breadcrumb justify-content-center mb-0 wow fadeInDown"
        data-wow-delay="0.3s"
      ></ol>
    </div>
  </div>
  
  <div className="container-fluid contact py-5">
    <div className="container py-5" style={{ direction: "rtl" }}>
      <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="sub-style mb-4">
          <h4 className="sub-title text-white px-3 mb-0">نوبت دهی </h4>
        </div>
        <p className="mb-0  text-white">
          {" "}
          به منظور مشاوره فیزیوتراپی در مورد مشکل تان می‌توانید از قسمت مشاوره
          رایگان با ما ارتباط مستقیم برقرار کنید. همچنین خوشحال می شویم چنانچه
          انتقادات و پیشنهادات خود را از طریق یکی از کانال‌های ارتباطی زیر با ما
          در میان بگذارید:
        </p>
      </div>
      <div className="row g-4 align-items-center">
        <div
          className="col-lg-5 col-xl-5 contact-form wow fadeRight"
          data-wow-delay="0.1s"
        >
          <h2 className="display-5 text-white mb-2"> فرم نوبت دهی </h2>
          <p className="mb-4 text-white">
            {" "}
            برای ویزیت حضوری و انجام خدمات فیزیو تراپی در شهر رشت لطفا فرم زیر
            را پر کنید همچنین متوانید در مورد ویزیت در منزل با از طریق شبکه‌های
            احتماعی در ارتباط باشید در صورتی که تمایل دارید درمورد مشکل خود به
            صورت رایگان مشاوره دریافت کنید از قسمت مشاوره رایگان فیزیوتراپی مشکل
            خود را مطرح کنید
          </p>
          <form>
            <div className="row g-3 text-white ">
              <div className="col-lg-12 col-xl-6 ">
                <div
                  className="text-white"
                  style={{ direction: "rtl", height: 50 }}
                >
                  {/* <div class="form-floating  "  > */}
                  <input
                    type="text"
                    className=" bg-transparent form-control border
                                   border-white "
                    style={{ height: 55, textWrap: "wrap" }}
                    id="name"
                    placeholder=" نام و نام خانوادگی    "
                  />
                  <label htmlFor="name"> </label>
                  {/* </div> */}
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div style={{ direction: "rtl", height: 50 }}>
                  {/* <div class="form-floating"> */}
                  <input
                    type="email"
                    className="form-control bg-transparent border
                                   border-white"
                    style={{ height: 55 }}
                    id="email"
                    placeholder="   Email"
                  />
                  <label htmlFor="email"> </label>
                </div>
                {/* </div> */}
              </div>
              <div className="col-lg-12 col-xl-6">
                <div style={{ direction: "rtl", height: 50 }}>
                  <input
                    type="email"
                    className="form-control bg-transparent border
                                   border-white"
                    style={{ height: 55 }}
                    id="email"
                    placeholder="   تلفن تماس"
                  />
                  <label htmlFor="email"> </label>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div style={{ direction: "rtl", height: 50 }}>
                  <input
                    type="email"
                    className="form-control bg-transparent border
                                   border-white"
                    style={{ height: 55 }}
                    id="email"
                    placeholder="   تلفن تماس"
                  />
                  <label htmlFor="email"> </label>
                </div>
              </div>
              <div className="col-12">
                <div style={{ direction: "rtl", height: 50 }}>
                  <input
                    type="email"
                    className="form-control bg-transparent border
                                   border-white"
                    style={{ height: 60 }}
                    id="email"
                    placeholder="   بیماری"
                  />
                  <label htmlFor="email"> </label>
                </div>
              </div>
              <div className="col-12">
                <div style={{ direction: "rtl", height: 150 }}>
                  <input
                    type="email"
                    className="form-control  bg-transparent border
                                   border-white "
                    style={{ height: 155 }}
                    id="email"
                    placeholder="   شرح مختصری از مشکل "
                  />
                  <label htmlFor="email"> </label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light text-primary w-100 py-3">
                  {" "}
                  ارسال
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
          <div className="bg-transparent rounded">
            <div className="d-flex flex-column align-items-center text-center mb-4">
              <div
                className="bg-white d-flex align-items-center justify-content-center mb-3"
                style={{ width: 90, height: 90, borderRadius: 50 }}
              >
                <i className="fa fa-map-marker-alt fa-2x text-primary" />
              </div>
              <h4 className="text-dark">آدرس</h4>
              <p className="mb-0 text-white"> رشت </p>
            </div>
            <div className="d-flex flex-column align-items-center text-center mb-4">
              <div
                className="bg-white d-flex align-items-center justify-content-center mb-3"
                style={{ width: 90, height: 90, borderRadius: 50 }}
              >
                <i className="fa fa-phone-alt fa-2x text-primary" />
              </div>
              <h4 className="text-dark">تلفن تماس</h4>
              <p className="mb-0 text-white">09368848083 </p>
              <p className="mb-0 text-white">09368848083 </p>
            </div>
            <div className="d-flex flex-column align-items-center text-center">
              <div
                className="bg-white d-flex align-items-center justify-content-center mb-3"
                style={{ width: 90, height: 90, borderRadius: 50 }}
              >
                <i className="fa fa-envelope-open fa-2x text-primary" />
              </div>
              <h4 className="text-dark">Email</h4>
              <p className="mb-0 text-white">saleh.naseri@yahoo.com</p>
              <p className="mb-0 text-white">saleh.naseri@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-xl-5 wow fadeInRight"
          data-wow-delay="0.3s"
        >
          <div className="d-flex justify-content-center mb-4">
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href="https://wa.me/09368848083 "
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href="hhttps://t.me/@NaseriSaleh"
            >
              <i className="fab fa-telegram" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2"
              href="https://www.instagram.com/drsalehnaseri/"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-lg-square btn-light rounded-circle mx-2" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="rounded h-100">
            <iframe
              className="rounded w-100"
              style={{ height: 500 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203278.11906458673!2d49.76962505451909!3d37.24247293992175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff5620d43f15675%3A0x41dd40f9931cfbf6!2z2LHYtNiq2Iwg2KfYs9iq2KfZhiDar9uM2YTYp9mG2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2s!4v1716562579927!5m2!1sfa!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="#" className="btn btn-primary btn-lg-square back-to-top">
    <i className="fa fa-arrow-up" />
  </a>
</>   
  );
 };

export default ContactUs;
{/* {isLoading?(
<div
    id="spinner"
    className="show bg-white position-fixed translate-middle 
    w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  ):( */}