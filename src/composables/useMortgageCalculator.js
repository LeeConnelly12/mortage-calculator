// src/composables/useMortgageCalculator.js
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

  function calculateMortgage(principal, annualInterestRate, years) {
    const monthlyInterestRate = annualInterestRate / 100 / 12
    const numberOfPayments = years * 12

    const payment =
      (principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1)

    monthlyPayment.value = formatCurrency(payment)
    totalPayment.value = formatCurrency(payment * numberOfPayments)
  }

  return {
    monthlyPayment,
    totalPayment,
    calculateMortgage,
  }
}
