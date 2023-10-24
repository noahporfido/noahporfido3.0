<template>
  <div
    class="border-2 border-black"
    :class="[colorClass, padding ?? 'p-4', fullHeight ? 'h-screen' : 'h-auto']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  colorClass: string;
  padding?: string;
  fullHeight?: boolean;
}

defineProps<Props>();
</script>
