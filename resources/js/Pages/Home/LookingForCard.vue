<template>
  <div class="w-full">
    <p class="text-xl text-primary dark:text-white lg:text-4xl tracking-tight">
      Looking for my <span class="text-yellow-600">Web Projects</span>?
    </p>
    <div class="w-full mt-8 mb-10">
      <AppButton>
        <a href="https://web.migfus.net" class="flex justify-center">
          <span class="text-yellow-600">webproject</span>.migfus.net
        </a>
      </AppButton>
    </div>

    <p class="text-xl text-primary dark:text-white lg:text-4xl tracking-tight">
      Or my <span class="text-green-600">music</span>?
    </p>
    <div class="w-full mt-8 lg:max-w-none">
        <a href="https://migset.migfus.net" >
          <AppButton class="">
            <span class="text-green-500 dark:text-green-600 inline-block">migset</span>
            <span>.migfus.net</span>
          </AppButton>
        </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/Shared/AppButton.vue'
</script>
