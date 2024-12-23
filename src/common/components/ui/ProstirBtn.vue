<script setup lang="ts">
defineProps({
  type: String,
  border: Boolean,
});
</script>

<template>
  <button
    class="font-medium text-xl leading-[127%] tracking-[0.02em] font-subTitle px-[35px] py-2.5 rounded-[10px] border-2 duration-300 border-light"
    :class="{
      'bg-light text-primary shadow-[0_6px_0_0_var(--shadow)]':
        type === 'primary',
      'bg-transparent text-light shadow-[0_6px_0_0_rgba(255,255,255,0.5)]':
        type === 'normal',
      'border-primary': border === true && type === 'primary',
      'border-black': border === true && type === 'normal',
    }"
  >
    <slot></slot>
  </button>
</template>
<style scoped>
@media (hover: hover) {
  button:hover {
    box-shadow: none;
    transform: scale(1.25);
  }
}
</style>
