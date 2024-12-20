<script setup lang="ts">
import ProstirBtn from "../ui/ProstirBtn.vue";

interface sliderItem {
  title: string;
  imgPath: string;
  text: string;
}

defineProps<{
  el: sliderItem;
}>();
</script>

<template>
  <Transition name="fade">
    <div>
      <article
        class="shadow-[0_8px_0_0_rgba(68,255,52,0.5)] rounded-[10px] overflow-hidden flex flex-col items-center max-w-[297px] Desktop:max-w-[270px]"
        :key="el.title"
      >
        <div class="w-full">
          <img
            :src="`../../../src/assets/img/${el.imgPath}.png`"
            alt="services_slider-item"
            class="w-full"
          />
        </div>
        <div
          class="bg-primary px-[37px] py-[17px] Desktop:px-[20px] Desktop:py-[15px] w-full"
        >
          <h4 class="light text-center">{{ el.title }}</h4>
          <p
            class="font-medium text-xs text-center text-light mt-[4px] font-subTitle"
          >
            {{ el.text }}
          </p>
          <div class="w-full text-center">
            <ProstirBtn
              type="primary"
              class="mt-[20px] w-full Desktop:w-fit Desktop:mt-[15px] Desktop:m-auto"
            >
              Детальніше
            </ProstirBtn>
          </div>
        </div>
      </article>
    </div>
  </Transition>
</template>
