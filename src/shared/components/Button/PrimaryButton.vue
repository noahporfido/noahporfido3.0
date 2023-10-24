<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  icon?: string;
  tooltip?: string;
}
defineProps<Props>();
</script>

<template>
  <button
    class="flex items-center rounded-full border-2 border-black bg-black px-6 py-3 font-bold tracking-wide transition-all hover:bg-white hover:text-black"
    v-tooltip="tooltip"
  >
    <slot />
    <span class="material-icons-outlined">{{ icon }}</span>
  </button>
</template>
