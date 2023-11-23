import React, { useState } from "react";
import FAQ from "./FAq";

export default function Personel() {
  const [faqs1, setFaqs1] = useState([
    {
      question: "Are Personal Loans a Wise Choice?",
      answer:
        "Personal loans can be a prudent option, especially during financial crises, as they provide quick access to funds without requiring collateral.",
      open: true,
    },
    {
      question: "How Can I Apply for a Personal Loan?",
      answer:
        "To apply for a personal loan, you must meet specific eligibility criteria, including age requirements, salaried employment, a good credit score, and a minimum monthly income.",
      open: false,
    },
    {
      question: "What Determines Personal Loan Eligibility?",
      answer:
        " Eligibility for a personal loan is based on factors such as age, employment status, credit score, and minimum monthly income.",
      open: false,
    },
    {
      question: "Do Personal Loans Affect Your Credit Score? ",
      answer:
        "Personal loans can impact your credit score, and missed repayments can have negative consequences due to the unsecured nature of these loans.",
      open: false,
    },
    {
      question: "How Long Does Personal Loan Approval Take? ",
      answer:
        " With the digitization of loan processes, personal loan approvals have become faster, often instant. However, the disbursal of funds may take up to 24 hours due to documentation procedures.",
      open: false,
    },

    {
      question: "Can I Repay a Personal Loan Before the Tenure Ends?",
      answer:
        " Yes, you can repay a personal loan before the tenure ends through prepayment. However, some lenders may charge a pre closure charges for repayment.",
      open: false,
    },

    {
      question: "What Is the Average Interest Rate on Personal Loans? ",
      answer:
        "  The average interest rate on personal loans typically ranges from 16.00% to 32%, but this can vary among different lenders.",
      open: false,
    },

    {
      question:
        "What Factors Do Banks Consider During Personal Loan Applications?  ",
      answer:
        " When applying for a personal loan, banks consider various factors, including age, monthly income, credit score, credit history, and necessary documentation.",
      open: false,
    },
    {
      question: "Which Lender Offers the Best Personal Loan Rates? ",
      answer:
        "  The best personal loan rates depend on the borrower’s credit profile, including a good credit score, consistent income source, and salaried employment.",
      open: false,
    },
    {
      question: "What Is the Minimum Salary Requirement for a Personal Loan?  ",
      answer:
        " While the minimum salary requirement may vary among lenders, most banks and NBFCs typically require a monthly income of ₹20,000 or more for personal loan approval.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs1(
      faqs1.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="text-black per-loan-back mt-16">
      <div className="main-per gap-5 p-5">
        <div>
          <div>
            <img className="text-center" src={process.env.PUBLIC_URL + "/assets/images/slider1.jpg"}></img>
          </div>
          <div className="text-black mt-5">
                  <div className="font-bold">1. Easy Approval:</div>
                  <p>
                  Personal loans offer easy and hassle-free approval, making them an ideal choice during financial emergencies. Moreover, the digitization of the process has significantly reduced the time required for verification.
                  </p>
                </div>
         
                </div>
        <div>
          <div>
            <div className="font-bold text-3xl mt-5 text-center">
            Benefits and Features of Personal Loan
            </div>
            <div className=" text-black rounded-xl mt-2 ">
              <div className="p-2">
             
                <div className="text-black mt-2">
                  <div className="font-bold"> 2. Benefits and Features of Personal Loan No Collateral Required:</div>
                  <div>
                    {" "}
                    One of the advantages of obtaining an online personal loan is that it doesn't require collateral. This means you don't have to pledge any assets to secure the loan. While this may affect the interest rate, meeting the eligibility criteria can easily grant you a low-interest personal loan. Minimal Documentation

In today's digital era, the verification and documentation process for personal loans has become remarkably efficient. This is especially true for instant personal loans, which are disbursed quickly and require only a minimum set of documents for approval.
                  </div>
                </div>
                <div className="text-black mt-2">
                  <div className="font-bold"> 3. Multipurpose in nature:</div>
                  <div>
                    {" "}
                    Unlike other forms of credit that are specific to certain purposes, a personal loan can be used for almost anything except for investments and illegal activities. Whether it's for a wedding, home renovation, or any immediate financial requirement, a personal loan provides a flexible solution to address various needs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-bold text-3xl mt-5 text-center">
        Personal Loan Eligibility
      </div>
      <div className="mt-3  ml-5 rounded-xl text-black m-auto w-2/4">
        <p className="ml-5">
          Personal loans are offered by most banks and NBFCs, each with their
          own specific eligibility criteria. Nonetheless, there exist certain
          common requirements across all financial institutions. The eligibility
          criteria to get an online personal loan approval for salaried and
          self-employed individuals are:
        </p>
      </div>

      <div className="mt-5 p-5  rounded-xl text-black">
        <table className="m-auto w-11/12" style={{ border: "1px solid black" }}>
          <tr>
            <th>Age</th>
            <td>21 years – 60 years</td>
          </tr>
          <tr>
            <th>Employment Type</th>
            <td>1. Salaried</td>
          </tr>
          <tr>
            <th>Credit score</th>
            <td>750 or above with a good credit history</td>
          </tr>
          <tr>
            <th>Minimum Net Income (Monthly)</th>
            <div>
              <td>₹30,000(non-metro cities)</td>
            </div>
            <div >
              <td>₹20,000( metro cities)</td>
            </div>
          </tr>
          <tr>
            <th>Loan Amount</th>
            <td>Up to ₹10 lacs depending on the credit profile</td>
          </tr>
          <tr>
            <th>Work Experience</th>
            <td>Employed at current company for at least 6/12 months</td>
          </tr>
        </table>
      </div>
      <div className="font-bold text-3xl mt-5 text-center text-black">
        Documents Required For Personal Loan
      </div>
      <div className="  rounded-xl text-black">
        <div className="mt-2 text-center">
          Below are the list of the typical documents needed for the approval of
          an online personal loan:
        </div>
        <div className="font-bold mt-2 text-center">Salaried Individuals</div>
        <ol className="number-list">
          <li>Proof of Identity and Age</li>
          <li>
            Fully completed personal loan application form with a photograph
          </li>
          <li>PAN Card</li>
          <li>
            Proof of Residence – Passport, driving license, Voter ID,
            postpaid/landline bill, utility bills (electricity/water/gas)
          </li>
          <li>
            Bank statements from the last three months (preferably from your
            salary account)
          </li>
          <li>Last three-month pay slips</li>
        </ol>
      </div>

      <div className="text-3xl font-bold mt-5 text-center">
        Representative Example:
      </div>
      <div className=" rounded-xl mt-5 text-black m-auto example">
        <div className="mt-5 ">Loan Amount: ₹1,00,000</div>
        <div>Tenure: 36 months</div>
        <div>Interest Rate: @18%* (reducing basis)</div>
        <div>EMI: ₹3,615</div>
        <div>
          Total Interest Payable: ₹3,615 x 36 months – ₹1,00,000 Principal =
          ₹30,140
        </div>
        <div>Processing fee (@ 2%) = ₹2,000 + GST = ₹2,360</div>
        <div>Disbursed Amount: ₹1,00,000 – ₹2,360 = ₹97,640</div>
        <div>Total Amount Payable: ₹3,615 x 36 months = ₹1,30,140</div>
        <div>
          Total Cost of the Loan = Interest Amount + Processing Fees = ₹30,140 +
          ₹2,360 = ₹32,500
        </div>
      </div>

      <div className="faqs text-black ">
        {faqs1.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>

      <div className="mt-5 ml-5 text-center m-auto w-11/12">
        Explore the world of personal loans with confidence, knowing the answers
        to these frequently asked questions. credely offers a seamless loan
        application process, ensuring you get the financial support you need for
        various purposes. Apply now and experience the convenience of our
        instant personal loan service.
      </div>
    </div>
  );
}
