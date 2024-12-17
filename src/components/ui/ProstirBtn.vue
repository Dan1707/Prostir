<script setup lang="ts">
defineProps({
  type: String,
});
</script>

<template>
  <button
    class="font-medium text-xl leading-[127%] tracking-[0.02em] font-subTitle px-[35px] py-2.5 rounded-[10px] border-2 duration-300 border-light hover:shadow-none hover:scale-125"
    :class="{
      'bg-light text-primary shadow-[0_6px_0_0_var(--shadow)]':
        type === 'primary',
      'bg-transparent text-light shadow-[0_6px_0_0_rgba(255,255,255,0.5)]':
        type === 'normal',
    }"
  >
    <slot></slot>
  </button>
</template>
