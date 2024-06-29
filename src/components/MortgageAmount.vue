<script setup>
import TextInput from '@/components/TextInput.vue'
import { vMaska } from 'maska/vue'
</script>

<template>
  <TextInput v-maska="'###,###'" prefix="£" />
</template>
