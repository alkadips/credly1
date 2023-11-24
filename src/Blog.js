import React, { useState } from "react";
export default function Blog() {
  const [iswhy, setiswhy] = useState(false);
  const [howtobuild, setHowtoBuild] = useState(false);
  const [differntType, setDifferentType] = useState(false);
  const [simpleintegration, setSimple] = useState(false);

  const toggleiswhy = () => {
    setiswhy(!iswhy);
  };
  const togglehowtobuld = () => {
    setHowtoBuild(!howtobuild);
  };
  const togglediffernttype = () => {
    setDifferentType(!differntType);
  };
  const togglesimpleIntegration = () => {
    setSimple(!simpleintegration);
  };

  return (
    <div className="p-5">
    
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 pb-20 mt-5 blog-main">
              <div className="snip1527 clickfin-para-home" style={{border:'1px solid black'}}>
                <div class="image">
                  <img 
                  src={process.env.PUBLIC_URL + '/assets/images/cre3.png'}
                   alt="pr-sample25" />
                </div>

                <figcaption>
                  <div>
                    <div className="font-bold">1. Why credely</div>
                    <div>
                     <span className="font-bold">Speedy Approvals: </span> credely understands the urgency of your
                      financial requirements. With a commitment to providing
                      timely assistance, credely ensures quick and efficient
                      loan approvals. Say goodbye to lengthy waiting times and
                      embrace the convenience of rapid financial solutions.
                    </div>
                  </div>
                  {iswhy && (
                    <div>
                      <div>
                       <span className="font-bold">Real-Time Updates:</span>  Stay in the loop with real-time
                        updates on your loan application. credely keeps you
                        informed about the status of your application, providing
                        clarity and reducing any uncertainty associated with the
                        loan approval process.
                      </div>

                      <div>
                        <span className="font-bold">Instant Money:</span> We understand the urgency of your
                        financial needs. Our platform ensures quick access to
                        funds, bridging the gap between you and your aspiration
                      </div>
                      <div>
                        <span className="font-bold">Hassle-Free Process:</span> Say goodbye to time-consuming
                        paperwork and complex procedures. credely streamlines
                        the loan application, approval, and fund transfer,
                        sparing you from unnecessary hassles.
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <button className="bg-blue-500 p-2 rounded-full ... text-white" onClick={toggleiswhy}>
                      {iswhy ? "Read Less" : "Read More..."}
                    </button>
                  </div>
                </figcaption>
              </div>
              <div className="snip1527 clickfin-para-home" style={{border:'1px solid black'}}>
                <div class="image">
                  <img 
                  src={process.env.PUBLIC_URL + '/assets/images/cre66.png'}
                   alt="pr-sample25" />
                </div>
                <figcaption>
                  <div className="font-bold">
                    2. How to build an Emergency Fund: Step-by-step guide
                  </div>
                  <div>
                    <span className="font-bold">Title: </span> "Building
                   <span className="font-bold">Financial Resilience:</span>  A Step-by-Step Guide to Creating Your
                    Emergency Fund"
                  </div>
                  <div>
                    In the unpredictable journey of life, having a financial
                    safety net is essential for weathering unexpected storms. An
                    emergency fund is your shield against unforeseen expenses,
                    offering peace of mind and financial stability. Here's a
                    step-by-step guide to help you build a robust emergency fund
                    and fortify your financial well-being.
                  </div>
                  {howtobuild && (
                    <div>
                      {" "}
                      <div>
                        <span className="font-bold"> Step 1: </span>

                        <div>
                          Set Clear Goals Define the purpose of your emergency
                          fund. Whether it's for medical emergencies, unexpected
                          car repairs, or job loss, having a specific goal will
                          help you determine the target amount for your fund.
                        </div>
                      </div>
                      <div>
                        <span className="font-bold"> Step 2: </span>
                        Assess Your Monthly Expenses Review your monthly budget
                        to understand your living expenses. Identify essential
                        costs such as rent, utilities, groceries, and insurance.
                        This analysis will serve as a foundation for determining
                        the size of your emergency fund.
                      </div>
                      <div>
                        <span className="font-bold"> Step 3: </span>
                        Determine the Ideal Fund Size Financial experts often
                        recommend having three to six months' worth of living
                        expenses in your emergency fund. Consider your personal
                        circumstances, job stability, and potential sources of
                        income when deciding on the ideal fund size.
                      </div>
                      <div>
                        <span className="font-bold"> Step 4: </span>
                        Open a Separate Savings Account To prevent dipping into
                        your emergency fund for non-urgent matters, open a
                        dedicated savings account. Look for an account with a
                        competitive interest rate and minimal fees to maximize
                        your fund's growth.
                      </div>
                      <div>
                        <span className="font-bold"> Step 5: </span>
                        Start Small, but Start Now Building your emergency fund
                        doesn't have to happen overnight. Set achievable monthly
                        savings goals, even if they are modest at first. The key
                        is to cultivate the habit of consistent saving.
                      </div>
                      <div>
                        <span className="font-bold"> Step 6: </span>
                        Automate Your Savings Take advantage of automation tools
                        provided by your bank to set up automatic transfers to
                        your emergency fund. This ensures a consistent and
                        disciplined approach to saving.
                      </div>
                      <div>
                        <span className="font-bold"> Step 7: </span>
                        Cut Unnecessary Expenses Identify areas where you can
                        trim expenses. Redirect the money saved towards your
                        emergency fund. Small sacrifices today can lead to
                        significant financial security tomorrow.
                      </div>
                      <div>
                        <span className="font-bold"> Step 8: </span>
                        Windfalls and Bonuses – Save, Don't Spend Resist the
                        temptation to splurge when you receive unexpected
                        windfalls or bonuses. Allocate a portion of such income
                        directly to your emergency fund to expedite its growth.
                      </div>
                      <div>
                        <span className="font-bold"> Step 9: </span>
                        Regularly Reassess and Adjust Life circumstances change,
                        and so should your emergency fund strategy. Regularly
                        reassess your financial situation, adjusting the fund
                        size and monthly contributions as needed.
                      </div>
                      <div>
                        <span className="font-bold"> Step 10: </span>
                        Keep it Sacred Your emergency fund is not a piggy bank
                        for vacations or non-urgent purchases. Keep it sacred
                        for genuine emergencies, ensuring it fulfills its
                        intended purpose.
                      </div>
                      <div>
                       <span className="font-bold">Conclusion: </span> Financial Security Starts with You Building
                        an emergency fund is a powerful act of self-care and
                        financial responsibility. By following these steps and
                        staying committed to your goals, you're creating a
                        foundation for greater financial resilience. Remember,
                        the journey to financial security begins with the first
                        step – start building your emergency fund today. Your
                        future self will thank you.
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <button
                      className="bg-blue-500 p-2 rounded-full ... text-white"
                      onClick={togglehowtobuld}
                    >
                      {howtobuild ? "Read Less" : "Read More..."}
                    </button>
                  </div>
                </figcaption>
              </div>
              <div className="snip1527 clickfin-para-home" style={{border:'1px solid black'}}>
                <div class="image">
                  <img 
                  src={process.env.PUBLIC_URL + '/assets/images/3.jpg'}
                   alt="pr-sample25" />
                </div>
                <figcaption>
                  <div className="font-bold">
                    3. Different Types of Loans in India
                  </div>
                  <div>
                    <span className="font-bold"> Title: </span>
                   <span className="font-bold">Exploring the Financial Spectrum:</span>  Different Types of Loans
                    in India
                  </div>
                  <div>
                    India's diverse economic landscape is complemented by a wide
                    array of loans catering to various needs and aspirations of
                    its population. Understanding the different types of loans
                    available is crucial for making informed financial
                    decisions. Let's delve into the financial spectrum and
                    explore the various types of loans in India.
                  </div>
                  {differntType && (
                    <div>
                      <div>
                        <span className="font-bold"> 1. Personal Loans: </span>
                        Personal loans are versatile and can be used for any
                        personal expense, from medical emergencies to travel
                        expenses. They are unsecured, meaning no collateral is
                        required, and approval is based on the borrower's
                        creditworthiness.
                      </div>
                      <div>
                        <span className="font-bold"> 2. Home Loans: </span>
                        Home loans are designed to help individuals fulfill the
                        dream of homeownership. These loans provide substantial
                        amounts with a long repayment tenure. The property being
                        purchased acts as collateral.
                      </div>
                      <div>
                        <span className="font-bold"> 3. Car Loans: </span>
                        Car loans are tailored for those aspiring to own a
                        vehicle. The car itself serves as collateral, and these
                        loans typically have a fixed tenure with regular monthly
                        payments.
                      </div>
                      <div>
                        <span className="font-bold"> 4. Education Loans: </span>
                        Education loans support students in pursuing higher
                        education. They cover tuition fees, living expenses, and
                        other related costs. Many education loans offer a
                        moratorium period post-course completion before the
                        repayment begins.
                      </div>
                      <div>
                        <span className="font-bold"> 5. Gold Loans: </span>
                        Gold loans are secured loans where gold jewelry or
                        assets act as collateral. These loans are ideal for
                        short-term financial needs and often have quick
                        processing times.
                      </div>
                      <div>
                        <span className="font-bold"> 6. Business Loans: </span>
                        Business loans are aimed at entrepreneurs and business
                        owners to meet various financial requirements for their
                        enterprises. They can be secured or unsecured, depending
                        on the lender and the borrower's profile.
                      </div>
                      <div>
                        <span className="font-bold">
                          {" "}
                          7. Personal Overdrafts:{" "}
                        </span>
                        Personal overdrafts are a line of credit linked to an
                        individual's account. It allows the account holder to
                        withdraw more money than the available balance, up to a
                        predetermined limit.
                      </div>
                      <div>
                        <span className="font-bold">
                          {" "}
                          8. Loan Against Property (LAP):{" "}
                        </span>
                        Similar to home loans, LAP allows borrowers to leverage
                        their property for a loan. The property's value
                        determines the loan amount, making it a viable option
                        for substantial financial needs.
                      </div>
                      <div>
                        <span className="font-bold">
                          {" "}
                          9. Two-Wheeler Loans:{" "}
                        </span>
                        Two-wheeler loans specifically cater to those looking to
                        purchase a bike or scooter. These loans are convenient,
                        offering flexible repayment options.
                      </div>
                      <div>
                        <span className="font-bold">
                          {" "}
                          10. Microfinance Loans:{" "}
                        </span>
                        Microfinance loans target individuals in the
                        lower-income bracket and small businesses. These loans
                        empower marginalized communities by providing them with
                        financial resources to start or expand small
                        enterprises.
                      </div>
                      <div>
                        <span className="font-bold"> Conclusion: </span>
                        Understanding the diverse types of loans available in
                        India empowers individuals to make informed decisions
                        based on their unique financial needs. Each type of loan
                        serves a specific purpose, and choosing the right one
                        involves considering factors such as interest rates,
                        repayment tenure, and eligibility criteria. Whether it's
                        for personal aspirations, homeownership, education, or
                        business ventures, the Indian financial market offers a
                        comprehensive range of loans to suit every requirement.
                      </div>
                    </div>
                  )}
                  <div className="mt-3 ">
                    <button
                      className="bg-blue-500 p-2 rounded-full ... text-white"
                      onClick={togglediffernttype}
                    >
                      {differntType ? "Read Less" : "Read More..."}
                    </button>
                  </div>
                </figcaption>
              </div>
              <div className="snip1527 clickfin-para-home" style={{border:'1px solid black'}}>
                <div class="image">
                  <img 
                  src={process.env.PUBLIC_URL + '/assets/images/cre.png'}
                   alt="pr-sample25" />
                </div>
                <figcaption>
                  <div className="font-bold">
                    4. Simple Strategies to Improve Your Credit Score
                  </div>
                  <div className="font-bold mt-2">
                    <span className="font-bold"> Title: </span>
                    "Simple Strategies to Improve Your Credit Score"
                  </div>
                  <div>
                    Your credit score is not just a number; it's a key that
                    unlocks financial opportunities. Whether you're looking to
                    secure a loan, get a credit card with better rewards, or
                    even rent an apartment, a healthy credit score can
                    significantly impact your financial well-being. If you've
                    been wondering how to boost your credit score, here are some
                    simple and effective strategies to get you on the path to
                    financial success.
                  </div>
                  {simpleintegration && (
                    <div>
                      {" "}
                      <div>
                        <span className="font-bold">1. Know Your Current Score:</span> Before you embark on the
                        journey of improving your credit score, it's essential
                        to know where you stand. Obtain a copy of your credit
                        report from major credit bureaus and review it for any
                        inaccuracies. Correcting errors can be an immediate
                        boost to your score.
                      </div>
                      <div>
                       <span className="font-bold">2. Pay Your Bills on Time: </span> One of the most influential
                        factors in your credit score is your payment history.
                        Consistently paying your bills on time demonstrates
                        responsibility and reliability. Set up automatic
                        payments or reminders to ensure you never miss a due
                        date.
                      </div>
                      <div>
                      <span className="font-bold">3. Reduce Credit Card Balances:</span>   High credit card
                        balances relative to your credit limit can negatively
                        impact your score. Aim to keep your credit card
                        utilization below 30%. Paying down existing balances can
                        have a swift and positive effect on your credit score.
                      </div>
                      <div>
                       <span className="font-bold">4. Don't Close Old Accounts:</span>  The length of your credit
                        history matters. Closing old credit accounts shortens
                        your credit history, potentially lowering your score.
                        Even if you're not using a particular credit card,
                        consider keeping the account open to maintain a longer
                        credit history.
                      </div>
                      <div>
                       <span className="font-bold">5. Diversify Your Credit Types:</span>  A mix of credit types,
                        such as credit cards, installment loans, and retail
                        accounts, can positively influence your credit score.
                        However, only open new credit when necessary, and ensure
                        you can manage it responsibly.
                      </div>
                      <div className="font-bold">6. Resolve Outstanding Collections:</div>
                      <div>
                        If you have any accounts in collections, work towards
                        resolving them. Contact the creditor to set up a payment
                        plan or negotiate a settlement. Resolving these issues
                        can gradually improve your credit score.
                      </div>
                      <div>
                       <span className="font-bold">7. Be Cautious with New Credit Applications:</span>  Each time
                        you apply for new credit, a hard inquiry is made on your
                        credit report. While one or two inquiries may not
                        significantly impact your score, numerous inquiries in a
                        short period can be a red flag. Apply for credit
                        strategically and only when needed.
                      </div>
                      <div>
                      <span className="font-bold">8. Become an Authorized User:</span>   Ask a family member or
                        friend with a positive credit history if you can be
                        added as an authorized user on their credit card. This
                        can potentially boost your score by including their
                        positive payment history on your credit report.
                      </div>
                      <div>
                       <span className="font-bold">9. Create a Budget:</span>  A well-managed budget can help you
                        allocate funds to pay off debts systematically. It
                        ensures that you're not overspending and can contribute
                        to reducing outstanding balances.
                      </div>
                      <div>
                      <span className="font-bold"> 10. Seek Professional Guidance:</span>  If you're facing
                        challenges improving your credit score, consider seeking
                        advice from a reputable credit counseling agency. They
                        can provide personalized guidance on managing your
                        finances and improving your credit
                      </div>
                      <div>
                        Improving your credit score is a gradual process that
                        requires commitment and consistency. By implementing
                        these simple strategies, you can pave the way towards a
                        stronger financial foundation and unlock a world of
                        opportunities. Remember, small, positive changes today
                        can lead to significant financial benefits tomorrow
                      </div>
                    </div>
                  )}
                  <div className="mt-3">
                    <button
                      className="bg-blue-500 p-2 rounded-full ... text-white"
                      onClick={togglesimpleIntegration}
                    >
                      {simpleintegration ? "Read Less" : "Read More..."}
                    </button>
                  </div>
                </figcaption>
              </div>
            </div>
      </div>
    
  );
}
