<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup lang="ts">
// import AppLayoutDefault from './AppLayoutDefault'
import { shallowRef, watch } from "vue";
import TopHeaderLayout from "./TopHeaderLayout.vue";
import FullScreenLayout from "./FullScreenLayout.vue";
import { useRoute } from "vue-router";

const layout = shallowRef(TopHeaderLayout);
const route = useRoute();

watch(
  () => route.meta,
  async (meta) => {
    if (meta.layout == "full-screen") {
      layout.value = FullScreenLayout;
    }
  },
  { immediate: true }
);
</script>
