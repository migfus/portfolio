<template>

  <p class="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl mb-6">
    Web Projects
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <a v-for="row in $props.data" :key="row.name" :href="row.project_url" class="grid justify-center">
      <AppProject class="relative opacity-75">
        <img :src="row.image" class="h-24 w-24" />
        <span
          :class="[
            'inline-flex items-center rounded-xl px-2 py-1 text-xs font-sm absolute top-2 left-2',
            `text-tertiary dark:text-white dark:bg-secondary bg-white`
          ]"
        >
          {{ row.project_type.name }}
        </span>
        <span
          :class="[
            'inline-flex items-center rounded-xl px-2 py-1 text-xs font-sm absolute top-2 right-2',
            `text-tertiary dark:text-white dark:bg-secondary bg-white`
          ]"
        >
          {{ row.year }}
        </span>
      </AppProject>
      <div class="flex justify-center">
        <p class="text-gray-600 mt-2 dark:text-gray-300">{{ row.name }}</p>
      </div>
    </a>
  </div>

</template>

<script setup lang="ts">
import type { GProject } from '@/globalTypes'
import AppProject from '@/Shared/AppProject.vue'

const $props = defineProps<{
  data: GProject[]
}>()
</script>

<style scoped>

</style>
