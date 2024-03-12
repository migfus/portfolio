<template>
  <div v-for="row in $props.data" :key="row.id" class="mb-6">
    <div class="relative flex items-center gap-x-4">
      <img
        :src="row.user.avatar"
        :alt="row.user.name + ` avatar or profile picture`"
        class="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
      />
      <div class="text-sm leading-6">
        <p class="font-semibold text-primary dark:text-white">
          <a href="#" class="truncate text-ellipsis">
            <span class="absolute inset-0"></span>
            {{ row.user.name }}
          </a>
        </p>
        <p v-if="row.user.roles" class="text-zinc-500 dark:text-zinc-400">
          {{ row.user.roles[0].name || 'n/a' }} ● {{ moment(row.created_at).fromNow(true) }}
        </p>
      </div>
    </div>

    <p v-if="JSON.parse(row.content).type == 'embed'" class="mt-4 text-zinc-500 dark:text-zinc-400 line-clamp-3">
      {{ JSON.parse(row.content).content }}
      <div v-html="JSON.parse(row.content).attached" class="mt-2"></div>
    </p>
    <p v-else class="mt-4 text-zinc-500 dark:text-zinc-400 line-clamp-3">
      {{ JSON.parse(row.content).content }}
    </p>

    <hr class="mt-4 border-primary/10 dark:border-white/25">
  </div>

  <AppButton>
    <div class="text-center">
      More Posts...
    </div>
  </AppButton>
</template>

<script setup lang="ts">
import type { GTPost } from '@/globalTypes'
import moment from 'moment'

import AppButton from '@/Shared/AppButton.vue'

const $props = defineProps<{
  data: GTPost[]
}>()
</script>

<style>
iframe {
  aspect-ratio: 16 / 9;
  width: 100%;
  border-radius: 20px;
}
</style>
