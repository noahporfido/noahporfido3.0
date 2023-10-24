<script setup lang="ts">
import BoxContainer from "@/shared/components/layout/BoxContainer.vue";
const imgArray = [
  "https://logo.clearbit.com/vuejs.org",
  "https://logo.clearbit.com/https://tailwindcss.com/"
];
</script>

<template>
  <BoxContainer full-height color-class="bg-gray-200">
    <section>
      <p class="text-lg">Hi, my name is</p>
      <h1 class="mt-2 text-2xl font-bold tracking-wide lg:mt-6 lg:text-6xl">
        Noah Porfido
      </h1>
      <h1
        class="text-2xl font-bold tracking-wide opacity-60 lg:mt-2 lg:text-6xl"
      >
        I build stuff for the web
      </h1>
      <p class="mt-4">
        I work at
        <a
          class="font-bold text-gray-800 hover:text-gray-600"
          target="_blank"
          href="https://menon.group"
          >Menon Skills
        </a>
        to help people to be the version of themselves
      </p>
    </section>
  </BoxContainer>
  <BoxContainer padding="py-4" color-class="bg-white">
    <Vue3Marquee clone>
      <img v-for="img in imgArray" :key="img" :src="img" />
    </Vue3Marquee>
  </BoxContainer>
  <div class="grid grid-cols-2">
    <BoxContainer color-class="bg-gray-200"></BoxContainer>
    <BoxContainer color-class="bg-gray-200"></BoxContainer>
  </div>
</template>
