<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppHeader from "@/shared/components/AppHeader.vue";
import AppFooter from "@/shared/components/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <main class="h-screen">
    <RouterView />
  </main>
  <AppFooter />
</template>
