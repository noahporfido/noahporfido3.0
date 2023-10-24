<script lang="ts" setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
<template>
  <div class="list-none border-2 border-black p-4 font-bold">
    <div class="flex w-full items-center justify-between">
      <h1 class="text-2xl font-semibold">N</h1>
      <span
        @click="isMenuOpen = !isMenuOpen"
        :class="{ 'rotate-90': isMenuOpen }"
        class="material-icons-outlined z-20 transition-all xl:hidden"
      >
        menu
      </span>
      <div class="hidden space-x-6 xl:flex">
        <li class="cursor-pointer px-1 py-2 underline">about</li>
        <li class="cursor-pointer px-1 py-2">experience</li>
        <li class="cursor-pointer px-1 py-2">projects</li>
        <li class="cursor-pointer px-1 py-2">contact</li>
      </div>
    </div>
    <div
      :class="[isMenuOpen ? 'w-screen' : 'w-0']"
      class="absolute left-0 top-0 z-10 h-screen overflow-hidden bg-white transition-all xl:hidden"
    >
      <div class="flex h-full w-full items-center justify-center">
        <ul class="w-fit space-y-8 text-6xl">
          <li class="py-2 px-4">about</li>
          <li class="py-2 px-4">experience</li>
          <li class="py-2 px-4">projects</li>
          <li class="py-2 px-4">contact</li>
        </ul>
      </div>
    </div>
  </div>
</template>
