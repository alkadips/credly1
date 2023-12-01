import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function Homepage() {
  

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
   fontSize:'12px',
   
    p: 4,
  };
  

  const [upwordOpen, setUpwordOpen] = React.useState(false);
  const handleOpenUpword = () => setUpwordOpen(true);
  const handleCloseUpword = () => setUpwordOpen(false);

  const [loantapOpen, setloantapOpen] = React.useState(false);
  const handleOpenLoanTap = () => setloantapOpen(true);
  const handleCloselaonTap = () => setloantapOpen(false);
  return (
    <div>
      <div
        className="p-5  gap-5 main-home"
        style={{ marginTop:'50px' }}
      >
        <div className="mt-24">
          <img style={{borderRadius:'20px'}} src={process.env.PUBLIC_URL + "/assets/images/credhome.png"}></img>
        </div>

        <div>
         
          <div className="font-bold text-3xl ml-3 mt-5 text-black welcome">
          Turn Your Dreams into Reality with Instant Cash! Elevate Your Life Instantly through Credely:
          </div>
          <div className="list-item-demo">
            <ul className="text-black" style={{ listStyle: "initial" }}>
              <li> 1. Unlock Funds up to ₹10 Lakhs</li>
              <li>2. Immediate Bank Transfers Experience</li>
            </ul>
          </div>
         

          <div className="clickfin-para-home p-3  rounded text-black  border-solid "style={{border:'1px solid'}}>
            <p>
            The Ultimate Answer to Your Urgent Cash Requirements with Credely. From shopping sprees to travel escapades, bill settlements, or unforeseen costs, count on Credely to stand by you during life's demanding phases.
            
            </p>
          </div>
          <NavLink
            className="no-underline"
            to="https://play.google.com/store/apps/details?id=com.clikfin.clikfinapplication"
          ></NavLink>
        </div>
      </div>
      <div className=" text-center text-3xl text-black font-bold mt-5">
      Credely Personal Loan Appy
simple three step
      </div>


      <div className=" p-5 gap-5 about-para">
        <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid " style={{background:'black',fontSize:'14px'}}>
          <div className="font-bold text-center"> Go to App Or website</div>
          <div className="mt-3">
            {" "}
            Seamless Access via App or Website Start Your Journey by Crafting an Account Using Simple KYC Information, and Then Lodge the Account with Credely. Visit our App or Website Initiate the account setup process by providing essential KYC details. Once completed, swiftly submit the account for processing through Credely.
          </div>
        </div>

        <div className=" p-5 rounded-lg ... clickfin-para-home  text-white border-2 border-solid "style={{background:'black',fontSize:'14px'}}>
          <div className="font-bold text-center">Fill Information</div>
          <div className="mt-3">
          Provide Information Undergo Verification and Approval: Our dedicated team will meticulously verify the information you've provided. Following the thorough account verification process, we will assess your qualifying loan limit and grant loan approval.
          </div>
        </div>

        <div className=" p-5 rounded-lg ... clickfin-para-home text-white  border-2 border-solid "style={{background:'black',fontSize:'14px'}}>
          <div className="font-bold text-center"> Loan Delivered</div>
          <div className="mt-3">
          Cash Disbursed Access Rapid Funds: Upon receiving approval, input your bank account details and provide consent to our loan agreement via the Credely App. Once these steps are completed, the sanctioned loan amount will be swiftly transferred to your bank account within a span of 5 minutes.
          </div>
        </div>
      </div>






      <div className=" text-center text-3xl text-black font-bold mt-5">
        Why Opt for Credely Instant Loans?
      </div>
      <div
        className="text-center mt-3 text-black m-auto"
        style={{ width: "50%" }}
      >
        <p>
        In this era of swift digital advancements, Credely presents a contemporarily designed, practical personal loan choice. Say goodbye to extensive paperwork; embrace instant processing times and appealing interest rates, all without any prepayment penalties. Secure a personal loan of up to ₹10 lakh and experience the seamless transfer directly to your bank account, all within a matter of minutes.
        </p>
      </div>

      <div className=" text-center text-3xl text-black mt-24 font-bold">
        Our Awesome Testimonials
      </div>
      <div className="text-center mt-3 text-black">
        <p>
          We Believe Helping People During Need Is A Best Deed, Thus Your
          Blessings Makes Us Unique.
        </p>
      </div>
      <div className="flex gap-5  justify-center text-black p-3 ">
        <Carousel>
          <Carousel.Item>
            <div className=" gap-5  justify-center text-black p-3 testmonials">
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “I used ClikFin to help me pay for my travel expenses. The
                    service was great – fast but still friendly. Fantastic and
                    Painless Experience. Thank you.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl">
                      Swati Joshi
                    </div>
                    <div>Mumbai</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “These guys are always ready to help when you need it most.
                    They helped cover school fees for my brother and I when I
                    was a little low on cash.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Purnima Rawat
                    </div>
                    <div>Kanpur</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “Their application process was quick and simple. in a short
                    time I had the funds I needed to complete some much needed
                    improvements around the house.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Kartik Patel
                    </div>
                    <div>Ahmedabad</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" gap-5 justify-center text-black p-3 testmonials">
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “I used ClikFin to help me pay for my travel expenses. The
                    service was great – fast but still friendly. Fantastic and
                    Painless Experience. Thank you.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Swati Joshi
                    </div>
                    <div>Mumbai</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “These guys are always ready to help when you need it most.
                    They helped cover school fees for my brother and I when I
                    was a little low on cash.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Purnima Rawat
                    </div>
                    <div>Kanpur</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “Their application process was quick and simple. in a short
                    time I had the funds I needed to complete some much needed
                    improvements around the house.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Kartik Patel
                    </div>
                    <div>Ahmedabad</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" gap-5  justify-center text-black p-3 testmonials">
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “I used ClikFin to help me pay for my travel expenses. The
                    service was great – fast but still friendly. Fantastic and
                    Painless Experience. Thank you.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Swati Joshi
                    </div>
                    <div>Mumbai</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “These guys are always ready to help when you need it most.
                    They helped cover school fees for my brother and I when I
                    was a little low on cash.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Purnima Rawat
                    </div>
                    <div>Kanpur</div>
                  </div>
                </div>
              </div>
              <div className=" p-5 rounded-lg ... clickfin-para-home text-white border-2 border-solid"style={{background:'black',fontSize:'14px'}}>
                <div>
                  <p>
                    “Their application process was quick and simple. in a short
                    time I had the funds I needed to complete some much needed
                    improvements around the house.”
                  </p>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                  <div>
                    <img
                      className="w-5 h-5"
                      src={process.env.PUBLIC_URL + "/assets/images/star1.png"}
                    ></img>
                  </div>
                </div>
                <div className="flex gap-5 mt-5">
                  <div>
                    <div className="text-yellow-600 font-bold text-xl font-bold">
                      Kartik Patel
                    </div>
                    <div>Ahmedabad</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="font-bold text-center text-3xl text-black mt-12">
        Our Partners
      </div>



      <Modal
  open={upwordOpen}
  onClose={handleCloseUpword}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <div className="mt-5">
          <table className="m-auto w-11/12" >
            <tr>
              <th>BANK/NBFC</th>
              <td>Upwards</td>
            </tr>
            <tr>
              <th>Interest Rate(pa)</th>
              <td>16.00 % to 32%</td>
            </tr>
            <tr>
              <th>Loan Amount </th>
              <td>20,000 Thousand to 5 Lakhs</td>
            </tr>
            <tr>
              <th>Processing Fees </th>
              <td>Up to 2 % to 4 % of the loan amount</td>
            </tr>
            <tr>
              <th>Part Payment</th>
              <td>Up to 40% of loan amount every year</td>
            </tr>
            <tr>
              <th>Pre-closure Charges</th>
              <td>Upto 5% on your principal outstanding + GST</td>
            </tr>
            <tr>
              <th>Locking Period</th>
              <td>3 Month</td>
            </tr>
            <tr>
              <th>Tenure</th>
              <td>12 to 48 months</td>
            </tr>
          </table>
        </div>
  </Box>
</Modal>

<Modal
  open={loantapOpen}
  onClose={handleCloselaonTap}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <div className="mt-5">
          <table className="m-auto w-11/12" style={{fontSize:'12x'}}>
            <tr>
              <th>BANK/NBFC</th>
              <td>Loan Tap</td>
            </tr>
            <tr>
              <th>Interest Rate(pa)</th>
              <td>16.00 % to 24%</td>
            </tr>
            <tr>
              <th>Loan Amount </th>
              <td>50 Thousand to 10 Lakhs</td>
            </tr>
            <tr>
              <th>Processing Fees </th>
              <td>2 % of the loan amount</td>
            </tr>
            <tr>
              <th>Part Payment</th>
              <td>Up to 40% of loan amount every year</td>
            </tr>
            <tr>
              <th>Pre-closure Charges</th>
              <td>
                <ul>
                  <li>0-6 Months – 5% of Principal Outstanding</li>
                  <li>6 months – 0%</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Locking Period</th>
              <td>6 Month</td>
            </tr>

            <tr>
              <th>Tenure</th>

              <td>12 to 60 months</td>
            </tr>
          </table>
        </div>
  </Box>
</Modal>
      <div className="flex justify-center gap-5 mt-5">
        <div>
          <img
            onClick={handleOpenUpword}
            className="mobile-image cursor-pointer w-36"
            src={process.env.PUBLIC_URL + "/assets/images/part1.png"}
          ></img>
        </div>
        <div>
          <img
            onClick={handleOpenLoanTap}
            className="mobile-image cursor-pointer w-36"
            src={process.env.PUBLIC_URL + "/assets/images/par3.jpg"}
          ></img>
        </div>

        <div>
          <img
            className="mobile-image w-16 cursor-pointer"
            src={process.env.PUBLIC_URL + "/assets/images/par2.jpeg"}
          ></img>
        </div>
      </div>

     
     
      
     
    </div>
  );
}
