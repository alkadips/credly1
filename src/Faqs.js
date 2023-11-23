import React, { useState } from "react";
import FAQ from "./FAq";
export default function Faqs() {
  const [faqs1, setFaqs1] = useState([
    {
      question: "Criteria for Loan Approval",
     
      answer:
        "Loan approval is based on the information you provide in CredEly. Your credit history also plays a significant role in the approval process.",
      open: true,
    },
    {
      question: "Am I Eligible for a Personal Loan from Credely?",
      answer:
        " All Indian residents aged between 21 to 56 years, whether salaried or self-employed, with a monthly source of income, are eligible for a personal loan from CredEly. Valid PAN and address proof are mandatory.",
      open: false,
    },
    {
      question: "Minimum and Maximum Loan Amounts:",
      answer:
        "Indian residents can avail loans from Rs. 20,000 to Rs. 1,000,000 per request. The final amount depends on your available credit limit, which is based on your profile.",
      open: false,
    },
    {
      question: "Supported Platform",
      answer:
        "Currently, the Credely App is available only for Android mobile users.",
      open: false,
    },
    {
      question: " Processing Fee Amount",
      answer: "The processing fee is a one-time charge on each loan request, covering the costs incurred due to the Loan Agreement's processing. Your loan limit can increase by availing more loans and making timely repayments. This increase depends on factors such as your monthly salary, credit score, etc.'",
      open: false,
    },
    {
      question: " Loan Amount Increses",
      answer:
        " Your credit records will gradually improve with your repayments and credit history, leading to an increase in the loan amount.",
      open: false,
    },
    {
      question: "Changing Bank Account Number",
      answer:
        " To change your bank account number in the Credely App, please follow the provided instructions.",
      open: false,
    },
    {
      question: " Reasons For Loan Application Rejection",
      answer:
        "There could be various reasons for loan application rejection. Factors such as credit history, eligibility criteria, or documentation could contribute to this decision. Feel free to contact us for any further clarifications or assistance. We are here to help you.",
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
    <div className="faq-section  mt-10 gap-5 p-5">
     

      <div>
        <div className="font-bold text-2xl text-black">
          To Apply For A Loan With credely, Follow These Simple Steps:
        </div>
        <div className="text-black  rounded-xl mt-3">
          <div className="mt-3 ">
            <p>
              1. Install the credely App from Google Play Store and register an
              account with basic KYC details.
            </p>
          </div>
          <div>
            <p>
              2. Submit the required documents for verification and loan
              approval.
            </p>
          </div>
          <div>
            <p>
              3. Once approved, add your bank account details and give consent
              to our loan agreement on the credely App.
            </p>
          </div>
          <div>
            <p>
              4. The approved loan amount will be disbursed directly to your
              bank account.
            </p>
          </div>
        </div>
      </div>

      <div className="faqs text-black ">
        {faqs1.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
