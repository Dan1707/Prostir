<script setup lang="ts">
import { ref } from "vue";
import ProstirWorkersItem from "./ProstirWorkersItem.vue";

const workersArr = ref([
  {
    name: "Іванов Іван",
    position: "Педагог-логопед",
    img: "gallery-img",
  },
  {
    name: "Іванов Іван",
    position: "Педагог-логопед",
    img: "gallery-img",
  },
  {
    name: "Іванов Іван",
    position: "Педагог-логопед",
    img: "gallery-img",
  },
  {
    name: "Іванов Іван",
    position: "Педагог-логопед",
    img: "gallery-img",
  },
]);
</script>

<template>
  <section>
    <div class="block-container">
      <h2 class="dark">Нaші працівники</h2>
      <p class="block-subtitle-dark">Кілька слів про наш колектив</p>
      <div
        class="mt-[200px] grid grid-cols-2 grid-rows-[repeat(2,_250px)] gap-[190px_50px] Tabletm:gap-[190px_20px] Tablets:grid-cols-1 Tablets:grid-rows-[repeat(4,_250px)] Tablets:gap-[20px_20px]"
      >
        <ProstirWorkersItem
          v-for="worker in workersArr"
          :key="worker.name"
          :worker="worker"
        />
      </div>
    </div>
  </section>
</template>
