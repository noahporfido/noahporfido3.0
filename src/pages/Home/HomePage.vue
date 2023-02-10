<script setup lang="ts">
import SecondaryButton from "@/shared/components/Button/SecondaryButton.vue";
</script>

<template>
  <section class="h-[calc(100vh-64px)] justify-center pt-20">
    <p class="text-lg">Hi, my name is</p>
    <h1 class="mt-6 text-6xl font-bold tracking-wide">Noah Porfido</h1>
    <h1 class="mt-2 text-6xl font-bold tracking-wide opacity-80">
      I build stuff for the web
    </h1>
    <p class="mt-4">
      I work at
      <a
        class="font-semibold text-gray-500 hover:text-gray-600"
        target="_blank"
        href="https://menon.group"
        >Menon Skills
      </a>
      to help people to be the version of themselves
    </p>
    <SecondaryButton :callback="() => false">get to know me!</SecondaryButton>
  </section>
</template>
