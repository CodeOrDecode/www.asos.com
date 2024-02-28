import React from "react";
import "../Css/Home.css";
import Navbar from "../Allsimilar/Navbar";
import Footer from "../Allsimilar/Footer";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="firstbanner">
        <div id="firstbannerone">
          <div>WOMEN</div>
        </div>
        <div id="firstbannertwo">
          <p>25% OFF SELECTED STYLES!*</p>
          <p>With code: TREATYASELF</p>
        </div>
        <div id="firstbannerthree">
          <div>MEN</div>
        </div>
      </div>

      <div className="secondbanner">
        <div className="secondpone">This is ASOS</div>
        <div className="secondptwo">ASOS DESIGN and 850+ brands</div>
        <div className="buttondiv">
          <div className="buttondivchild">SHOP WOMEN</div>
          <div className="buttondivchild">SHOP MEN</div>
        </div>
      </div>

      <div className="thirdbanner">
        <div className="thirdbannerdiv">
          <p>EASY WORLDWIDE DELIVERY</p>
          <p>*minimum spends apply</p>
        </div>
        <div className="thirdbannerdiv">
          <p>ASOS DESIGN and 850+</p>
          <p id="differ">brands</p>
        </div>
      </div>

      <div className="fourhbanner">
        <div className="mainimage">
          <div id="mainimageone">
            <img
              src="https://www.buscopng.com/wp-content/uploads/2021/03/Facebook-logo-circular.png"
              alt=""
            />
            <img
              src="https://pleiadianportal.com/wp-content/uploads/2020/06/Purple-Insta.png"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.Hl2RYSsqub1WD29SnnL2mAHaHa?w=2047&h=2047&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div id="mainiamgetwo">
            <img
              src="https://images.asos-media.com/navigation/visa-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/mastercard-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/pay-pal-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/american-express-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/visa-electron-png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
