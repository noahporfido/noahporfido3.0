<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppHeader from "@/shared/components/AppHeader.vue";
import AppFooter from "@/shared/components/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <main class="my-0 mx-auto max-w-7xl px-36">
    <RouterView />
  </main>
  <!-- <AppFooter /> -->
</template>
