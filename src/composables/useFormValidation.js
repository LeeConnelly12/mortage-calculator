import { ref } from 'vue'

export function useFormValidation() {
  const errors = ref({})

  const validateRequired = (field, value) => {
    if (!value || value.trim() === '') {
      errors.value[field] = 'This field is required'
      return false
    }

    errors.value[field] = ''

    return true
  }

  const validateForm = (fields) => {
    let isValid = true

    for (const [field, value] of Object.entries(fields)) {
      if (!validateRequired(field, value)) {
        isValid = false
      }
    }

    return isValid
  }

  return {
    validateForm,
    errors,
  }
}
