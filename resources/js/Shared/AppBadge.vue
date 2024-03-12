<template>
  <div class="bg-zinc-50 rounded-xl shadow-md p-1 px-3 text-nowrap text-primary dark:text-white group-hover text-primary:dark:text-white/50 dark:ring-1 dark:ring-gray-800 dark:bg-[#262626]">
    <FontAwesomeIcon :icon="$props.icon" class="h-4 inline-block flex-row justify-center mr-1 text-zinc-500 dark:text-zinc-400"/>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const $props = defineProps<{
  icon: IconDefinition
}>()
</script>
