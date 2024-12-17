<script setup lang="ts">
import ProstirAdvantagesItem from "./ProstirAdvantagesItem.vue";

const advantArr = [
  {
    iconPath: "advant_1.svg",
    text: "Розвиток креативних навичок",
  },
  {
    iconPath: "advant_2.svg",
    text: "Стимулююче навчання",
  },
  {
    iconPath: "advant_3.svg",
    text: "Професійні педагоги",
  },
  {
    iconPath: "advant_4.svg",
    text: "Ранні вікові групи",
  },
];
</script>

<template>
  <section>
    <div class="block-container">
      <h2 class="dark">Наші переваги</h2>
      <p class="block-subtitle-dark">Чому саме наш заклад?</p>
      <div
        class="mt-[60px] flex items-center justify-between max-w-[993px] m-auto"
      >
        <ProstirAdvantagesItem v-for="el in advantArr" :el="el" />
      </div>
    </div>
  </section>
</template>
