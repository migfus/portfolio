<template>
  <Link :href="$props.href" :class="{'text-red-500': $props.active}">
    <slot />
  </Link>
</template>

<script setup lang="ts">
const $props = defineProps<{
  active: boolean
  href: string
}>()
</script>
