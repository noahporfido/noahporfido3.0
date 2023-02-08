<script lang="ts" setup>
import { ref, onMounted } from "vue";

const progressBarWidth = ref(0);

onMounted(() => {
  setTimeout(() => {
    const interval = setInterval(() => {
      progressBarWidth.value += 0.5;
      if (progressBarWidth.value === 100) clearInterval(interval);
    }, 10);
  }, 500);
});
</script>

<template>
  <Transition>
    <div
      v-if="progressBarWidth < 100"
      class="fixed top-0 flex h-screen w-screen items-center justify-center bg-black"
    >
      <div class="text-3xl text-white">
        <h1>Portfolio</h1>
        <div class="h-1 w-32 overflow-hidden rounded-full bg-blue-900">
          <div
            class="h-full bg-blue-500"
            :style="{ width: `${progressBarWidth}%` }"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
