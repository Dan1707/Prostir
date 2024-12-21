<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import SliderBlockBtn from "../ui/sliderBlockBtn.vue";
import Hammer from "hammerjs";

const sliderContent = [
  "Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt",
  "Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt",
  "Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt Lorem ipsum dolor sit amet consectetur. Et dui felis enim id quam fusce eu quis. Vitae pellentesque tortor proin morbi rhoncus nec mi eget tincidunt",
];

// slider animation
const sliderInterval = 7000;
const sliderChosenInterval = 15000;

const slidingItems = () => {
  const sliderContainer = document.querySelector(
    ".slider-container"
  ) as HTMLElement;

  if (sliderContainer) {
    sliderContainer.style.transform = `translateX(-${
      currentBlockId.value * 100
    }%)`;
  }
};

let sliderAnimation = setInterval(() => {
  currentBlockId.value =
    currentBlockId.value === sliderBlocksQuantity - 1
      ? 0
      : currentBlockId.value + 1;
  slidingItems();
}, sliderInterval);

const startSlider = () => {
  clearInterval(sliderAnimation);

  sliderAnimation = setInterval(() => {
    currentBlockId.value =
      currentBlockId.value === sliderBlocksQuantity - 1
        ? 0
        : currentBlockId.value + 1;
    slidingItems();
  }, sliderInterval);
};

// slider blocks
const sliderBlocksQuantity = sliderContent.length;
const currentBlockId = ref(0);

const blockClick = (id: number) => {
  currentBlockId.value = id;
  clearInterval(sliderAnimation);
  slidingItems();

  setTimeout(() => {
    startSlider();
  }, sliderChosenInterval);
};

// swipe logic
const cursorGrab = ref(false);

onMounted(() => {
  const swipe = new Hammer(
    document.querySelector(".slider-container") as HTMLElement
  );

  const swipeLeft = () => {
    if (currentBlockId.value !== sliderBlocksQuantity - 1) {
      currentBlockId.value++;
    } else {
      currentBlockId.value = 0;
    }
    clearInterval(sliderAnimation);
    slidingItems();

    setTimeout(() => {
      startSlider();
    }, sliderChosenInterval);
  };

  const swipeRight = () => {
    if (currentBlockId.value !== 0) {
      currentBlockId.value--;
    } else {
      currentBlockId.value = sliderBlocksQuantity - 1;
    }
    clearInterval(sliderAnimation);
    slidingItems();

    setTimeout(() => {
      startSlider();
    }, sliderChosenInterval);
  };

  swipe.on("swipeleft", swipeLeft);
  swipe.on("swiperight", swipeRight);
});
</script>

<template>
  <section
    class="bg-[url('/src/assets/img/testemonials-bg.png')] bg-no-repeat bg-cover bg-center"
  >
    <div class="block-container flex flex-col items-center">
      <div>
        <span>
          <h2 class="light">Відгуки</h2>
          <img src="/src/assets/img/title-line.svg" class="m-auto mt-[11px]" />
        </span>
        <div class="max-w-[739px] m-auto overflow-hidden">
          <div
            class="flex slider-container duration-[0.6s] ease-in-out cursor-grab"
          >
            <p
              v-for="(text, id) in sliderContent"
              :key="id"
              class="w-full flex-shrink-0 text-center text-lg mt-10 block-subtitle-light Tablets:text-[16px]"
              :class="{ 'cursor-grabbing': cursorGrab }"
              @mousedown="cursorGrab = true"
              @mouseup="cursorGrab = false"
            >
              {{ text }}
            </p>
          </div>
        </div>
        <div class="m-auto flex items-center justify-center mt-5 gap-4">
          <SliderBlockBtn
            v-for="(block, id) in sliderBlocksQuantity"
            :key="id"
            :class="{ 'bg-primary': id === currentBlockId }"
            @click="blockClick(id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
