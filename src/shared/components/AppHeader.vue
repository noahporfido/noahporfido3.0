<script lang="ts" setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
<template>
  <div class="list-none bg-black">
    <div class="flex w-full items-center justify-between p-3 text-white">
      <h1 class="text-2xl font-semibold">N</h1>
      <span
        @click="isMenuOpen = !isMenuOpen"
        :class="{ 'rotate-90': isMenuOpen }"
        class="material-icons-outlined transition-all xl:hidden"
      >
        menu
      </span>
      <div class="hidden space-x-8 xl:flex">
        <li>about</li>
        <li>experience</li>
        <li>projects</li>
        <li>contact</li>
      </div>
    </div>
    <div
      :class="[isMenuOpen ? 'w-screen' : 'w-0']"
      class="absolute flex h-screen flex-col items-center overflow-hidden bg-black transition-all xl:hidden"
    >
      <li class="py-2 px-4">about</li>
      <li class="py-2 px-4">experience</li>
      <li class="py-2 px-4">projects</li>
      <li class="py-2 px-4">contact</li>
    </div>
  </div>
</template>
