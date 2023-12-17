<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppHeader from "@/shared/components/TheAppHeader.vue";
import AppFooter from "@/shared/components/TheAppFooter.vue";
import imageUrl from "@/assets/images/bg-home.jpg";
</script>

<template>
  <main>
    <AppHeader />
    <div class="flex min-h-screen items-end justify-center">
      <div
        class="absolute inset-0 z-0 min-h-screen bg-cover bg-fixed bg-center opacity-30"
        :style="{
          backgroundImage: `url('${imageUrl}')`
        }"
      ></div>
      <button class="z-10 mb-20 h-40 w-40 cursor-pointer rounded-full border">
        get to know me
      </button>
    </div>

    <div class="min-h-screen bg-white text-center text-black">
      <RouterView />
    </div>
    <AppFooter />
  </main>
</template>
