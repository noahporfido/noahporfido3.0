<script setup lang="ts">
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<template>
  <div class="bg-black text-white">
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>
