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
    class="mt-10 rounded-sm border border-black px-6 py-3 tracking-wide transition-all hover:bg-gray-200"
    v-tooltip="tooltip"
    @click="callback"
  >
    <slot />
  </button>
</template>
