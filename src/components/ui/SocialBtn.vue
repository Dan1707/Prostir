<script setup lang="ts">
defineProps({
  social: String,
  alt: String,
  type: String,
});
</script>

<template>
  <button
    class="w-14 h-14 p-[7px] flex justify-center bg-light items-center border-[3px] rounded-[50%]"
    :class="type === 'light' ? 'border-white' : 'border-primary'"
  >
    <img
      :src="`../../../src/assets/img/${social}.svg`"
      :alt="alt"
      class="w-full"
    />
  </button>
</template>
