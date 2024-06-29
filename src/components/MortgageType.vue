<script setup>
import { ref } from 'vue'

defineProps({
  label: String,
})

const isSelected = ref(false)

const model = defineModel()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <label
    class="hover:border-lime focus-within:border-lime flex h-12 cursor-pointer items-center gap-4 rounded-[0.25rem] border border-slate-500 px-4 transition-colors"
    :class="$attrs.class, { 'bg-lime/15 border-lime': isSelected }"
  >
    <input
      v-model="model"
      v-bind="{ ...$attrs, class: null }"
      type="radio"
      class="focus:ring-lime text-lime size-5"
    />
    <span class="text-lg font-bold text-slate-900">
      {{ label }}
    </span>
  </label>
</template>
