<template>
  <div class="relative flex items-center gap-x-4 mb-2">
    <img
      src="/images/icon.svg"
      alt="Migfus Logo"
      class="h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"
    />
    <div class="text-sm leading-6">
      <p class="font-semibold text-primary dark:text-white">
        <a href="#" class="truncate text-ellipsis">
          <span class="absolute inset-0"></span>
          Schwarzenegger R. Belonio
        </a>
      </p>
    </div>
  </div>

  <div class="text-zinc-500 dark:text-zinc-400 gap-2 flex flex-wrap" @click="submit">
    <AppBadge :icon="faCode">
      Web Developer
    </AppBadge>

    <AppBadge :icon="faMusic">
      BGM Composer
    </AppBadge>

    <AppBadge :icon="faGamepad">
      DJI Drone Operator
    </AppBadge>
  </div>
  <p class="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
    Hey, welcome to my portfolio!
  </p>
  <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
    I'm passionate about both technology and music. As a web developer, I bring websites and applications to life using Laravel, Vue, and Inertia.
    <br />
    <br />
    When I need a break from the digital world, I hit the road on my bike for some fresh air and inspiration, which I often channel into composing my own BGM music.
  </p>
</template>

<script setup>
import AppBadge from '@/Shared/AppBadge.vue'
import { faCode, faMusic, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { router } from '@inertiajs/vue3'
import { onMounted } from 'vue'


function submit() {
  router.post('/post', { test: 'test' })
}

onMounted(() => {
  Echo.channel('test.channel')
    .listen('TestUpdate', (e) => {
      alert('Received submit')
    });
});
</script>
