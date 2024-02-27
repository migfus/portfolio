<template>
  <a
    :href="$props.href"
    target="_blank"
    class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-12 w-12"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
const $props = defineProps<{
  href: string
}>()
</script>
