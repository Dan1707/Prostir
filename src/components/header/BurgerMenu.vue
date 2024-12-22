<script setup lang="ts">
import { ref } from "vue";

const activeBurger = ref(false);

defineEmits(["burger"]);
</script>

<template>
  <button
    class="Tabletm:flex flex-col items-center justify-center gap-2 w-10 duration-[0.6s] ease-in-out cursor-pointer"
    @click="
      activeBurger = !activeBurger;
      $emit('burger', activeBurger);
    "
  >
    <span
      class="bg-black rounded-lg w-full h-1 duration-[0.6s] ease-in-out cursor-pointer"
      :class="{ 'translate-y-[12px] rotate-45': activeBurger }"
    ></span>
    <span
      class="bg-black rounded-lg w-full h-1 duration-[0.6s] ease-in-out cursor-pointer"
      :class="{ 'opacity-0': activeBurger }"
    >
    </span>
    <span
      class="bg-black rounded-lg w-full h-1 duration-[0.6s] ease-in-out cursor-pointer"
      :class="{ 'translate-y-[-12px] rotate-[-45deg]': activeBurger }"
    ></span>
  </button>
</template>
