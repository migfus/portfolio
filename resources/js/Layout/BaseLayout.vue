<template>
  <head>
    <BaseHead />
  </head>

  <body class="dark:bg-primary bg-zinc-200 ">
    <slot />
  </body>
</template>

<script setup lang="ts">
import BaseHead from './BaseHead.vue'
</script>
