<template>
  <Transition
      :enter-active-class="delay"
      enter-from-class="transform opacity-0 scale-0"
      enter-to-class="transform opacity-100 scale-100"

      leave-active-class="transition ease-in duration-700"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-0"
      mode="out-in"
      appear
  >
      <slot></slot>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const $props = defineProps<{
  delay: number
}>()

const delay = computed(() => {
  if($props.delay > 0) {
    return `transition delay-[${$props.delay}ms] ease-out duration-700`
  }
  return `transition ease-out duration-700`
})
</script>
