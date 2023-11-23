const CurrencyFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });
  
  export default class PaymentSummary {
    constructor(timeWindow, remainingBalance) {
      this.timeWindow = timeWindow
      this.totalPrincipalPaid = 0.0
      this.totalInterestPaid = 0.0
      this.totalAmountPaid = 0.0
      this.numberOfPayments = 0
    }
  
    paymentRounded() {
      return CurrencyFormatter.format(this.totalAmountPaid)
    }
  
    principalPaymentRounded() {
      return CurrencyFormatter.format(this.totalAmountPaid - this.totalInterestPaid)
    }
  
    interestPaymentRounded() {
      return CurrencyFormatter.format(this.totalInterestPaid)
    }
  
   
  }