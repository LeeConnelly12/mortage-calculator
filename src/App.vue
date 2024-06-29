<script setup>
import { ref } from 'vue'
import Calculator from '@/components/Calculator.vue'
import Illustration from '@/components/Illustration.vue'
import { useMortgageCalculator } from '@/composables/useMortgageCalculator'

const { monthlyPayment, totalPayment, calculateMortgage } = useMortgageCalculator()

const form = ref({
  amount: null,
  term: null,
  interestRate: null,
  type: null,
})

const submit = () => {
  calculateMortgage(form.value.amount, form.value.term, form.value.interestRate, form.value.type)
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
          <button type="reset" class="mt-2 underline md:mt-0">Clear All</button>
        </div>
        <div class="mt-6 grid grid-cols-2 gap-6 md:mt-10">
          <div class="col-span-full">
            <label class="block" for="amount">Mortgage Amount</label>
            <input
              v-model="form.amount"
              type="text"
              id="amount"
              class="mt-3 w-full rounded-[0.25rem] border-slate-500 font-bold"
            />
          </div>
          <div class="col-span-full md:col-span-1">
            <label class="block" for="term">Mortgage Term</label>
            <input
              v-model="form.term"
              type="text"
              id="term"
              class="mt-3 w-full rounded-[0.25rem] border-slate-500 font-bold"
            />
          </div>
          <div class="col-span-full md:col-span-1">
            <label class="block" for="interestRate">Interest Rate</label>
            <input
              v-model="form.interestRate"
              type="text"
              id="interestRate"
              class="mt-3 w-full rounded-[0.25rem] border-slate-500 font-bold"
            />
          </div>
          <fieldset class="col-span-full">
            <legend>Mortgage Type</legend>
            <label
              class="mt-3 flex h-12 cursor-pointer items-center gap-4 rounded-[0.25rem] border border-slate-500 px-4"
            >
              <input
                v-model="form.type"
                type="radio"
                id="repayment"
                value="repayment"
                class="size-5"
              />
              <span class="text-lg font-bold text-slate-900">Repayment</span>
            </label>
            <label
              class="mt-3 flex h-12 cursor-pointer items-center gap-4 rounded-[0.25rem] border border-slate-500 px-4"
            >
              <input
                v-model="form.type"
                type="radio"
                id="interestOnly"
                value="interestOnly"
                class="size-5"
              />
              <span class="text-lg font-bold text-slate-900">Interest Only</span>
            </label>
          </fieldset>
        </div>
        <button
          type="submit"
          class="bg-lime mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-full text-lg font-bold text-slate-900 md:mt-10 md:w-auto md:px-10"
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
          <div class="border-lime mt-6 rounded-lg border-t-4 bg-black/25 px-4 py-6 md:mt-10 md:p-8">
            <dl>
              <dt class="text-slate-300">Your monthly repayments</dt>
              <dl class="text-lime mt-3 text-[2.5rem] font-bold md:text-[3.5rem]">
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
