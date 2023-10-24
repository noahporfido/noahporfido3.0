<template>
  <div class="border-2 border-black p-4" :class="colorClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  colorClass: string;
}

defineProps<Props>();
</script>
