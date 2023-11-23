import React, { useEffect } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import {Link } from "react-router-dom"
export default function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="footer mt-5">
      <div className="footer-wrapper p-2">
      
          <div className="footer-logo">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              to="/"
            >
              <img style={{width:"100px"}} alt="logo" 
                           src={process.env.PUBLIC_URL + '/assets/images/logob.png'}

              ></img>
            </Link>
          </div>
        
        <div>
          <div className="font-bold">PRODUCTS</div>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/personelloan"
          >
            <div className="mt-3 text-xs">Personal Loan</div>
          </Link>


          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="/blog"
          >
            <div className="mt-3 text-xs">Blog</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">RESOURCES</div>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="emicalculator"
          >
            <div className="mt-3 text-xs">Emi Calculator</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="faqs"
          >
            <div className="text-xs mt-3">Faqs</div>
          </Link>
        </div>
        <div>
          <div className="font-bold">COMPANY</div>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="about"
          >
            <div className="mt-3 text-xs">About credely</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="contact"  
          >
            <div className="text-xs mt-3">Contact Us</div>
          </Link>
        </div>

        <div>
          <div className="font-bold">MORE</div>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="privecy"
          >
            <div className="mt-3 text-xs">Privacy Policy</div>
          </Link>
          <Link target="_blank"
            className="no-underline text-black"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            to="terms"
          >
            <div className="text-xs mt-3">Terms & condition</div>
          </Link>
        </div>
        <div>
        <div className="font-bold">CONTACT US</div>

          <div className="flex   mt-3 gap-5 justify-center">
            <div>
              <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication">
                <img
                  className="mobile-i3mage"
                  alt="google"
                  src={process.env.PUBLIC_URL + '/assets/images/andr.png'}

                ></img>
              </Link>
            </div>
            <div>
              <Link target="_blank" to="https://apps.apple.com/in/app/clikfin-one-click-away/id1658734808">
                <img
                  className="mobile-image"
                  alt="apple"
                  src={process.env.PUBLIC_URL + '/assets/images/app.png'}

                ></img>
              </Link>
            </div>
          </div>

          <div className="flex justify-center mt-3 gap-2">
            <div>
              <Link target="_blank"
                className="text-black no-underline"
                to="https://www.facebook.com/ClikFin/"
              >
                <IoLogoFacebook />
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-black no-underline"
                to="https://twitter.com/clikfin?lang=en"
              >
                <IoLogoTwitter />
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-black no-underline"
                to="https://www.instagram.com/clikfin/?hl=en"
              >
                <IoLogoInstagram />
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-black no-underline"
                to="https://www.linkedin.com/company/clikfin/"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
            <div>
              <Link target="_blank"
                className="text-black no-underline"
                to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@clikfin.com"
              >
                <IoIosMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm">
      Copyright ©2023 All rights reserved | Credely
      </div>
    </div>
  );
}
