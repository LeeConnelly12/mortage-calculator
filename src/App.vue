<script setup>
import { ref } from 'vue'
import Calculator from '@/components/Calculator.vue'
import Illustration from '@/components/Illustration.vue'

const form = ref({
  mortgageAmount: null,
  mortgageTerm: null,
  interestRate: null,
  mortgageType: null,
})

const submit = () => {
  //
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
            <label class="block" for="mortgageAmount">Mortgage Amount</label>
            <input
              v-model="form.mortgageAmount"
              type="text"
              id="mortgageAmount"
              class="mt-3 w-full rounded-[0.25rem] border-slate-500"
            />
          </div>
          <div class="col-span-full md:col-span-1">
            <label class="block" for="mortgageTerm">Mortgage Term</label>
            <input
              v-model="form.mortgageTerm"
              type="text"
              id="mortgageTerm"
              class="mt-3 w-full rounded-[0.25rem] border-slate-500"
            />
          </div>
          <div class="col-span-full md:col-span-1">
            <label class="block" for="interestRate">Interest Rate</label>
            <input
              v-model="form.interestRate"
              type="text"
              id="interestRate"
              class="mt-3 w-full rounded-[0.25rem] border-slate-500"
            />
          </div>
          <fieldset class="col-span-full">
            <legend>Mortgage Type</legend>
            <label
              class="mt-3 flex h-12 items-center gap-4 rounded-[0.25rem] border border-slate-500 px-4"
            >
              <input v-model="form.mortgageType" type="radio" id="repayment" value="repayment" />
              <span class="text-lg font-bold text-slate-900">Repayment</span>
            </label>
            <label
              class="mt-3 flex h-12 items-center gap-4 rounded-[0.25rem] border border-slate-500 px-4"
            >
              <input
                v-model="form.mortgageType"
                type="radio"
                id="interestOnly"
                value="interestOnly"
              />
              <span class="text-lg font-bold text-slate-900">Interest Only</span>
            </label>
          </fieldset>
        </div>
        <button
          type="submit"
          class="bg-lime mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-full px-10 text-lg font-bold text-slate-900 md:mt-10 md:w-auto"
        >
          <Calculator />
          Calculate Repayments
        </button>
      </form>
      <div
        class="grid place-items-center bg-slate-900 px-4 py-8 text-center md:p-10 lg:rounded-bl-3xl"
      >
        <div>
          <Illustration class="m-auto" />
          <h2 class="mt-4 text-2xl leading-none text-white">Results shown here</h2>
          <p class="mt-4 leading-normal text-slate-300">
            Complete the form and click “calculate repayments” to see what your monthly repayments
            would be.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
