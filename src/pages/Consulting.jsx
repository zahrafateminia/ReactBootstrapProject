import React from "react";
import "../terapia/js/main.js";
import "../terapia/lib/wow/wow.js";

import "../lib/owlcarousel/owl.carousel.min.js";
import "../lib/owlcarousel/owl.carousel.js";
import "../terapia/lib/waypoints/waypoints.min.js";
// import "../terapia/css/bootstrap.css";
import "../terapia/css/style.css";

import "../terapia/css/bootstrap.min.css";
import "../terapia/scss/bootstrap.scss";

// import WOW from "../../node_modules/wow.js"
// import WOW from 'wowjs';

import "../terapia/lib/easing/easing.js";
// import "../terapia/scss/bootstrap.css.map";
// import "../terapia/scss/bootstrap/botstrap.css";

{
  /* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="lib/wow/wow.min.js"></script>
<script src="lib/easing/easing.min.js"></script> */
}
{
  /* <script src="lib/waypoints/waypoints.min.js"></script> */
}

const Consulting = () => {
  return (
    <div>
      <div
        className="hero"
        style={{ backgroundImage: "url('images/forest.webp')" }}
      ></div>

      <div className="container-fluid contact py-5">
        <div className="container py-5" style="  direction: rtl;">
          <div
            className="section-title mb-5 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="sub-style mb-4">
              <h4 className="sub-title text-white px-3 mb-0">
                مشاوره رایگان فیزیوتراپی{" "}
              </h4>
            </div>
            <p className="mb-0  text-white">
              برای راهنمایی بهتر نیاز هست تاریخچه دقیقی از خودتان ارائه بدهید.
              پس لطفا به هرکدام از سوالات زیر چنانچه به مشکلتان مرتبط هست پاسخ
              کامل دهید. سعی خواهد در اسرع وقت به شما از طریق ایمیل یا پیامک
              پاسخ داده شود.
            </p>
          </div>
          <div className="row g-4 align-items-center text-white">
            <div
              className="col-lg-5 col-xl-12 contact-form wow  "
              data-wow-delay="0.1s"
            >
              <form>
                <div className="row g-3 text-white ">
                  <div className="col-lg-12 col-xl-6 text-white">
                    <div className="text-white" style="direction: rtl;     ">
                      <p> نام و نام خانوادگی </p>
                      <input
                        type="text"
                        class="text-white bg-transparent form-control border
                                         border-white "
                        style="height: 55px; text-wrap: wrap;"
                        id="name"
                        placeholder=" نام و نام خانوادگی    "
                      />
                      <label for="name"> </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div>
                      <p>ایمیل</p>

                      <input
                        type="email"
                        className="form-control bg-transparent border
                                         border-white"
                        style="height: 55px;"
                        id="email"
                        placeholder=" Email"
                      />
                      <label for="email"> </label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div style="direction: rtl;">
                      <p> تلفن تماس </p>

                      <input
                        type="number"
                        className="form-control bg-transparent border
                                         border-white"
                        style="height: 55px;"
                        id="phone"
                        placeholder=" تلفن تماس"
                      />
                      <label for="phone"> </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div style="direction: rtl;">
                      <p>سن </p>
                      <input
                        type="number"
                        className="form-control bg-transparent border
                                         border-white"
                        style="height: 55px;"
                        id="age"
                        placeholder=" سن"
                      />
                      <label for="age"> عددی بین یک تا 100 </label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div style="direction: rtl;  ">
                      <p>شغل</p>
                      <input
                        type="text"
                        className="form-control bg-transparent border
                                         border-white"
                        style="height: 55px;"
                        id="email"
                        placeholder=" شغل"
                      />{" "}
                      <label for="job"></label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6">
                    <div style="direction: rtl; margin-bottom: 50px; height: 55px;">
                      <p>جنسیت</p>
                      <select
                        class="form-control bg-transparent border
                                        border-white"
                        style="height: 55px;"
                        name=" "
                        id="gender"
                      >
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div style="direction: rtl; ">
                      <p>
                        از چه زمانی مشکل شروع شده؟ چه اتفاقی دقیقا افتاده؟ آیا
                        علایم تدریجی شروع شدند؟
                      </p>
                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px; "
                        id=" "
                        placeholder=" از چه زمانی مشکل شروع شده؟ چه اتفاقی دقیقا افتاده؟ آیا علایم تدریجی شروع شدند؟
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;">
                      <p>در این مدت علائم بهتر شدند یا بدتر؟</p>

                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px;"
                        id=" "
                        placeholder="  در این مدت علائم بهتر شدند یا بدتر؟
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;    ">
                      <p>چه کارها و وضعیت هایی علائم را بدتر می کنند؟</p>

                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px;"
                        id=" "
                        placeholder="     چه کارها و وضعیت هایی علائم را بدتر می کنند؟
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;  ">
                      <p>بیماری داخلی یا درد در سایر نواحی بدن نیز دارید؟</p>

                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px;"
                        id=" "
                        placeholder="  بیماری داخلی یا درد در سایر نواحی بدن نیز دارید؟
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <p>داروی خاصی هم مصرف می‌کنید؟ (حتی داروی طب سنتی) ؟</p>

                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px;"
                        id=" "
                        placeholder="   داروی خاصی هم مصرف می کنید؟ (حتی داروی طب سنتی).
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <p>
                        گزگز و مور مور یا بیحسی در پا یا بی اختیاری ادرار یا
                        مدفوع دارید یا ندارید؟
                      </p>

                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px;"
                        id=" "
                        placeholder="    گزگز و مور مور یا بیحسی در پا یا بی اختیاری ادرار یا مدفوع دارید یا ندارید؟
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <p>چه کارها و وضعیت هایی علائم را بهتر می کنند؟</p>
                      <input
                        type="text"
                        className="form-control bg-transparent border
                             border-white"
                        style="height: 60px;"
                        id=" "
                        placeholder="   چه کارها و وضعیت هایی علائم را بهتر می کنند؟
                             "
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <p>
                        {" "}
                        لطفا در صورت وجود هر کدام از علائم زیر آنرا در کادر زیر
                        قید کنید.
                      </p>
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته
                             "
                      />
                      تغییر وزن ناخواسته
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته
                             "
                      />
                      تب، احساس سرما، عرق شبانه{" "}
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      حالت تهوع بدون علت
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      تغییر وزن ناخواسته
                    </div>
                  </div>

                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      مشکلات بلع
                    </div>
                  </div>

                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته
                             "
                      />
                      تنگی نفس، درد قفسه سینه
                    </div>
                  </div>

                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      اختلال تعادل یا سرگیجه یا انواع سردردها
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      درد همراه با سرفه و عطسه
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      زخمی که بهبود نمی‌یابد
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      رنگ‌پریدگی غیرعادی پوست
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                             border-white"
                        id=" "
                        placeholder="
                             تغییر وزن ناخواسته

                             "
                      />
                      آلرژی یا حساسیت ‌ها
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                         border-white"
                        id=" "
                        placeholder="
                              

                         "
                      />
                      شروع اختلال غیرعادی بینایی{" "}
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;">
                      <input
                        type="checkbox"
                        className=" border-white"
                        id=" "
                        placeholder="
                         
                     "
                      />
                      بارداری
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
                 border-white"
                        id=" "
                        placeholder="
                      
                 "
                      />
                      درد شدید با شروع نامحسوس و بدون آسیب خاصی
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
             border-white"
                        id=" "
                        placeholder="
                  
             "
                      />
                      افزایش تدریجی در شدت درد (بخصوص در زمان استراحت)
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
              
         "
                      />
                      حس سوزن سوزن شدن در قسمتی یا همه اندام‌ها یا بی‌حسی در آن
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
              
         "
                      />
                      اختلال در عملکرد روده یا مثانه (مثل بی اختیاری ادرار یا
                      مدفوع)
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      حس سوزن سوزن شدن در قسمتی یا همه اندام‌ها یا بی‌حسی در آن
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      بیماری‌های روانی (مانند افسردگی)
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      بیماری‌های عفونی (مانند هپاتیت، سل، ایدز)
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      بیماری‌های گوارشی (مانند زخم معده) یا کلیوی یا کبدی، فتق و
                      ..
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      مشکلات تنفسی (مانند تنگی نفس، آسم){" "}
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      لرزش در اندام یا قسمتی از آن{" "}
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      بی حالی یا احساس خستگی غیر عادی{" "}
                    </div>
                  </div>

                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      داشتن بیماری خاص مانند: سرطان – دیابت – بیماری روماتیسمی –
                      پوکی استخوان - جراحی های قبلی بیماری های قلبی و عروقی
                      (مانند فشار خون، واریس)
                    </div>
                  </div>

                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      درد شبانه که شما را از خواب عمیق بیدار می‌کند و معمولا هر
                      شب اتفاق بیفتد و به حرکت مربوط نباشد. ( یعنی با حرکت تشدید
                      یا خفیف نشود )
                    </div>
                  </div>
                  <div className="col-12">
                    <div style="direction: rtl;     ">
                      <input
                        type="checkbox"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                      وجود * پیس میکر * در قلب، وجود پلاتین دراستخوان محل درمان
                    </div>
                  </div>
                  <div className="col-12">
                    <p>
                      {" "}
                      آزمایشات و تصاویر رادیولوژی خود را در صورت امکان نیز ارسال
                      کنید.
                    </p>
                    <div style="direction: rtl;     ">
                      <input
                        type="file"
                        className="
         border-white"
                        id=" "
                        placeholder="
         تغییر وزن ناخواسته
         "
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-light text-primary w-100 py-3">
                      {" "}
                      ارسال
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="btn btn-primary border-white btn-lg-square back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default Consulting;
