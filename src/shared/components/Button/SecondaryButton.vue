<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  callback?: () => void;
  icon?: string;
  tooltip?: string;
}
defineProps<Props>();
</script>

<template>
  <button
    class="flex items-center rounded-full border-2 border-black px-6 py-3 font-bold tracking-wide transition-all hover:bg-black hover:text-white"
    v-tooltip="tooltip"
    @click="callback"
  >
    <slot />
    <span class="material-icons-outlined">arrow_right</span>
  </button>
</template>
