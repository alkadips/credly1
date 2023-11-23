import React from "react";
export default function Contact() {
  return (
    <div className="mt-24">
      <div className="font-bold text-3xl mt-5 text-center text-black">
        Get In Touch
      </div>
      <div className="font-bold text-center mt-3 text-black">
        Reach Out To Us & We Will Respond As Soon As We Can.
      </div>

      <div>
        <div className="contact-main  gap-5 p-5">
          <div >
            <div className="font-bold text-black">About Credely </div>
            <div className=" rounded-xl text-black">
              <p>
              Credely brand is 100% owned by CygniSys Service’s Pvt Ltd
                 incorporated in 2021,
                we are an online platform that provides customers with financial
                products and services such as personal loans. We connect
                borrowers with lenders to help them get the best deal possible.
                We have partnered with RBI Approved NBFCs to distribute various
                types of loans. We are not a NBFC, we do not do any co-lending /
                FLDG based lending ourselves. We don’ do any sort of collections
                / recovery of loans we distribute..
              </p>
            </div>
          </div>
          {/* <div >
            <img  
            src={process.env.PUBLIC_URL + '/assets/images/contact.png'}
            ></img>
          </div> */}
        </div>

        <div className="font-bold mt-5 text-center">
          We Would Love To Hear Your Suggestions Or Complaints. Please Let Us
          Try To Help You.
        </div>
      
        
      </div>
      <div className="flex justify-around mt-2 gap-5 p-3">
          <div className="text-center w-1/4">
            #147, 7th sector 5th Main, HSR layout Bangalore – 560102 Karnataka,
            India
          </div>
          <div className="text-center w-1/4">
            Sacred Heart Mall,  Wanowrie, Pune, Maharashtra,411040,India
          </div>
        </div>
      
      <div className="flex gap-5 p-5 justify-evenly">
        <div >
        <iframe
          src="https://maps.google.com/maps?q=155-148%2C%205th%20Main%20Rd%2C%20Sector%207%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102&t=m&z=10&output=embed&iwloc=near"
        width='100%'
          title="Address"
         
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      <div>
      <iframe width='100%' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8297357619886!2d73.90039019999999!3d18.491370000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d763eef245%3A0x231235bdaa9ad735!2sSacred%20World%20Mall%2C%20Wanwadi%2C%20Pune%2C%20Maharashtra%20411040!5e0!3m2!1sen!2sin!4v1700656377048!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
    
  );
}
