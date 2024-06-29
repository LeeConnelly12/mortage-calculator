<script setup>
defineProps({
  prefix: String,
  suffix: String,
  id: String,
})

const model = defineModel()

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div class="group flex" :class="$attrs.class">
    <label
      v-if="prefix"
      :for="id"
      class="grid place-items-center rounded-bl-[0.25rem] rounded-tl-[0.25rem] border-b border-l border-t border-slate-500 bg-slate-100 px-4 text-lg font-bold group-focus-within:border-lime group-focus-within:bg-lime group-focus-within:text-slate-900"
    >
      {{ prefix }}
    </label>
    <input
      v-model="model"
      v-bind="{ ...$attrs, class: null }"
      type="text"
      :id="id"
      class="h-12 w-full rounded-[0.25rem] border-slate-500 px-4 font-bold text-slate-900 focus:border-lime focus:outline-none focus:ring-0"
      :class="{
        'rounded-bl-none rounded-tl-none border-l-0': prefix,
        'rounded-br-none rounded-tr-none border-r-0': suffix,
      }"
    />
    <label
      v-if="suffix"
      :for="id"
      class="grid place-items-center rounded-br-[0.25rem] rounded-tr-[0.25rem] border-b border-r border-t border-slate-500 bg-slate-100 px-4 text-lg font-bold group-focus-within:border-lime group-focus-within:bg-lime group-focus-within:text-slate-900"
    >
      {{ suffix }}
    </label>
  </div>
</template>
