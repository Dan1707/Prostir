<script setup lang="ts">
import ProstirServicesItem from "./ProstirServicesItem.vue";

import { useCycleList } from "@vueuse/core";

const sliderItemArr = [
  [
    {
      title: "Мозочкова стимуляція",
      imgPath: "services_1",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
    {
      title: "Підготовка до школи",
      imgPath: "services_2",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
    {
      title: "Групові заняття",
      imgPath: "services_3",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
  ],
  [
    {
      title: "Мозочкова стимуляція",
      imgPath: "services_1",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
    {
      title: "Підготовка до школи",
      imgPath: "services_2",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
    {
      title: "Групові заняття",
      imgPath: "services_3",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
  ],
  [
    {
      title: "Мозочкова стимуляція",
      imgPath: "services_1",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
    {
      title: "Підготовка до школи",
      imgPath: "services_2",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
    {
      title: "Групові заняття",
      imgPath: "services_3",
      text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
    },
  ],
];

const { state, next, prev } = useCycleList(sliderItemArr);
</script>

<template>
  <section>
    <div class="block-container">
      <h2 class="dark">Наші послуги</h2>
      <p class="block-subtitle-dark mt-[9px]">Що ми пропонуємо?</p>
      <div class="flex items-center justify-between w-full">
        <button @click="prev()">
          <img
            src="../../../src/assets/img/services-slider-arrow.svg"
            alt="services-slider-arrow"
            class="-scale-x-100 scale-y-100"
          />
        </button>
        <div class="basis-[991px] flex items-center justify-between">
          <ProstirServicesItem
            v-for="el in state"
            :key="el.title"
            :el="el"
            class="slider-item"
          />
        </div>
        <button @click="next()">
          <img
            src="../../../src/assets/img/services-slider-arrow.svg"
            alt="services-slider-arrow"
          />
        </button>
      </div>
      <div
        class="max-w-[150px] m-auto py-3 px-9 rounded-[10px] bg-[#7AFF6F] shadow-[0_6px_0_0_#b2ffab] flex items-center justify-between mt-[20px] gap-[7px]"
      >
        <span
          class="w-[20px] h-[20px] rounded-[50%] border-[3px] border-light bg-primary"
        ></span>
        <span
          class="bg-light w-[20px] h-[20px] rounded-[50%] border-[3px] border-light"
        ></span>
        <span
          class="bg-light w-[20px] h-[20px] rounded-[50%] border-[3px] border-light"
        ></span>
      </div>
    </div>
  </section>
</template>
