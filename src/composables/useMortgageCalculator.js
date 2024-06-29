import { ref } from 'vue'

export function useMortgageCalculator() {
  const monthlyPayment = ref('')
  const totalPayment = ref('')

  function formatCurrency(value) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(value)
  }

  function calculateMortgage(amount, term, interestRate, type) {
    const monthlyInterestRate = interestRate / 100 / 12
    const numberOfPayments = term * 12

    let payment

    if (type === 'repayment') {
      payment =
        (amount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)
    } else if (type === 'interestOnly') {
      payment = amount * monthlyInterestRate
    }

    monthlyPayment.value = formatCurrency(payment)
    totalPayment.value = formatCurrency(payment * numberOfPayments)
  }

  return {
    monthlyPayment,
    totalPayment,
    calculateMortgage,
  }
}
