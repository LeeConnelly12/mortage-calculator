<script setup>
import { ref } from 'vue'
import Calculator from '@/components/Calculator.vue'
import Illustration from '@/components/Illustration.vue'
import MortgageAmount from '@/components/MortgageAmount.vue'
import MortgageTerm from '@/components/MortgageTerm.vue'
import InterestRate from '@/components/InterestRate.vue'
import MortgageType from '@/components/MortgageType.vue'
import { useMortgageCalculator } from '@/composables/useMortgageCalculator'
import { useFormValidation } from '@/composables/useFormValidation'
import { computed } from 'vue'

const { monthlyPayment, totalPayment, calculateMortgage } = useMortgageCalculator()

const { validateForm, errors } = useFormValidation()

const form = ref({
  amount: '',
  term: null,
  interestRate: null,
  type: null,
})

const mortgageAmount = computed(() => {
  if (form.value.amount === null) {
    return null
  }

  return parseInt(form.value.amount.replaceAll(',', ''))
})

const submit = () => {
  if (!validateForm(form.value)) {
    return
  }

  calculateMortgage(mortgageAmount.value, form.value.term, form.value.interestRate, form.value.type)
}

const reset = () => {
  form.value.type = null
}
</script>

<template>
  <main class="grid min-h-screen place-items-center md:py-10 lg:p-0">
    <div
      class="mx-auto grid-cols-2 overflow-hidden bg-white md:max-w-2xl md:rounded-3xl lg:grid lg:max-w-5xl"
    >
      <form @submit.prevent="submit" class="px-6 py-8 md:p-10">
        <div class="items-center justify-between md:flex">
          <h1 class="text-2xl font-bold text-slate-900">Mortgage Calculator</h1>
          <button @click="reset" type="reset" class="mt-2 underline md:mt-0">Clear All</button>
        </div>
        <div class="mt-6 grid grid-cols-2 gap-6 md:mt-10">
          <div class="col-span-full">
            <label class="block" for="amount">Mortgage Amount</label>
            <MortgageAmount
              v-model="form.amount"
              id="amount"
              class="mt-3"
              :error="errors['amount']"
            />
            <label v-if="errors['amount']" class="text-red mt-3 block text-sm" for="amount">
              {{ errors['amount'] }}
            </label>
          </div>
          <div class="col-span-full md:col-span-1">
            <label class="block" for="term">Mortgage Term</label>
            <MortgageTerm v-model="form.term" id="term" class="mt-3" :error="errors['term']" />
            <label v-if="errors['term']" class="text-red mt-3 block text-sm" for="term">
              {{ errors['term'] }}
            </label>
          </div>
          <div class="col-span-full md:col-span-1">
            <label class="block" for="interestRate">Interest Rate</label>
            <InterestRate
              v-model="form.interestRate"
              id="interestRate"
              class="mt-3"
              :error="errors['interestRate']"
            />
            <label
              v-if="errors['interestRate']"
              class="text-red mt-3 block text-sm"
              for="interestRate"
            >
              {{ errors['interestRate'] }}
            </label>
          </div>
          <fieldset class="col-span-full">
            <legend>Mortgage Type</legend>
            <MortgageType
              v-model="form.type"
              :isSelected="form.type === 'repayment'"
              class="mt-3"
              label="Repayment"
              id="repayment"
              value="repayment"
            />
            <MortgageType
              v-model="form.type"
              :isSelected="form.type === 'interestOnly'"
              class="mt-3"
              label="Interest Only"
              id="interestOnly"
              value="interestOnly"
            />
            <label v-if="errors['type']" class="text-red mt-3 block text-sm" for="type">
              {{ errors['type'] }}
            </label>
          </fieldset>
        </div>
        <button
          type="submit"
          class="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-lime text-lg font-bold text-slate-900 transition-colors hover:bg-lime/50 md:mt-10 md:w-auto md:px-10"
        >
          <Calculator />
          Calculate Repayments
        </button>
      </form>
      <div class="grid bg-slate-900 px-4 py-8 text-center md:p-10 lg:rounded-bl-3xl">
        <div v-if="!monthlyPayment && !totalPayment" class="m-auto">
          <Illustration class="m-auto" />
          <h2 class="mt-4 text-2xl leading-none text-white">Results shown here</h2>
          <p class="mt-4 leading-normal text-slate-300">
            Complete the form and click "calculate repayments" to see what your monthly repayments
            would be.
          </p>
        </div>
        <div v-else class="text-left">
          <h2 class="text-2xl leading-none text-white">Your results</h2>
          <p class="mt-4 leading-normal text-slate-300">
            Your results are shown below based on the information you provided. To adjust the
            results, edit the form and click "calculate repayments" again.
          </p>
          <div class="mt-6 rounded-lg border-t-4 border-lime bg-black/25 px-4 py-6 md:mt-10 md:p-8">
            <dl>
              <dt class="text-slate-300">Your monthly repayments</dt>
              <dl class="mt-3 text-[2.5rem] font-bold text-lime md:text-[3.5rem]">
                {{ monthlyPayment }}
              </dl>
            </dl>
            <hr class="mt-4 h-[1px] w-full border-0 bg-[#9ABED5] bg-opacity-25 md:mt-8" />
            <dl class="mt-4 md:mt-8">
              <dt class="text-slate-300">Total you'll repay over the term</dt>
              <dl class="mt-3 text-2xl font-bold leading-none text-white">
                {{ totalPayment }}
              </dl>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
