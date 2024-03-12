<template>
  <!-- <Nav /> -->

  <section class="">
    <div class="sm:p-4">


      <div class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">

        <!-- WELCOME -->
        <CardLayout class="lg:row-span-2 p-8" :delay="10000">
          <WelcomeCard />
        </CardLayout>

        <!-- FIND ME -->
        <CardLayout class="flex flex-col p-8" :delay="100">
          <FindMeCard />
        </CardLayout>

        <!-- LOOKING FOR? -->
        <CardLayout :delay="200" class="flex flex-col justify-between items-center overflow-hidden text-center lg:text-left pb-12 p-8">
          <LookingForCard />
        </CardLayout>

        <!-- DEVELOPMENT ENVIRONMENT -->
        <CardLayout :delay="300" class="lg:row-span-1 lg:row-start-2 lg:gap-0 lg:grid-cols-none lg:col-start-2 lg:col-span-2 p-8">
          <DevelopmentEnvironmentCard />
        </CardLayout>

        <!-- WEB PROJECTS -->
        <CardLayout :delay="400" class="lg:row-start-3 lg:col-span-3 p-8">
          <WebProjectsCard :data="$props.projects" />
        </CardLayout>

        <!-- POSTS -->
        <CardLayout :delay="500" class="lg:row-span-2 overflow-hidden duration-300 p-8">
          <PostsCard :data="$props.posts"/>
        </CardLayout>

        <!-- YT VIDEO -->
        <CardLayout :delay="600" class="flex flex-col h-full justify-center items-center overflow-hidden relative lg:col-span-2 lg:row-start-4" injectClass="p-0">
          <!-- <iframe  src="https://www.youtube.com/embed/L_gGKD8UNKA?autoplay=1&showinfo=0&controls=0" title="Youtube Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/WpU4kuhf5WQ?si=FM3tMM3XCml3tmX4&controls=0&autoplay=1&showinfo=0&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </CardLayout>

        <!-- DOWNLOAD PORTFOLIO-->
        <CardLayout :delay="700" class="lg:row-start-4 h-full flex flex-col justify-between p-8">
          <DownloadPortfolioCard />
        </CardLayout>

        <!-- TERMINAL -->
        <AppCommand class="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2"></AppCommand>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import type { GPost, GProject } from '@/globalTypes'

import CardLayout from '@/Shared/CardLayout.vue'
import AppCommand from '@/Shared/AppCommand.vue'

import DownloadPortfolioCard from './DownloadPortfolioCard.vue'
import PostsCard from './PostsCard.vue'
import WebProjectsCard from './WebProjectsCard.vue'
import DevelopmentEnvironmentCard from './DevelopmentEnvironmentCard.vue'
import LookingForCard from './LookingForCard.vue'
import FindMeCard from './FindMeCard.vue'
import WelcomeCard from './WelcomeCard.vue'

const $props = defineProps<{
  posts: GPost [],
  projects: GProject[]
}>()
</script>

