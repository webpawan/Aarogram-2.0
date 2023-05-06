import React, { useEffect, useRef, useState } from "react";
import "./style/products.css";
import { gsap } from "gsap";
import gola from "./svg/sssurface.svg";
import section4Bg from "./svg/donut_3d_shape.png";
const Product = () => {
  const section0Ref = useRef(null);
  const section0HeadingRef = useRef(null);
  const section0Pera = useRef(null);
  const section0Img = useRef(null);
  const section0btn1 = useRef(null);
  const section0btn2 = useRef(null);
  const section2Ref = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const paragraphTwoRef = useRef(null);
  const section2SecondHeadingRef = useRef(null);
  const section2SecondGolaRef = useRef(null);
  const ImgcontainerRef = useRef(null);
  const section3Headline = useRef(null);
  const section4MainRef = useRef(null);
  const section4HeadingRef = useRef(null);
  const section4ChildOneRef = useRef(null);
  const section4ChildTwoRef = useRef(null);
  const section4ChildThreeRef = useRef(null);
  const section4BgRef = useRef(null);
  const section5REf = useRef(null);
  const section5Imgs = useRef(null);
  const section5LeftRef = useRef(null);
  const section5HeadingRef = useRef(null);
  const section6REf = useRef(null);
  const section6HeadingOneRef = useRef(null);
  const section6HeadingTwoRef = useRef(null);
  const section6LeftRef = useRef(null);
  const section6RightRef = useRef(null);
  const section7REf = useRef(null);
  const section7LeftRef = useRef(null);
  const section7RightRef = useRef(null);
  const section8REf = useRef(null);
  const section8HeadingRef = useRef(null);
  const section8LeftRef = useRef(null);
  const section8RightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      section0HeadingRef.current,
      {
        opacity: 0,
        scaleX:.5,

      },
      {  opacity: 1, duration: 2, delay: 1,scaleX:1 }
    );

     gsap.fromTo(
       section0Pera.current,
       {
         opacity: 0,
         scale: 0,
         skewX:100
       },
       { opacity: 1, duration: 2, delay: 2, scale: 1,skewX:0 }
     );

      gsap.fromTo(
        section0btn1.current,
        {
          yPercent: -100,
          opacity: 0,
        },
        { yPercent: 0, opacity: 1, duration: 2, delay: 3 }
      );

       gsap.fromTo(
         section0btn2.current,
         {
           yPercent: -100,
           opacity: 0,
         },
         { yPercent: 0, opacity: 1, duration: 2, delay: 4 }
       );

      

          gsap.fromTo(
            section0Img.current,
            {
              yPercent: 100,
              opacity: 0,
            },
            { yPercent: 0, opacity: 1, duration: 2, delay: 6 }
          );

    //  ----------section2

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top bottom",
        end: "center 50%",
        scrub: 1,
      },
    });

    tl1
      .fromTo(
        headingRef.current,
        {
          yPercent: 10,
          opacity: 0,
        },
        { yPercent: -200, opacity: 1, stagger: 0.3 }
      )
      .fromTo(
        paragraphRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        { yPercent: -600, stagger: 0.3, opacity: 1 }
      )
      .fromTo(
        paragraphTwoRef.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        { yPercent: -100, stagger: 0.3, opacity: 1 }
      );

    gsap.fromTo(
      section2SecondGolaRef.current,
      {
        rotate: "0deg",
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: section2Ref.current,
          top: "bottom bottom",
          endTrigger: section3Headline.current,
          scrub: 3,
        },
        rotate: "360deg",
        y: -200,
        duration: 1,
      }
    );

    //  ----------------------------------------------------------

    gsap.fromTo(
      section2SecondHeadingRef.current,
      {
        xPercent: 200,
      },
      {
        scrollTrigger: {
          trigger: paragraphTwoRef.current,
          start: "top 80%",
          endTrigger: section2SecondGolaRef.current,
          end: "bottom 20%",
          scrub: 3,
        },
        xPercent: 0,
        duration: 3,
        delay: 1,
      }
    );

    gsap.fromTo(
      section3Headline.current,
      {
        xPercent: -200,
      },
      {
        xPercent: 0,
        duration: 3,
        scrollTrigger: {
          trigger: ImgcontainerRef.current,
          start: "bottom 20%",
          endTrigger: section3Headline.current,
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    //  ------------------section 4 Animation ---------------------

    gsap.fromTo(
      section4HeadingRef.current,
      {
        yPercent: -500,
      },
      {
        duration: 3,
        yPercent: 100,
        scrollTrigger: {
          trigger: section4MainRef.current,
          start: "top bottom",
          end: "30% center",
          scrub: 3,
        },
      }
    );

    gsap.fromTo(
      section4ChildOneRef.current,
      {
        yPercent: 100,
      },
      {
        duration: 3,
        yPercent: -10,
        scrollTrigger: {
          trigger: section4MainRef.current,
          start: "top bottom",
          end: "70% center",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      section4ChildTwoRef.current,
      {
        xPercent: 700,
        yPercent: 50,
      },
      {
        duration: 3,
        yPercent: -10,
        xPercent: -30,
        scrollTrigger: {
          trigger: section4MainRef.current,
          start: "top bottom",
          end: "70% center",
          scrub: 5,
        },
      }
    );

    gsap.fromTo(
      section4ChildThreeRef.current,
      {
        xPercent: -700,
        yPercent: 60,
      },
      {
        duration: 3,
        xPercent: 30,
        yPercent: -20,

        scrollTrigger: {
          trigger: section4MainRef.current,
          start: "top bottom",
          end: "bottom 40%",
          scrub: 6,
        },
      }
    );

    gsap.fromTo(
      section4BgRef.current,
      {
        yPercent: -50,
        scaleX: 1,
        rotateX: 0,
        rotateY: "-10deg",
        rotateZ: "0deg",
        xPercent: 0,
      },
      {
        scrollTrigger: {
          trigger: section4MainRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
        },

        yPercent: 150,
        scale: 1.3,
        rotateX: "-40deg",
        rotateY: "20deg",
        rotateZ: "100deg",
        xPercent: 190,
      }
    );

    // sction 5----------------
    const section5 = gsap.timeline({
      scrollTrigger: {
        trigger: section5REf.current,
        start: "top 80%",
        end: "center top",
        scrub: 2,
      },
    });

    section5
      .fromTo(
        section5HeadingRef.current,
        { yPercent: 0, scale: 1.5 },
        { yPercent: -100, scale: 0.9 }
      )
      .fromTo(
        section5LeftRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        { opacity: 1, scale: 1 }
      )
      .fromTo(
        section5Imgs.current,
        {
          xPercent: 50,
        },
        { xPercent: -100, duration: 3 }
        // "+=.8"
      );

    // ----------------------------section 6
    const section6 = gsap.timeline({
      scrollTrigger: {
        trigger: section6REf.current,
        start: "top 80%",
        end: "center top",
        scrub: 2,
      },
    });

    section6
      .fromTo(
        section6HeadingOneRef.current,
        { yPercent: 100, scale: 4, opacity: 0 },
        { yPercent: -100, scale: 1, opacity: 1 }
      )
      .fromTo(
        section6HeadingTwoRef.current,
        { yPercent: 100, scale: 1.3 },
        { yPercent: -100, scale: 0.9 },
        "-=.4"
      );

    // ---------------section 7

    const section7 = gsap.timeline({
      scrollTrigger: {
        trigger: section7REf.current,
        start: "top 80%",
        end: "center top",
        scrub: 2,
      },
    });

    section7
      .fromTo(
        section7LeftRef.current,
        { xPercent: 300 },
        { xPercent: 0, stagger: 0.3 }
      )
      .fromTo(section7RightRef.current, { yPercent: 10 }, { yPercent: -60 });

    const section8 = gsap.timeline({
      scrollTrigger: {
        trigger: section8REf.current,
        start: "top 80%",
        end: "center top",
        scrub: 2,
      },
    });

    section8
      .fromTo(section8HeadingRef.current, { scale: 0 }, { scale: 1 })
      .fromTo(
        section8LeftRef.current,
        { yPercent: 10, scale: 0 },
        { yPercent: -60, scale: 1 }
      )
      .fromTo(
        section8RightRef.current,
        { yPercent: 10, scale: 0.8 },
        { yPercent: -60, scale: 1.1 }
      ),
      "-.3";
  }, []);

  // --------------------------------------------------

  useEffect(() => {
    if (ImgcontainerRef.current) {
      // Check if the containerRef exists
      gsap.fromTo(
        ImgcontainerRef.current.children,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: paragraphTwoRef.current,
            start: "bottom 50%",
            endTrigger: ImgcontainerRef.current,
            end: "top 20%",
            scrub: 4,
          },
        }
      );
    }
  }, [ImgcontainerRef]);

  return (
    <>
      {/* -----------------section 1 start-------------------------- */}

      <div className="h-screen  bg-[#001220]  flex flex-col items-center justify-center text-white ">
        <div className="navbar flex justify-between items-center  p-5 w-full fixed top-0 bg-slate-800  z-50 text-[#959697]">
          <div className="logo">
            <img
              src="https://static.wixstatic.com/media/87c402_a6cbbd35e2894d67b9d8eadcce45ef72~mv2.png/v1/fill/w_244,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AAROGRAM%20tm-ver.png"
              alt=""
              srcset=""
            />
          </div>
          <ul className="flex navbar-nav">
            <li className="border-b-2 border-orange-400  bg-slate-200 bg-opacity-5 text-slate-400">
              Home
            </li>
            <li>services</li>
            <li>Resources</li>
            <li>About</li>
            <li>Free trial</li>
          </ul>
        </div>

        {/* navbar --------- */}
        <div className=" h-full  text-white  flex-1 product__container    flex justify-center items-center  section1  relative">
          <div className="absolute section__overlayHome  w-full h-full"></div>
          <div className="w-full h-full  flex flex-col justify-center items-center p-10 relative">
            <div className="description  flex  flex-1 w-full  justify-center items-center text-left  ">
              <div className="flex basis-[60%] flex-col items-left justify-center h-full  overflow-hidden">
                <h1
                  className="text-5xl  mb-5 leading-[4.5rem] font-light overflow-hidden "
                  ref={section0HeadingRef}
                >
                  <span className="text-6xl bg-slate-800 mx-1 px-1 font-bold p-10">
                    {" "}
                    Reimagine{" "}
                  </span>
                  Prior Auth & Sleep Center Workflows
                </h1>

                <p
                  className="font-extralight tracking-widest  text-slate-200 pr-10"
                  ref={section0Pera}
                >
                  Tired of insurance companies calling the shots at your sleep
                  center? Aarogram RCM streamlines the prior authorization
                  process with AI-powered task management, designed to make you
                  efficient, so you can focus on providing exceptional patient
                  care.
                </p>

                <div className="btns flex items-center mt-16   ">
                  <div
                    className="services__btn btn__left px-5 py-4  mx-2 rounded-sm  text-white-100 z-10 border-b-2 border-[#db5c26] hover:bg-[#ef9436] transition-all flex "
                    ref={section0btn1}
                  >
                    Learn More
                  </div>
                  <div
                    className="booking__btn px-5   border-b-2 border-[#ef9436] hover:bg-[#db5c26] transition-all rounded-sm flex items-center "
                    ref={section0btn2}
                  >
                    <span className="">Book a demo</span>
                    <span>
                      <lord-icon
                        src="https://cdn.lordicon.com/cmrzxpzz.json"
                        trigger="loop"
                        delay="1000"
                        colors="primary:#ee9336,secondary:#fff"
                        style={{ width: "50px", height: "50px" }}
                      ></lord-icon>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="basis-[40%]  bg-orange-40 h-full  overflow-hidden flex justify-center items-center "
                ref={section0Img}
              >
                <img
                  src="https://static.wixstatic.com/media/11062b_79377c7f8c1d41909f259894128aff26~mv2.jpg/v1/fill/w_951,h_714,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_79377c7f8c1d41909f259894128aff26~mv2.jpg"
                  alt=""
                  srcset=""
                  className="  p-1 bg-fixed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------section 1 end-------------------------- */}

      {/* -----------------section 2 start-------------------------- */}

      <div
        className=" h-[150vh]  p-20 text-center  flex justify-center items-center flex-col overflow-hidden relative text-white section2__transprent "
        ref={section2Ref}
      >
        <div className="gola absolute" ref={section2SecondGolaRef}>
          <img
            src={gola}
            alt=""
            srcset=""
            className="w-full -h-full gola__img"
          />
        </div>
        <div>
          {" "}
          <h1
            ref={headingRef}
            className="text-5xl flex justify-center items-center text-orange-100 mt-20 section2__transprent"
          >
            Why Aarogram RCM <span className="text-8xl text-slate-500">?</span>
          </h1>
          <p ref={paragraphRef} className="text-3xl mb-16">
            Delay in Serving Patients Means Delay in Revenue
          </p>
          <p
            className="text-xl border-b-orange-300 border-b pb-10 font-light bg-orange-100 bg-opacity-5"
            ref={paragraphTwoRef}
          >
            At Aarogram, we go beyond traditional revenue cycle management. We
            redefine RCM as the efficient management of both revenue and patient
            workflows. Our innovative approach to revenue cycle management
            prioritizes patient outcomes, ensuring that the right patients are
            served at the right time while maximizing revenue through
            streamlined workflows.
          </p>
        </div>
        <div
          className="flex flex-col items-between w-full justify-between mt-0 secondHeading__section2 "
          ref={section2SecondHeadingRef}
        >
          <h2 className="text-4xl mt-20 font-bold">
            Tired of constantly switching between payer portals and RCM screens?
          </h2>
          <div
            className="imgs flex items-center justify-center   mt-5"
            ref={ImgcontainerRef}
          >
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_f6604ef196a142acb75e9b799fc55299~mv2.png/v1/crop/x_267,y_125,w_373,h_371/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Benefits.png"
                alt=""
                srcset=""
              />
              <h1>Eligibilty Verification</h1>
            </div>

            {/* ------------- */}
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_ec923eca2d064cb48342f14d1619e8e4~mv2.png/v1/crop/x_178,y_52,w_493,h_492/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Claim.png"
                alt=""
                srcset=""
              />
              <h1>Claim tracking</h1>
            </div>
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_17cb0703ba2d416d8e25e158c3b38595~mv2.png/v1/crop/x_213,y_107,w_421,h_420/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Prior%20Auth.png"
                alt=""
                srcset=""
              />
              <h1>Prior Authorization</h1>
            </div>
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_15c0998e74ac43b28c5a501692194a00~mv2.png/v1/crop/x_214,y_88,w_422,h_422/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Payer%20followup.png"
                alt=""
                srcset=""
              />
              <h1>Payer follow-up</h1>
            </div>
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_4baf83575165435b8746851ee61b23e3~mv2.png/v1/crop/x_155,y_66,w_443,h_444/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Patient%20follow%20up.png"
                alt=""
                srcset=""
              />
              <h1>Patient follow-up</h1>
            </div>
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_f26bc55d7c284bf898e38896ae026278~mv2.png/v1/crop/x_220,y_120,w_422,h_423/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Payment%20status.png"
                alt=""
                srcset=""
              />
              <h1>Payment Status</h1>
            </div>
            <div className="img__container--section2 text-white">
              <img
                src="https://static.wixstatic.com/media/f52ec5_7c09a47151b64de18531904761e73e3f~mv2.png/v1/crop/x_227,y_107,w_386,h_387/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Inurance%20remibursment.png"
                alt=""
                srcset=""
              />
              <h1>Insurance Rembursement</h1>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------section 2 end-------------------------- */}

      {/* -----------------section 3 start-------------------------- */}

      <div className="h-screen w-full p-10 flex items-end justify-center bg-[#001220] text-slate-100 ">
        <div className="flex basis-1/2 h-4/6 bg-slate-200 ">
          <div className="img__container--section3  h-full w-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center basis-1/2 overflow-hidden">
          <h1 className="text-5xl  px-10" ref={section3Headline}>
            Track ALL of your revenue operations and patient tasks in one place!
          </h1>
          <button className="mt-10 p-3 border-b-[#db5c26] border-b-2 hover:bg-[#db5c26] transition-all flex">
            Book a Demo
          </button>
        </div>
      </div>

      {/* -----------------section 3 end-------------------------- */}

      {/* -----------------section 4 start-------------------------- */}
      <div
        className="h-full w-full relative overflow-hidden bg-[#001220] text-white "
        ref={section4MainRef}
      >
        <div className="absolute h-full w-full right-1/2 ">
          <img
            src={section4Bg}
            alt=""
            srcset=""
            ref={section4BgRef}
            className=""
          />
        </div>
        <div
          className="flex items-center justify-center text-5xl mt-24  mb-20"
          ref={section4HeadingRef}
        >
          <h1 className=" border-b border-b-orange-500 p-6 font-bold">
            Task Management for Faster Revenue
          </h1>
        </div>
        <div className="section4Container flex flex-col items-center overflow-hidden mb-20 ">
          <div
            className="section4Container__content w-[80%] bg-[#dca77b26] bg-opacity-10 p-10 flex items-center justify-between mb-10 shadow-2xl"
            ref={section4ChildOneRef}
          >
            <div className="basis-1/2">
              <h2 className="text-4xl font-bold">Prior Auth Service</h2>
              <p className="my-4">
                Don't work on prior authorization in the dark. Learn from your
                own previously submitted requests! Increase certainty of when
                prior auth is needed and reduce the chances of denial.{" "}
              </p>
              <h3 className="mb-10">
                Get actionable insights during prior authorization process.
              </h3>
              <button className="p-3 border-b-2 hover:border-b-orange-400 transition-all hover:bg-[#e56029]">
                Learn More
              </button>
            </div>
            <div className="basis-1/2">
              <div className="section4Container__img__container p-10">
                <img
                  src="https://static.wixstatic.com/media/11062b_9e4c381728e04360a7989ffd7d78dc4d~mv2.jpeg/v1/crop/x_316,y_0,w_4839,h_3648/fill/w_488,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Judges%20Examining%20Document.jpeg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
          <div
            className="section4Container__content w-[80%] bg-[#f0435141]  p-10 flex items-center justify-between mb-10 shadow-2xl"
            ref={section4ChildTwoRef}
          >
            <div className="basis-1/2">
              <div className="section4Container__img__container p-10">
                <img
                  src="https://static.wixstatic.com/media/87c402_bf2696b28f5a49339974d0858a7ebe66~mv2.jpg/v1/crop/x_0,y_127,w_2000,h_1767/fill/w_484,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/87c402_bf2696b28f5a49339974d0858a7ebe66~mv2.jpg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="basis-1/2">
              <h2 className="text-4xl font-bold">
                Automated Checklist to Guide Staff
              </h2>
              <p className="my-4">
                Authorization, claim & reimbursement are complex processes.
                Streamline sleep center business operations with automated tasks
                and reminders to guide the staff at every step{" "}
              </p>
              <h3 className="mb-10">
                <h5 className="flex items-center">
                  {" "}
                  <span className="">
                    <lord-icon
                      src="https://cdn.lordicon.com/kbtmbyzy.json"
                      trigger="hover"
                      colors="primary:#ee9336,secondary:#fff"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </span>{" "}
                  Automated reminders for patient and payer follow-ups{" "}
                </h5>
                <h5 className="flex items-center">
                  <span>
                    <lord-icon
                      src="https://cdn.lordicon.com/qghrdngw.json"
                      trigger="hover"
                      colors="primary:#ee9336,secondary:#fff"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </span>{" "}
                  Automated task creation and workflows based on patient
                  insurance type
                </h5>
              </h3>
            </div>
          </div>
          <div
            className="section4Container__content w-[80%] bg-[#8a86863a]  p-10 flex items-center justify-between  shadow-2xl"
            ref={section4ChildThreeRef}
          >
            <div className="basis-1/2">
              <h2 className="text-4xl font-bold">
                Business Intelligence & Revenue Analytics
              </h2>
              <p className="my-4">
                Track patient progress and business operations in real-time for
                valuable insights{" "}
              </p>
              <ul className="mb-10 ">
                <li className="flex items-center">
                  <span>
                    <lord-icon
                      src="https://cdn.lordicon.com/yeallgsa.json"
                      trigger="hover"
                      colors="primary:#ee9336,secondary:#fff"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                    {/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}
                  </span>{" "}
                  Revenue Per Patient
                </li>
                <li className="flex items-center">
                  <span>
                    <lord-icon
                      src="https://cdn.lordicon.com/cjieiyzp.json"
                      trigger="hover"
                      colors="primary:#ee9336,secondary:#fff"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </span>{" "}
                  Patient Lifetime Value
                </li>{" "}
                <li className="flex items-center">
                  <span>
                    <lord-icon
                      src="https://cdn.lordicon.com/huwchbks.json"
                      trigger="hover"
                      colors="primary:#ee9336,secondary:#fff"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                  </span>
                  Payment Tracking
                </li>
              </ul>
            </div>
            <div className="basis-1/2">
              <div className="section4Container__img__container p-10">
                <img
                  src="https://static.wixstatic.com/media/11062b_26547c3c28c649faad2f3ce60d19e482~mv2.jpg/v1/crop/x_0,y_34,w_2072,h_1470/fill/w_563,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Analytics.jpg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------section 4 end-------------------------- */}

      {/* -----------------section 5 start-------------------------- */}

      <div
        className="h-screen flex flex-col items-end justify-center section5 text-slate-100"
        ref={section5REf}
      >
        <div
          className="section5__heading w-full  text-center"
          ref={section5LeftRef}
        >
          <h1
            className="text-5xl border-b border-b-orange-400 inline-block p-5 m-5 "
            ref={section5HeadingRef}
          >
            EHR Integrations
          </h1>
        </div>
        <div className="flex items-center justify-between mx-10">
          <div
            className="basis-1/2 flex-col  bg-black bg-opacity-10 p-10 "
            ref={section5LeftRef}
          >
            <h2 className="text-4xl">
              Supercharge your EHR with revenue workflow management
            </h2>
            <p className="my-5">
              Your EHR does not do what we do! But we understand how EHR is a
              central part of your workflow. Therefore, we have made our system
              compatible with the EHRs that you use. You can now submit prior
              auth request and get the latest status of your claims from your
              local system. Check compatibility of Aarogram with your EHR
            </p>
            <button className="border-orange-400 border-2 hover:text-white hover:bg-orange-500 transition-all p-4 rounded-3xl ">
              inquire Today
            </button>
          </div>
          <div className="basis-1/2 flex  items-center justify-center  relative overflow-hidden">
            <div
              className="section5__img__container flex  items-center   "
              ref={section5Imgs}
            >
              <img
                src="https://static.wixstatic.com/media/f52ec5_eda5d761fcfe4196869c31a7819b78d0~mv2.png/v1/fill/w_126,h_49,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Epic.png"
                alt=""
                srcset=""
              />
              <img
                src="https://static.wixstatic.com/media/f52ec5_ce798c8a6b8041a193fb5aeed9bd2285~mv2.png/v1/fill/w_110,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/unnamed.png"
                alt=""
                srcset=""
              />
              <img
                src="https://static.wixstatic.com/media/f52ec5_87ce405963264438913ce12e4ad4204b~mv2.png/v1/fill/w_110,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Allscripts-Large-Logo.png"
                alt=""
                srcset=""
              />
              <img
                src="https://static.wixstatic.com/media/f52ec5_c01e62b4704745eab233cd5b3bd191ac~mv2.webp"
                alt=""
                srcset=""
              />
              <img
                src="https://static.wixstatic.com/media/f52ec5_d40ef12328e14c8284c3decefc7591aa~mv2.png/v1/fill/w_154,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/download.png"
                alt=""
                srcset=""
              />
              <img
                src="https://static.wixstatic.com/media/f52ec5_42bbf8e1c8b44cf5b7e7b5a9a036c41d~mv2.png/v1/crop/x_98,y_186,w_1064,h_336/fill/w_126,h_41,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cardiac-risk-logo-header.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------section 5 end-------------------------- */}

      {/* -----------------section 6 start-------------------------- */}

      <div
        className="h-[100vh] section6 flex flex-col items-center justify-center bg-slate-300 overflow-hidden"
        ref={section6REf}
      >
        <div className="sectiom6__heading flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl mb-5 font-bold " ref={section6HeadingOneRef}>
            HIPAA Compliant
          </h1>
          <h2
            className="text-3xl border-b-2 border-b-orange-400 px-10 pb-5"
            ref={section6HeadingTwoRef}
          >
            {" "}
            Your Patient Data is Protected
          </h2>
        </div>
        <div className="flex items-center justify-between w-[80%]">
          <div
            className="section6__img__container basis-1/2  flex justify-center items-center"
            ref={section6LeftRef}
          >
            <img
              src="https://static.wixstatic.com/media/f52ec5_3294b0b605894f07941429bf0410e602~mv2.png/v1/crop/x_44,y_0,w_512,h_329/fill/w_379,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/istockphoto-1401491634-612x612_edited_pn.png"
              alt=""
              srcset=""
            />
          </div>

          <div
            className="basis-1/2 flex items-center justify-center "
            ref={section6RightRef}
          >
            <p className="text-slate-100 text-lg">
              Protecting your patients' information is our top priority. That's
              why we're fully HIPAA compliant, meaning we follow the highest
              standards to safeguard sensitive data. We ensure the
              confidentiality, integrity, and availability of your patients'
              information. With us, you can trust that your patients' data is
              always secure, giving you peace of mind and allowing you to focus
              on delivering the best possible care.
            </p>
          </div>
        </div>
      </div>

      {/* -----------------section 6 end-------------------------- */}

      {/* -----------------section 7 start-------------------------- */}
      <div
        className="h-[100vh] text-white section7 flex items-center justify-center overflow-hidden "
        ref={section7REf}
      >
        <div className="flex items-center justify-between w-[80%]">
          <div className="basis-1/2" ref={section7LeftRef}>
            <div className="section7__img__container">
              <img
                src="https://static.wixstatic.com/media/f52ec5_6d8e00c112c54922aa4d9f7fe0301395~mv2.png/v1/fill/w_393,h_245,al_c,lg_1,q_85,enc_auto/ezgif-1-9a99c8f6df.png"
                alt=""
                srcset=""
                className="w-[50%]"
              />
            </div>
          </div>
          <div
            className="basis-[70%] flex flex-col text-lg mb-5 section7__right "
            ref={section7RightRef}
          >
            <p>
              Aarogram has stepped in as an effective co-pilot in our sleep
              center operations. From workflow checklists to automated reminders
              for claims processing, my staff and I are more organized and
              focused on high-priority tasks than ever before! I highly
              recommend it to any sleep center looking to improve their revenue
              cycle management.
            </p>
            <div className=" w-[70%] users flex items-center justify-between mt-5">
              <div className="section7__user__img__container">
                <img
                  src="https://static.wixstatic.com/media/f52ec5_45a338c700e1496783d1c9046bb8414f~mv2.png/v1/crop/x_0,y_0,w_508,h_487/fill/w_69,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(2).png"
                  alt=""
                  className="rounded-full "
                />
              </div>
              <div className="flex flex-col mx-5">
                <h5 className="font-bold ">Leonor Pereira</h5>
                <p>Sleep and CPAP Center, California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------section 7 end-------------------------- */}

      {/* -----------------section 8 start-------------------------- */}
      <div
        className="h-[100vh] flex flex-col justify-between items-center section8__main__container overflow-hidden"
        ref={section8REf}
      >
        <div className="w-full">
          <h1
            className="text-center text-5xl text-white mt-10 font-extrabold"
            ref={section8HeadingRef}
          >
            Our Expertise
          </h1>
        </div>
        <div className="flex justify-between items-center ">
          <div
            className="section8__left__container basis-1/2 flex flex-col items-center text-left ml-10 "
            ref={section8LeftRef}
          >
            <div className="flex justify-between items-center mb-10 w-[80%] mt-5 font-bold text-3xl">
              <p className="">Sleep Centers</p>
              <p>Other Specialites</p>
            </div>
            <h1 className="text-left w-[80%] font-light text-2xl">
              Why Sleep Centers Trust Us
            </h1>
            <p className="mt-3 mb-10 w-[80%]  font-light text-xl">
              We understand that running a sleep center is hard. At Aarogram, we
              have in-depth expertise in optimizing sleep center productivity.
              Our team provides seamless insurance reimbursement solutions and
              unparalleled efficiency to help your sleep center succeed.
            </p>
            <div className="w-[80%] ">
              <button className="text-left mb-5 p-3 border rounded-full inline-block">
                Learn More
              </button>
            </div>
          </div>
          <div
            className="basis-1/2    flex items-center justify-center relative"
            ref={section8RightRef}
          >
            <img
              src="https://static.wixstatic.com/media/27596dcd0a494572a93aa4aaebde6608.jpg/v1/crop/x_1166,y_328,w_4438,h_3292/fill/w_543,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Home%20Nurse%20Making%20Bed.jpg"
              alt=""
              srcset=""
            />
            <div className="section8__img__overlay"></div>
          </div>
        </div>
      </div>
      {/* -----------------section 8 end-------------------------- */}

      {/* -----------------section 9 start-------------------------- */}
      <div className="new__letter flex items-center justify-center h-[60vh] text-slate-200 relative">
        <div className="absolute new__letter__overlay"></div>
        <div className="z-20 flex flex-col items-center justify-center">
          <div className="img__container__news__letter w-full mx-auto flex justify-center items-center ">
            <lord-icon
              src="https://cdn.lordicon.com/iepbfivp.json"
              trigger="hover"
              colors="primary:#fff,secondary:#ed8812,tertiary:#ebe6ef"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>

            {/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}
          </div>
          <h1 className="text-3xl text-center w-3/4  mb-10">
            Subscribe to our newsletter to get all the news about how to
            optimize sleep center revenue.{" "}
          </h1>
          <div className="inputBox__newLetter w-full flex flex-col justify-center items-center">
            <input
              type="text"
              className="border-b-2 border-b-[#e45f29]  p-2 text-slate-200 focus:outline-none w-1/2  bg-transparent placeholder:text-orange-400 focus:border-b-[#ed9235]"
              placeholder="Enter your email here"
            />
            <button className="my-3 py-3 border-2 border-orange-500 text-slate-100 rounded-full px-10 hover:border-orange-600  hover:bg-orange-700 transition-all ">
              {" "}
              sign up{" "}
            </button>
          </div>
        </div>
      </div>
      {/* -----------------section 9 end-------------------------- */}

      {/* -----------------footer start-------------------------- */}
      <div className="footer h-[35vh] bg-[#001220]  flex flex-col justify-center items-center">
        <div className="flex justify-center items-bottom text-white   ">
          <div className="flex flex-col items-center text-center h-full w-full  p-3 ">
            <img
              src="https://static.wixstatic.com/media/87c402_a6cbbd35e2894d67b9d8eadcce45ef72~mv2.png/v1/fill/w_244,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AAROGRAM%20tm-ver.png"
              alt=""
              srcset=""
              className="w-[80%] mb-3 "
            />
            <p>
              Aarogram is fighting the complexity of insurance reimbursement and
              helping healthcare providers deliver efficient patient-centric
              care.{" "}
            </p>
          </div>
          <div className="flex flex-col  text-center h-full w-full  p-3 ">
            <h1>Product</h1>
            <p>Aarogram Revenue Cycle Managent</p>
            <p>Prior Auth Services</p>
          </div>{" "}
          <div className="flex flex-col  text-center h-full w-full p-3 ">
            <h1>Resources</h1>
            <p>Blog</p>
            <p>Podcast</p>
          </div>{" "}
          <div className="flex flex-col  text-center h-full w-full p-3 font-bold">
            <h1 className="font-bold">Why Aarogram</h1>
            <p>About</p>
          </div>
        </div>
      </div>
      {/* -----------------footer end-------------------------- */}
    </>
  );
};

export default Product;
