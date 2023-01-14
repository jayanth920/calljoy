import React from "react";
import { useNavigate, Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>E Jayanth's Awesome Site</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Webflow" name="generator" />
      <link
        href="https://uploads-ssl.webflow.com/63bb5b85f110994f736a73c0/css/e-jayanths-awesome-site.webflow.b1cc01589.css"
        rel="stylesheet"
        type="text/css"
      />
      {/*[if lt IE 9]><![endif]*/}
      <link
        href="https://uploads-ssl.webflow.com/img/favicon.ico"
        rel="shortcut icon"
        type="image/x-icon"
      />
      <link
        href="https://uploads-ssl.webflow.com/img/webclip.png"
        rel="apple-touch-icon"
      />
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container-max-w-1060 w-container">
          <div className="nav-wrapper">
            <div className="logo-wrapper">
              <a href="#" className="brand w-nav-brand">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60533aefcf37090236ba6efb_Group%2018.png"
                  loading="lazy"
                  width={29}
                  alt=""
                  className="logo-image"
                />
                <div className="navlogo-name">Calljoy.</div>
              </a>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="#" className="navlink mr-2-5 w-nav-link">
                Home
              </a>
              <a href="#" className="navlink mr-2-5 w-nav-link">
              <Link to="/pricing">Pricing</Link>
              </a>
              <a href="#" className="navlink mr-2-5 w-nav-link">
                Team
              </a>
              <a href="#" className="navlink mr-2-5 w-nav-link">
                Blog
              </a>
              <a href="#" className="navlink w-nav-link">
                Contact
              </a>
            </nav>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section wf-section">
        <div className="container-1060 w-container">
          <div className="hero-block">
            <div className="w-layout-grid hero-grid">
              <div className="card-image-block">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60559576d5d4c657480a01a2_HERO%20IMAGE%20(4).png"
                  loading="lazy"
                  alt=""
                  className="card-image"
                />
              </div>
              <div
                id="w-node-c2326c45-130c-31dc-a559-bdbd2d6eb97b-f46a7404"
                className="hero-wrapper"
              >
                <h1 className="hero-title mb-2">
                  Get business solution with Calljoy.
                </h1>
                <div className="hero-text text-base leading-4">
                  Power your business to new heights with our award-winning
                  digital marketing services and technology platform.
                </div>
                <a
                  href="#"
                  className="getstarted-bttn text-2xl leading-8 w-button"
                >
                  Get Started
                </a>
              </div>
              <div className="hero-image-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60559576d5d4c657480a01a2_HERO%20IMAGE%20(4).png"
                  loading="lazy"
                  height={400}
                  width={500}
                  alt=""
                  className="card-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-section wf-section">
        <div className="container-1060 w-container">
        </div>
      </div>
      <div className="cards-section wf-section">
        <div className="container-1060 w-container">
          <div className="w-layout-grid cards-grid">
            <div
              id="w-node-_5887fbfd-43c6-3892-49af-2bae7151e79d-f46a7404"
              className="card-div"
            >
              <div className="card-mage-wrapper pt-2-875">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60543c8942c6ba78b358117c_Group%207.png"
                  loading="lazy"
                  width={114}
                  alt=""
                  className="card-image mb-2-625"
                />
              </div>
              <div className="card-text-block mb-2-5625 pl-1-25 pr-1-25">
                <div className="card-name text-3xl leading-10 font-bold mb-0-125">
                  Grow your traffic
                </div>
                <div className="card-txt text-sm leading-4">
                  Lorem Ipsum is simply dummy text <br />
                  of the printing and typesetting <br />
                  industry.
                </div>
              </div>
            </div>
            <div className="card-div">
              <div className="card-mage-wrapper pt-2-875">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60544d15ec59740182ae866d_Group%205.png"
                  loading="lazy"
                  width={114}
                  alt=""
                  className="card-image mb-2-68375"
                />
              </div>
              <div className="card-text-block mb-2-5625 pl-1-25 pr-1-3125">
                <div className="card-name text-3xl leading-10 font-bold mb-0-125">
                  Get quality leads
                </div>
                <div className="card-txt text-sm leading-4">
                  Lorem Ipsum is simply dummy text <br />
                  of the printing and typesetting <br />
                  industry.
                </div>
              </div>
            </div>
            <div className="card-div">
              <div className="card-mage-wrapper pt-2-671875 mb-3-890625 pr-28px">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60544d42587841d29517bbb6_packet_2.png"
                  loading="lazy"
                  width="158.5"
                  alt=""
                  className="card-image"
                />
              </div>
              <div className="card-text-block mb-2-5625 pl-1-5625 pr-1">
                <div className="card-name text-3xl leading-10 font-bold mb-0-125">
                  Drive more sales
                </div>
                <div className="card-txt text-sm leading-4">
                  Lorem Ipsum is simply dummy text <br />
                  of the printing and typesetting <br />
                  industry.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wf-section">
        <div className="container-1060 w-container">
          <div className="wtc-maindiv">
            <div className="w-layout-grid wtc-grid">
              <div className="image-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60583c1c3f4e87017587c5be_Illustration%20(1).png"
                  loading="lazy"
                  height
                  alt=""
                  className="wtc-image"
                />
              </div>
              <div className="wtc-right-block">
                <h2 className="wtc-heading mb-1-875 mt-1-75">
                  We take care of <br />
                  your business
                </h2>
                <div className="wtc-text mb-1-875 text-lg leading-4">
                  Power your business to new heights with our award-winning
                  digital marketing services and technology platform.
                </div>
                <div className="list-div mt-1-875">
                  <div className="logo-wrapper mb-3-75">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6054896ad728fb486b438db2_Group%2034.png"
                      loading="lazy"
                      alt=""
                      className="list-img mr-1-1875"
                    />
                    <div className="list-txt text-xl leading-6 font-medium mt-0-4375">
                      Power your business to new heights with our award-winning
                    </div>
                  </div>
                  <div className="logo-wrapper mb-3-75">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6054970fb9925f3882de85b3_Group%2035.png"
                      loading="lazy"
                      alt=""
                      className="list-img2 mr-1-25"
                    />
                    <div className="list-text2 text-xl leading-6 font-medium">
                      Our award-winning digital marketing services and
                      technology platform.
                    </div>
                  </div>
                  <div className="logo-wrapper">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/605498d07bb714aa973bed59_Group%2010%20Copy%202.png"
                      loading="lazy"
                      alt=""
                      className="list-img mr-1-1875"
                    />
                    <div className="list-txt text-xl leading-6 font-medium mt-1-0625">
                      Business to new heights with our
                      <br />
                      award-winning digital marketing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wf-section">
        <div className="container-1060 w-container">
          <div className="w-layout-grid numbers-grid">
            <div className="our-number-left-block">
              <h2 className="ournum-heading">Our numbers</h2>
              <p className="our-numpara mt-2-5 mb-2-75">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a
                href="#"
                className="letstalk-bttn text-2xl leading-8 font-bold pt-1-1875 pb-0-8125 pl-3-8125 pr-3-9375 w-button"
              >
                Let's Talk
              </a>
            </div>
            <div className="numbers-image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60558359d5d4c6a85409c4d3_Group%2036.png"
                loading="lazy"
                alt=""
                className="numbers-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-blog-sect wf-section">
        <div className="container-1060 w-container">
          <div className="formblog-div">
            <h3 className="formblog-heading mb-2-1875">From Blog</h3>
            <div className="w-layout-grid blog-brid">
              <div className="blog-div-wrapper">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055aff16f7f7054e7eb5ec8_Rectangle%20Copy.png"
                  loading="lazy"
                  alt=""
                  className="blog-image"
                />
                <div className="img-detailsdiv pl-1-3125">
                  <div className="calende-div">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b20fbb034a2c43ae763c_Group%2037.png"
                      loading="lazy"
                      alt=""
                      className="mr-0-375"
                    />
                    <div className="mr-1-75 text-sm leading-5 mt-2px">
                      23 Aug 2020
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b28a4e987f7c4839c40f_Group%2038.png"
                      loading="lazy"
                      alt=""
                      className="mr-0-375"
                    />
                    <div className="text-sm leading-5 mt-2px">12 min</div>
                  </div>
                  <div className="img-heading text-2xl leading-9 font-medium mb-0-875 mt-0-4375">
                    Waiting list management
                  </div>
                  <div className="img-txt text-sm leading-5">
                    The waitlist is an invaluable marketing <br />
                    tool when used appropriately. Here's <br />
                    how to capture those contacts.
                  </div>
                </div>
              </div>
              <div className="yellow-block">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055c3532e8de883323b4481_Rectangle%20Copy%204.png"
                  loading="lazy"
                  alt=""
                  className="blog-image"
                />
                <div className="img-details2 pl-1-375 mt-1-441875">
                  <div className="calende-div">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b20fbb034a2c43ae763c_Group%2037.png"
                      loading="lazy"
                      alt=""
                      className="mr-0-375"
                    />
                    <div className="mr-1-75 text-sm leading-5 mt-2px">
                      23 Aug 2020
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b28a4e987f7c4839c40f_Group%2038.png"
                      loading="lazy"
                      alt=""
                      className="mr-0-375"
                    />
                    <div className="text-sm leading-5 mt-2px">12 min</div>
                  </div>
                  <div className="img-head2 text-2xl leading-9 font-medium mt-1 mb-0-875">
                    E-commerce update
                  </div>
                  <div className="_2textblock text-sm leading-5">
                    The waitlist is an invaluable marketing <br />
                    tool when used appropriately. Here's <br />
                    how to capture those contacts.
                  </div>
                </div>
              </div>
              <div className="pink-block">
                <img
                  src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055c3931276314e89b2cd2e_Rectangle%20Copy%208.png"
                  loading="lazy"
                  alt=""
                  className="blog-image"
                />
                <div className="img-details2 pl-1-375 mt-1-441875">
                  <div className="calende-div">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b20fbb034a2c43ae763c_Group%2037.png"
                      loading="lazy"
                      alt=""
                      className="mr-0-375"
                    />
                    <div className="mr-1-75 text-sm leading-5 mt-2px">
                      23 Aug 2020
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b28a4e987f7c4839c40f_Group%2038.png"
                      loading="lazy"
                      alt=""
                      className="mr-0-375"
                    />
                    <div className="text-sm leading-5 mt-2px">12 min</div>
                  </div>
                  <div className="img-head2 text-2xl leading-9 font-medium mt-1 mb-0-875">
                    Shopify’s Q2 Report
                  </div>
                  <div className="_2textblock text-sm leading-5">
                    The waitlist is an invaluable marketing <br />
                    tool when used appropriately. Here's <br />
                    how to capture those contacts.
                    <br />‍
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wf-section">
        <div className="container-1160 w-container">
          <div className="wtsmaindiv mt-6-125">
            <div className="card-block-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055f280e08cca29fa33dc47_Group%2039.png"
                loading="lazy"
                alt=""
                className="message-icon-image"
              />
              <div className="card-content-block">
                <h4 className="wts-head">What they say?</h4>
                <div className="wts-text text-sm leading-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum.
                </div>
              </div>
            </div>
            <div className="w-layout-grid review-grid">
              <div className="wts-carddiv pt-1-5 pl-2 pr-1-5625">
                <div className="reviewer-details">
                  <div className="logo-wrapper">
                    <div className="img-div">
                      <img
                        src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/605729b31a8737354e0764c9_Oval%20Copy%206.png"
                        loading="lazy"
                        alt=""
                        className="user-avatar"
                      />
                    </div>
                    <div className="name-div ml-0-875">
                      <div className="wts-imgname text-base leading-5 font-medium mt-0-125">
                        Sampson Totton
                      </div>
                      <div className="wtsimg-job text-sm leading-5">
                        UI/UX Designer
                      </div>
                    </div>
                  </div>
                  <div className="number-wrapper">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60572c2091ba0ca43fe91769_Group%2025.png"
                      loading="lazy"
                      alt=""
                      className="number-avatar"
                    />
                  </div>
                </div>
                <div className="text-desc text-sm mt-1-125">
                  We are happy to hear you had a <br />
                  positive experience at Calljoy! We value <br />
                  your input and encourage you to let us <br />
                  know more details about your
                  <br /> experience with us.
                </div>
              </div>
              <div className="wts-carddiv pt-1-5 pl-2 pr-1-5625">
                <div className="reviewer-details">
                  <div className="logo-wrapper">
                    <div className="img-div">
                      <img
                        src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60572ff8abb488774c0e020d_Oval%20Copy%206%20(1).png"
                        loading="lazy"
                        alt=""
                        className="user-avatar"
                      />
                    </div>
                    <div className="name-div ml-0-875">
                      <div className="wts-imgname text-base leading-5 font-medium mt-0-125">
                        Karl Kalagin
                      </div>
                      <div className="wtsimg-job text-sm leading-5">
                        Mnager of saro
                      </div>
                    </div>
                  </div>
                  <div className="avatar-wrapper">
                    <img
                      src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/60573007e5d9ed3895c80b4d_Group%2025%20(1).png"
                      loading="lazy"
                      alt=""
                      className="number-avatar"
                    />
                  </div>
                </div>
                <div className="text-desc text-sm mt-1-125 mb-3-4375">
                  We are happy to hear you had a <br />
                  positive experience at Calljoy! We value <br />
                  your input and encourage you to let us <br />
                  know more details about your
                  <br />
                  experience with us.
                </div>
              </div>
            </div>
            <div className="image-wrapper">
              <img
                src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6057eefbb96d3faeca732572_Group%2040.png"
                loading="lazy"
                alt=""
                className="scroll-sign"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lastsection wf-section">
        <div className="container-1060 mt-63 w-container">
          <div className="lastsecmain-div">
            <img
              src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6058007ab96d3f4025735c35_Group%2041.png"
              loading="lazy"
              alt=""
              className="letter-box-image"
            />
            <img
              src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6058007ab96d3f4025735c35_Group%2041.png"
              loading="lazy"
              alt=""
              className="post-box-image"
            />
            <div className="yellow-div">
              <h4 className="projectesti-heading">
                Get the best project estimation
              </h4>
              <div className="cta-form">
                <div className="search-div">
                  <div className="entermail text-base leading-3 tracking-tighter">
                    Enter your email
                  </div>
                </div>
                <a
                  href="#"
                  className="send-bttn tracking-tight text-lg leading-5 w-button"
                >
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="container-1060 w-container">
          <div className="footer-wrapper">
            <div className="logo-wrapper-footer">
            
            </div>
            <div className="copyright-block">
              <div className="footer-txt text-lg leading-5 font-bold">
                2023 © Calljoy
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*[if lte IE 9]><![endif]*/}
    </div>
  );
}
