<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppHeader from "@/shared/components/TheAppHeader.vue";
import AppFooter from "@/shared/components/TheAppFooter.vue";
</script>

<template>
  <div class="border-2 border-black">
    <AppHeader />
    <main class="mx-auto">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
