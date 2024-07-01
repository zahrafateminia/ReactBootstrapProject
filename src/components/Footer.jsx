import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer wow fadeIn"
        data-wow-delay="0.2s"
        
      >
        <div className="container py-5">
          <div class="row g-5">

            <div className="col-md-12 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h5 className="text-white mb-4">
                  دکتر صالح ناصری، فیزیوتراپیست
                </h5>
                <p>
                  دکتر صالح ناصری، دکتری تخصصی فیزیوتراپی فیزیوتراپیست سابق تیم
                  های ملی وزنه برداری و تکواندو
                </p>
                <div className="d-flex align-items-center">
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href="https://www.facebook.com/profile.php?id=100008316828697"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href="https://www.instagram.com/drsalehnaseri/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary text-white rounded-circle mx-1"
                    href="https://t.me/drsalehnaseri"
                  >
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white"> لینک های مفید</h4>
                <a href=" ">
                  <i className="fas fa-angle-left me-2"></i>
                  برای دریافت مشاوره رایگان از طریق ربات تله ویزیت در تلگرام
                  کلیک کنید​
                </a>
                <a href="http://iran-pta.ir/fa">
                  <i className="fas fa-angle-left me-2"></i> سایت انجمن فیزیوتراپی
                  ایران
                </a>
                <a href="https://membersearch.irimc.org/">
                  <i className="fas fa-angle-left me-2"></i> احراز هویت پزشک و اعضای
                  نظام پزشکی
                </a>
                <a href="contact.html">
                  <i className="fas fa-angle-left me-2"></i> ارتباط با ما{" "}
                </a>
              </div>
            </div>
            {/* Useful Links end */}

            {/* Cotanct Us start */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white"> راه‌های ارتباطی</h4>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2"></i> رشت، ایران
                </a>
                <a href="mailto:saleh.naseri@yahoo.com">
                  <i className="fas fa-envelope me-2"></i> saleh.naseri@yahoo.com
                </a>
                <a href="mailto:saleh.naseri@yahoo.com">
                  <i className="fas fa-envelope me-2"></i> saleh.naseri@yahoo.com
                </a>
                <a href="tel:+09368848083 ">
                  <i className="fas fa-phone me-2"></i> 09368848083{" "}
                </a>
                <a href="tel:+09368848083 " className="mb-3">
                  <i className="fas fa-print me-2"></i> 09368848083{" "}
                </a>
              </div>
            </div>
            {/* Contact Ends */}
          </div>
        </div>
      </div>
      {/* Copy right start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-12 text-center text-md-end mb-md-0">
              <span className="text-white">
                <a href="/">
                  <i className="fas fa-copyright text-light me-2"></i>
                  وبسایت شخصی دکتر صالح ناصری، فیزیوتراپیست
                </a>{" "}
                تمامی حقوق متعلق است به دکتر صالح ناصری، استفاده از مطالب با ذکر
                منبع بلامانع است{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Copy right Ends */}
    </>
  );
};

export default Footer;
