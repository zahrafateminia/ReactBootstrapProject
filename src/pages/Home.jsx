import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import reactLogo from "./../assets/react.svg";
import viteLogo from "/vite.svg";




import "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js";

// // import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
// // import WOW from "wowjs";
// // import "../terapia/lib/animate/animate.css";
// import "../css/owl.carousel.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

// import "../terapia/lib/owlcarousel/owl.carousel.min.js";

// import "../terapia/js/main.js";


// // import "../terapia/lib/wow/wow.min.js";
// import "../terapia/lib/easing/easing.min.js";
// import "../terapia/lib/waypoints/waypoints.min.js";
// import WOW from 'wowjs';

// import "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap";

// import "https://use.fontawesome.com/releases/v5.15.4/css/all.css"
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css";
// import "../css/fonts/icomoon/style.css";
// import "../css/owl.carousel.min.css";

import "../css/style.css";
// import "../css/bootstrap5.min.css";
// import "../css/pre_project_style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min.js'

function Home() {
  // useEffect(() => {
  //   new WOW.WOW({
  //     live: false
  //   }).init();
  // }, [])

  return (
    <>
      {/* Banner */}
      <div
        className="hero"
        style={{ backgroundImage: "url('images/forest.webp')" }}
      ></div>
      {/* End of Banner */}
      {/* Goal */}
      <div className="container-fluid service ">
        <div className="container py-5">
          <div
            className="section-title mb-5 wow   animated"
            data-wow-delay="0.2s"
            style={{ visibility: "visible", animationDelay: "0.2s" }}
          >
            <h1 className="display-3 mb-3">هدف سایت</h1>
            <p
              className="mb-0 "
              style={{
                textAlign: "justify",
                textAlignLast: "right",
                color: "black",
              }}
            >
              این وبسایت با هدف معرفی فیزیوتراپی و ارائه اطلاعات معتبر پیرامون
              اختلالات و دردهای اسکلتی عضلانی و همچنین مشاوره به بیماران راه
              اندازی شده است. درصدد هستیم مطالب از منابع معتبر و حتما با ذکر آن
              منابع ارائه شوند چراکه متاسفانه بسیاری از مطالب علوم پزشکی موجود
              در سایت ها و فضای مجازی حاوی اطلاعات غلط، ناکامل و تکراری هستند که
              می توانند ایجاد سردرگمی، گمراهی و حتی وسواس فکری در افراد جستجوگر
              کنند. لذا امیدوارم که این سایت گامی در جهت تشخیص و درمان سریع‌تر و
              ماندگارتر بیماران باشد. چنانچه هرگونه انتقادی به مطالب و یا هر
              قسمت از سایت دارید لطفا در جهت ارتقا سایت آن را با ما در میان
              بگذارید. برای ارتباط با ما و ارسال نظرات خود به قسمت تماس با ما
              مراجعه کنید
            </p>
          </div>
        </div>
      </div>
      {/* End of Goal */}
      {/* Gate Trainer Start */}
      <div className="row g-4 justify-content-center">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow   animated"
          data-wow-delay="0.1s"
          style={{ visibility: "visible", animationDelay: "0.1s" }}
        >
          <div className="service-item rounded">
            <div className="service-img rounded-top">
              <img
                src="images/service-1.jpg"
                className="img-fluid rounded-top w-100"
                alt=""
              />
            </div>
            <div className="service-content rounded-bottom bg-light p-4 rtl">
              <div className="service-content-inner">
                <a href="#" className="pe-auto">
                  <h5 className="mb-4"> تخلیه آب ریه با فیزیوتراپی</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow   animated"
          data-wow-delay="0.3s"
          style={{ visibility: "visible", animationDelay: "0.3s" }}
        >
          <div className="service-item rounded">
            <div className="service-img rounded-top">
              <img
                src="images/service-2.jpg"
                className="img-fluid rounded-top w-100"
                alt=""
              />
            </div>
            <div className="service-content rounded-bottom bg-light p-4">
              <div className="service-content-inner">
                <a href="#" className="pe-auto">
                  <h5 className="mb-4">گیت ترینر و راه‌اندازی</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow   animated"
          data-wow-delay="0.5s"
          style={{ visibility: "visible", animationDelay: "0.5s" }}
        >
          <div className="service-item rounded">
            <div className="service-img rounded-top">
              <img
                src="images/service-3.jpg"
                className="img-fluid rounded-top w-100"
                alt=""
              />
            </div>
            <div className="service-content rounded-bottom bg-light p-4">
              <div className="service-content-inner">
                <a href="#" className="pe-auto">
                  <h5 className="mb-4">تریگر پوینت و درای نیدلینگ</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow   animated"
          data-wow-delay="0.7s"
          style={{ visibility: "visible", animationDelay: "0.7s" }}
        >
          <div className="service-item rounded">
            <div className="service-img rounded-top">
              <img
                src="images/service-4.jpg"
                className="img-fluid rounded w-100"
                alt=""
              />
            </div>
            <div className="service-content rounded-bottom bg-light p-4">
              <div className="service-content-inner">
                <a href="#" className="pe-auto">
                  <h5 className="mb-4">تمرین درمانی در فیزیوتراپی</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
          }}
        ></div>
      </div>
      \{/* Gate Trainer End */}
      {/* sono start */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow  animated"
              data-wow-delay="0.2s"
              style={{ visibility: "visible", animationDelay: "0.2s" }}
            >
              <div className="about-img pb-5 ps-5">
                <img
                  src="images/gate.jpg"
                  className="img-fluid w-100 h-100"
                  alt="Image"
                />
              </div>
            </div>
            <div
              className="col-lg-7  wow  animated"
              data-wow-delay="0.4s"
              style={{ visibility: "visible", animationDelay: "0.4s" }}
            >
              <div className="section-title text-end mb-5">
                <h4 className=" pe-3 mb-0">
                  تحولی در درمان، همگام با کشورهای پیشرفته
                </h4>
                <h1 className="display-7 mb-4 font-weight-bold">
                  به کاری گیری سونوگرافی اسکلتی عضلانی در فیزیوتراپی
                </h1>
                <p
                  className="mb-4 "
                  style={{
                    color: "black",
                    textAlign: "justify",
                    textAlignLast: "right",
                  }}
                >
                  یکی از ابزارهایی که در سال‌های اخیر جایگاه مهم و رو به رشدی در
                  فیزیوتراپی پیدا کرده است، ابزار سونوگرافی است. سونوگرافی
                  اسکلتی عضلانی اعتبار زیادی دارد و به کارگیری آن می‌تواند تحولی
                  در نتایج درمان فیزیوتراپی ایجاد کند. در این راستا در تلاشیم
                  همگام با کشورهای پیشرفته، جز پیشگامان به کارگیری و معرفی این
                  ابزار مهم در فیزیوتراپی در کشور عزیزمان ایران باشیم
                </p>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill text-white py-3 px-5"
                >
                  اطلاعات بیشتر
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sono Ends*/}
      {/* CRPS Start */}
      <div className="container-fluid feature   " style={{ direction: "rtl" }}>
        <div className="container  ">
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div className="row-cols-1 feature-item p-4">
                <div className="col-12">
                  <div className="feature-icon mb-4">
                    <div className="p-3 d-inline-flex bg-white rounded">
                      <i>
                        <img
                          height="100px"
                          width="auto"
                          src="images/handTos.png"
                          alt="Physiotherapy"
                        />
                      </i>
                    </div>
                  </div>
                  <div className="feature-content d-flex flex-column">
                    <a href="#">
                      <h5 className="mb-4">فیزیوتراپی چیست؟</h5>
                    </a>
                    <p className="mb-0">
                      ارتقاء سلامت و اصلاح سبک سطح زندگی، با استفاده از
                      تکنیک‌های بهینه‌سازی سیستم حرکتی
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className="row-cols-1 feature-item p-4">
                <div className="col-12">
                  <div className="feature-icon mb-4">
                    <div className="p-3 d-inline-flex bg-white rounded">
                      <i className="">
                        <img
                          height="100px"
                          width="auto"
                          src="images/handTos.png"
                          alt="backpain"
                        />
                      </i>
                    </div>
                  </div>
                  <div className="feature-content d-flex flex-column">
                    <a href="#">
                      <h5 className="mb-4">همه چیز در مورد کمردرد​</h5>
                    </a>
                    <p className="mb-0">
                      از پیشگیری تا تشخیص و درمان کمردرد​ (یکی ازشایع‌ترین
                      کیس‌های فیزیوتراپی) مبتنی بر دانش روز
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="row-cols-1 feature-item p-4">
                <div className="col-12">
                  <div className="feature-icon mb-4">
                    <div className="p-3 rounded bg-white ">
                      <i>
                        <img
                          height="100px"
                          width="auto"
                          src="images/handTos.png"
                          alt="Tos"
                        />
                      </i>
                    </div>
                  </div>
                  <div className=" d-flex feature-content  flex-column">
                    <a href="#">
                      <h5 className="mb-4  ">سندرم خروجی قفسه سینه (TOS)</h5>
                    </a>
                    <p className="mb-0">
                      نگاه دقیقی به بیماری TOS شانه درد به دلیل درگیری عروق و
                      اعصاب دست
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div className="row-cols-1 feature-item p-4">
                <div className="col-12  ">
                  <div className="feature-icon mb-4 ">
                    <div className="p-3 d-inline-flex bg-white rounded">
                      <i className=" ">
                        <img
                          height="100px"
                          width="auto"
                          src="images/handTos.png"
                          alt="CRPS"
                        />
                      </i>
                    </div>
                  </div>
                  <div className="feature-content d-flex flex-column">
                    <a href="#">
                      <h5 className="mb-4">
                        سندرم درد منطقه‌ ای پیچیده (CRPS)
                      </h5>
                    </a>
                    <p className="mb-0">
                      حساسیت به لمس وعلائمی شبیه حس سوختگی در دست یا پا
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* CRPS End */}
      {/* Acoordion End */}
      {/* <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
             
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen=""
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Book Appointment End */}

      {/* Effective treatment Start */}
      <div
        className="container-fluid  blog "
        style={{ direction: "rtl", display: "flex", flexWrap: "wrap" }}
      >
        <div className="container ">
          <div
            className="section-title py-2  wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className=" ">
              <h4 className=" px-3 mb-0">هدف ما</h4>
            </div>
            
            <h1 className="display-5 mb-5">درمان موثر فیزیوتراپی</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow  animated"
              data-wow-delay="0.1s"
              style={{ visibility: "visible", animationDelay: "0.1s" }}
            >
              <div className="blog-item rounded">
                <div className="blog-img">
                  <img
                    src="images/blog-1.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="blog-centent p-4">
                  <div className="d-flex justify-content-between mb-4"></div>
                  <a href="#" className="h4">
                    {" "}
                    فیزیوتراپی و بیماری‌ها
                  </a>
                  <p className="my-4">
                    فیزیوتراپی میتواند در پیشگیری و درمان زمینه‌های مختلف مثل
                    قلب، نورولوژی، ورزشی و ... نقش موثری ایفا کند
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                  >
                    {" "}
                    برای آشنایی بیشتر کلیک کنید
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow   animated"
              data-wow-delay="0.3s"
              style={{ visibility: "visible", animationDelay: "0.3s" }}
            >
              <div className="blog-item rounded">
                <div className="blog-img">
                  <img
                    src="images/blog-2.jpg"
                    className="img-fluid  "
                    alt="Image"
                  />
                </div>
                <div className="blog-centent p-4">
                  <div className="d-flex justify-content-between mb-4"></div>
                  <a href="#" className="h4">
                    فیزیوتراپی و پیشگیری ازآسیب{" "}
                  </a>
                  <p className="my-4">
                    ارزیابی اسکلتی عضلانی در افراد سالم توسط فیزیوتراپیست
                    می‌تواند در پیشگیری از آسیب‌های شغلی، ورزشی و ... موثر باشد
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                  >
                    برای آشنایی بیشتر کلیک کنید
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow   animated"
              data-wow-delay="0.5s"
              style={{ visibility: "visible", animationDelay: "0.5s" }}
            >
              <div className="blog-item rounded">
                <div className="blog-img">
                  <img
                    src="images/blog-3.jpg"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                </div>
                <div className="blog-centent p-4">
                  <div className="d-flex justify-content-between mb-4"></div>
                  <a href="#" className="h4">
                    روش‌ها و تکنیک های فیزیوتراپی
                  </a>
                  <p className="my-4">
                    در فیزیوتراپی برای درمان بیماران با توجه به شرایط و نوع
                    بیماری از تکنیک و روش‌ها مختلفی مثل موبیلیزیشن استفاده
                    می‌شود.
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1"
                  >
                    برای آشنایی بیشتر کلیک کنید
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          {/* Blog End */}

          {/* Book Appointment Start */}
          <div
            className="container-fluid appointment "
            style={{ direction: "rtl" }}
          >
            <div className="container py-5">
              <div className="row g-5 align-items-center">
                <div
                  className="col-lg-6 wow   animated"
                  data-wow-delay="0.2"
                  style={{ visibility: "visible" }}
                >
                  <div className="section-title text-end">
                    <h3 className="display-6 mb-4"> نگاه دقیق به بیماریTOS</h3>
                    <p className="mb-4" style={{ color: "black" }}>
                      نگاه دقیقی به بیماری TOS: شانه درد به دلیل درگیری عروق و
                      اعصاب دست
                    </p>

                    <div className="row g-4">
                      <div className="col-sm-6">
                        <div className="d-flex flex-column h-100">
                          <div className="text-start mb-4">
                            <a
                              href="#"
                              className="btn btn-primary rounded-pill text-white py-3 px-5"
                            >
                              {" "}
                              اطلاعات بیشتر
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 wow   animated"
                  data-wow-delay="0.4s"
                  style={{ visibility: "visible", animationDelay: "0.4s" }}
                >
                  <div className="col-sm-6">
                    <div className="video h-100">
                      <img
                        src="images/video-img.jpg"
                        className="img-fluid rounded w-100 h-100"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                      <button
                        type="button"
                        className="btn btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Video */}
          <div
            className="modal fade"
            id="videoModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {" "}
                    Video
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {/* 16:9 aspect ratio */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      src=""
                      id="video"
                      allowFullScreen=""
                      allowscriptaccess="always"
                      allow="autoplay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Video Ends */}

          {/* Back to Top */}
          <a
            href="#"
            className="btn btn-primary border-white btn-lg-square back-to-top"
            style={{ display: "none" }}
          >
            <i className="fa fa-arrow-up" />
          </a>
          {/* Back to Top Ends*/}
        {/* </div> */}
      {/* </div> */}
     
    </>
  );
}

export default Home;
