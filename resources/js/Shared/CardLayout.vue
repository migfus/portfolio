<template>
  <BasicTransition :delay="$props.delay">
    <div class="ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <slot></slot>

    </div>
  </BasicTransition>

</template>

<script setup lang="ts">
import BasicTransition from './Transitions/BasicTransition.vue'

const $props = defineProps<{
  delay: number
}>()
</script>
