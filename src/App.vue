<script setup lang="ts">
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import LoadingOverlay from "@/shared/components/LoadingOverlay.vue";
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
  <Transition>
    <LoadingOverlay />
  </Transition>
</template>
