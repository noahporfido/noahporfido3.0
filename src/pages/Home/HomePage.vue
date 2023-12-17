<script setup lang="ts">
import BoxContainer from "@/shared/components/layout/BoxContainer.vue";
import { Vue3Marquee } from "vue3-marquee";
import vueLogoUrl from "@/assets/images/Vue.png";
import tailwindLogoUrl from "@/assets/images/Tailwind.png";

const imgArray = [tailwindLogoUrl, vueLogoUrl];
</script>

<template>
  <BoxContainer full-height>
    <div class="space-y-2">
      <h1 class="text-4xl font-bold lg:text-6xl">Noah Porfido</h1>
      <p class="text-2xl lg:text-4xl">Web Developer</p>
      <p>
        I currently work at
        <a class="cursor-pointer rounded-lg bg-gray-100 p-1 hover:bg-gray-200"
          >Menon Skills AG</a
        >
      </p>
    </div>
  </BoxContainer>
  <BoxContainer>
    <Vue3Marquee clone>
      <img class="h-20" v-for="img in imgArray" :key="img" :src="img" />
    </Vue3Marquee>
  </BoxContainer>
</template>
