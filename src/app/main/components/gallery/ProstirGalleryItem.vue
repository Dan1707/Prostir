<script setup lang="ts">
defineProps({
  img: String,
});
</script>

<template>
  <div
    class="gallery__item w-full h-[343px] self-end rounded-xl overflow-hidden cursor-pointer max-w-[277px] m-auto Tablets:shrink-0"
  >
    <img
      :src="`/src/app/main/components/gallery/img/${img}.png`"
      class="min-w-full min-h-full object-cover"
      :alt="img"
    />
  </div>
</template>
<style scoped>
@media (hover: hover) {
  .gallery__item {
    transition: 0.6s ease-in-out !important;
  }
  .gallery__item:hover {
    box-shadow: 0 0 0 16px #c9ffc4;
  }
}
</style>
