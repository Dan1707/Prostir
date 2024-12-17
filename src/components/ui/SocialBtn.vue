<script setup lang="ts">
defineProps({
  social: String,
  alt: String,
});
</script>

<template>
  <button
    class="w-12 h-12 p-[7px] flex justify-center items-center border-primary border-[3px] rounded-[50%]"
  >
    <img
      :src="`../../../src/assets/img/${social}.svg`"
      :alt="alt"
      class="w-full"
    />
  </button>
</template>
