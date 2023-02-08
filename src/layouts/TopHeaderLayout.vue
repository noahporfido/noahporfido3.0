<script lang="ts" setup>
import { RouterView } from "vue-router";
import AppHeader from "@/shared/components/AppHeader.vue";
import AppFooter from "@/shared/components/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
