<template>
  <div
    class="flex w-full flex-col items-center justify-center"
    :class="[
      colorClass,
      padding ?? 'p-4',
      fullHeight ? 'min-h-screen' : 'h-auto'
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  colorClass?: string;
  padding?: string;
  fullHeight?: boolean;
}

defineProps<Props>();
</script>
