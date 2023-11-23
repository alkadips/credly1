import React from "react";
import InputForm from "./InputForm";
import AmortizationSchedule from "./AmortizationSchedule";
import LoanRequest from "./Modals/LoanRequest";
import getSchedule from "./Lib/AmortizationService";
class EmiCalc extends React.Component {
  state = {
    monthlyPayment: 0,
    columns: [
      {
        Header: "Month",
        accessor: "paymentNumber",
      },
      {
        Header: "Principal",
        accessor: "principalPaymentRounded",
      },
      {
        Header: "Interest",
        accessor: "interestPaymentRounded",
      },
      {
        Header: "Total Payments",
        accessor: "paymentRounded",
      },
    
    ],
    amortizationSchedule: [],
    loanResponse: {
      amortizationSchedule: [],
      annualPaymentSummary: new Map(),
    },
    currentYear: new Date().getFullYear(),
    developer: "goel4ever",
  };
  calculatePayments = ({ principal, rate, duration }) => {
    if (principal < 0 || rate < 0 || duration < 0 || duration > 40) {
      return;
    }

    const loanRequest = new LoanRequest(principal, rate, duration);
    const loanResponse = getSchedule(loanRequest);

    this.setState({
      monthlyPayment: loanResponse.monthlyPayment,
      amortizationSchedule: loanResponse.amortizationSchedule,
      loanResponse,
    });
  };
  render() {
    return (
      <div className="text-black mt-24">
        <div className="font-bold text-3xl mt-5 text-center">
          EMI Calculator - Your Convenient Loan Planning Tool
        </div>

        <div className=" emi-main text-black p-3">
          <div className="clickfin-para-home sample-cal shadow-2xl ... p-5  border-2 border-solid " style={{fontSize:'14px'}}>
            <div>
              <InputForm onSubmit={this.calculatePayments} />
              <div className="mt-5">
                <AmortizationSchedule
                  data={this.state.loanResponse}
                  columns={this.state.columns}
                  showPagination={false}
                  defaultPageSize={400}
                />
              </div>
            </div>
          </div>

          <div className="clickfin-para-home sample-cal shadow-2xl ... p-5  border-2 border-solid" style={{fontSize:'14px'}}>
            <div>Sample Calculations</div>
            <div className="flex mt-5 gap-5 justify-between">
              <div>Loan Amount</div>
              <div>₹1,00,000</div>
            </div>
            <hr></hr>

            <div className="flex mt-5 gap-5 justify-between">
              <div>Loan Tenure</div>
              <div>24 months</div>
            </div>
            <hr></hr>

            <div className="flex mt-5 gap-5 justify-between">
              <div>Processing fee (3% + GST)</div>
              <div>₹3,540</div>
            </div>
            <hr></hr>

            <div className="flex mt-5 gap-5 justify-between">
              <div>EMI</div>
              <div>₹5,905</div>
            </div>
            <hr></hr>

            <div className="flex mt-5 gap-5 justify-between">
              <div>Total interest charged</div>
              <div>₹41,714</div>
            </div>
            <hr></hr>
            <div className="flex mt-5 gap-5 justify-between">
              <div>ROI(per month)</div>
              <div>3%</div>
            </div>
          </div>
        </div>

        <div></div>
        <div className=" mt-5 gap-5 p-5 emi-glance">
          <div>
            <img 
             src={process.env.PUBLIC_URL + '/assets/images/emi55.png'}
            ></img>
          </div>
          <div className="  text-black rounded-xl">
            <div>
              <div>
                <p>
                  Calculating the Equated Monthly Installment (EMI) for a loan
                  has never been easier. With our user-friendly EMI calculator,
                  you can obtain the EMI instantly by entering the desired loan
                  amount and the applicable interest rate. The calculator
                  considers the reducing balance method to compute the
                  installment accurately.
                </p>
              </div>
              <div className="font-bold">Important Considerations:</div>
              <div className="mt-2">
                <div className="font-bold">1. Reducing Balance Method: </div>
                <div>
                  Our EMI calculator employs the reducing balance method, which
                  ensures a precise calculation of your installment amount,
                  factoring in the reduced principal balance over time.
                </div>
              </div>
              <div className="mt-2">
                <div className="font-bold">2. Additional Charges:</div>
                <div>
                  Please note that the EMI calculated using the tool does not
                  include processing fees or any other possible charges that may
                  be applicable as per the financing institution’s rules.
                </div>
              </div>
              <div className="mt-3 font-bold">Plan Your Loan Repayment:</div>
              <div className="mt-2">
                Using our EMI calculator, you can make informed decisions about
                your loan repayment strategy. By adjusting the loan amount and
                interest rate, you can assess various loan options and determine
                an EMI that aligns with your financial capacity.
              </div>
              <div className="mt-5">
                <p>
                  Get started with our EMI calculator today and plan your loan
                  journey with confidence. Please keep in mind that the results
                  provided are indicative and may differ slightly from the
                  actual EMI offered by the lending institution. For precise
                  loan details, feel free to connect with our team or the
                  respective financing institution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EmiCalc;
