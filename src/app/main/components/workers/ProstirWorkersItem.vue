<script setup lang="ts">
interface worker {
  name: string;
  position: string;
  img: string;
}

defineProps<{
  worker: worker;
}>();
</script>
<template>
  <div
    class="shadow-[0_10px_0_0_#7aff6f] w-full rounded-[10px] p-8 flex flex-col items-center justify-end gap-2 border border-primary relative"
  >
    <div class="worker-img-container">
      <img
        :src="`/src/app/main/components/workers/img/${worker.img}.png`"
        :alt="worker.name"
        class="worker-img"
      />
    </div>
    <h3 class="dark">{{ worker.name }}</h3>
    <p class="block-secondary-text-light">{{ worker.position }}</p>
  </div>
</template>
<style scoped>
.worker-img-container {
  width: 200px;
  height: 250px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  border-radius: 50% 70% 70% 50% / 60% 50% 70% 80%;
  margin-top: -150px;
}
.worker-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
