<template>
  <VueCommand :commands="commands" v-model="options" class="sm:rounded-3xl h-full" >
    <template #title>
      Terminal 😎
    </template>
    <template #prompt>
      {{  cd  }}
    </template>
  </VueCommand>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueCommand from "vue-command"
import * as VueCom from "vue-command"
import "vue-command/dist/vue-command.css"

const commands = ref({
  "help": () => VueCom.createStdout(
    `Commands available
    -------------------------------
    v\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- Portfolio Version
    cd\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0- Change Directory [Directory:String]
    hello\xa0\xa0\xa0\xa0\xa0\xa0- ??
    easter-egg - 💀 Don't do it
    clear-all\xa0\xa0- Just Clear
    -------------------------------
    `
  ),
  'v': () => VueCom.createStdout("version 0.0.1 - Buggy Edition"),
  'cd': (value: String[]) => {
    if(value[1]) {
      if(cd.value[1].includes('https://migfus.net/')) {
        cd.value = value[1] + '$\xa0'
        return VueCom.createStdout('')
      }
      return VueCom.createStdout(`Invalid Parameter outside of "https://migfus.net/"`)
    }
    return VueCom.createStdout("Invalid parameter cd [Directory:String]")
  },
  'hello': () => VueCom.createStdout('Hello World'),
  'easter-egg': () => {
    setTimeout(() => {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }, 1000)
    return VueCom.createStdout('Huehuehuehue 💀')
  },
  'clear-all': () => {
    document.getElementsByTagName('body')[0].innerHTML = 'All Cleared 😀';
  },
})

const options = ref({
  invert: true
})

const cd = ref('https://migfus.net/$\xa0');

// VueCom.invert = true

onMounted(() => {
  let commandHeader = document.getElementsByClassName("vue-command__bar");
  let commandHistory = document.getElementsByClassName("vue-command__history");
  let commandQuery = document.getElementsByClassName("vue-command__query__input");
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    for(let i = 0; i < commandHeader.length; i++) {
      commandHeader[i].className += " dark-command-h"
      commandHistory[i].className += " dark-command-body"
      commandQuery[i].className += " dark-query"
    }
  }
  else {
    for(let i = 0; i < commandHeader.length; i++) {
      commandHeader[i].className += " white-command-h"
      commandHistory[i].className += " white-command-body"
      commandQuery[i].className += " white-query"
    }
  }
})

</script>

<style>
.dark-command-h {
  background: #252525 !important;
  padding-top: 20px !important;
  color: #FAFAFA !important;
}
.white-command-h {
  background: #FAFAFA !important;
  padding-top: 20px !important;
  color: #252525 !important;
}
.dark-command-body {
  background: #252525 !important;
  padding-top: 20px !important;
  color: #FAFAFA !important;
}
.white-command-body {
  background: #ECECEC !important;
  padding-top: 20px !important;
  color: #252525 !important;
}

.dark-query {
  color: #FAFAFA !important;
}
.white-query {
  color: #252525 !important;
}

</style>

<style>
.easter {
  background: red !important;
  background-color: red !important;
}
</style>
