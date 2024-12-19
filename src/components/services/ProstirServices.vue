<script setup lang="ts">
import { computed, ref } from "vue";
import ProstirServicesItem from "./ProstirServicesItem.vue";
import SliderBlockBtn from "../ui/sliderBlockBtn.vue";

const sliderItemArr = ref([
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

  {
    title: "Мозочкова стимуляція2",
    imgPath: "services_1",
    text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
  },
  {
    title: "Підготовка до школи2",
    imgPath: "services_2",
    text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
  },
  {
    title: "Групові заняття2",
    imgPath: "services_3",
    text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
  },

  {
    title: "Мозочкова стимуляція3",
    imgPath: "services_1",
    text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
  },
  {
    title: "Підготовка до школи3",
    imgPath: "services_2",
    text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
  },
  {
    title: "Групові заняття3",
    imgPath: "services_3",
    text: "Lorem ipsum dolor sit amet consectetur. Eget orci ut sit tristique ac nisl vitae. Diam sapien dolor nunc viverra ultricies dui nulla mauris.",
  },
]);

// slider logic
const itemsToShow = ref(3);

const start = ref(0);
const end = ref(itemsToShow.value);

const slicedItemArr = ref(sliderItemArr.value.slice(start.value, end.value));

const sliderBlocks = ref(sliderItemArr.value.length / itemsToShow.value);
const currentBlockId = ref(end.value / itemsToShow.value);

// slicing basic array
const getSlicedArr = () => {
  currentBlockId.value = end.value / itemsToShow.value;
  slicedItemArr.value = sliderItemArr.value.slice(start.value, end.value);
};

// slider button functions
const prev = () => {
  if (start.value !== 0 && end.value !== itemsToShow.value) {
    start.value = start.value - itemsToShow.value;
    end.value = end.value - itemsToShow.value;
  } else {
    start.value = sliderItemArr.value.length - itemsToShow.value;
    end.value = sliderItemArr.value.length;
  }
  getSlicedArr();
};

const next = () => {
  const maxStart = sliderItemArr.value.length - itemsToShow.value;
  const maxEnd = sliderItemArr.value.length;

  if (start.value !== maxStart && end.value !== maxEnd) {
    start.value = start.value + itemsToShow.value;
    end.value = end.value + itemsToShow.value;
  } else {
    start.value = 0;
    end.value = itemsToShow.value;
  }
  getSlicedArr();
};

const blockBtnClick = (id: number) => {
  start.value = id * itemsToShow.value;
  end.value = (id + 1) * itemsToShow.value;

  getSlicedArr();
  console.log(id, start.value, end.value);
};
</script>

<template>
  <section>
    <div class="block-container">
      <h2 class="dark">Наші послуги</h2>
      <p class="block-subtitle-dark mt-[9px]">Що ми пропонуємо?</p>
      <div class="flex items-center justify-between w-full">
        <button @click="prev">
          <img
            src="../../../src/assets/img/services-slider-arrow.svg"
            alt="services-slider-arrow"
            class="-scale-x-100 scale-y-100"
          />
        </button>
        <div class="basis-[991px] flex items-center justify-between mt-[60px]">
          <ProstirServicesItem
            v-for="el in slicedItemArr"
            :key="el.title"
            :el="el"
            class="slider-item"
          />
        </div>
        <button @click="next">
          <img
            src="../../../src/assets/img/services-slider-arrow.svg"
            alt="services-slider-arrow"
          />
        </button>
      </div>
      <div
        class="max-w-[150px] m-auto py-3 px-9 rounded-[10px] bg-[#7AFF6F] shadow-[0_6px_0_0_#b2ffab] flex items-center justify-between mt-[20px] gap-[7px]"
      >
        <SliderBlockBtn
          class=""
          v-for="(block, id) in sliderBlocks"
          :key="id"
          :class="{ 'bg-primary': id === currentBlockId - 1 }"
          @click="blockBtnClick(id)"
        />
        <button></button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.slider-item {
  transition: all 0.6s ease-in-out;
  animation: fade 0.6s ease-in-out;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
