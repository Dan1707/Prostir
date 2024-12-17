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
  <article
    class="shadow-[0_8px_0_0_rgba(68,255,52,0.5)] rounded-[10px] overflow-hidden flex flex-col items-center max-w-[297px]"
  >
    <div class="w-full">
      <img
        :src="`../../../src/assets/img/${el.imgPath}.png`"
        alt="services_slider-item"
        class="w-full"
      />
    </div>
    <div class="bg-primary px-[37px] py-[17px]">
      <h4 class="light text-center">{{ el.title }}</h4>
      <p
        class="font-medium text-xs text-center text-light mt-[4px] font-subTitle"
      >
        {{ el.text }}
      </p>
      <ProstirBtn type="primary" class="mt-[20px] w-full">
        Детальніше
      </ProstirBtn>
    </div>
  </article>
</template>
