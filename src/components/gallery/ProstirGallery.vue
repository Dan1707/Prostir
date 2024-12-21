<script setup lang="ts">
import { ref } from "vue";
import ProstirGalleryItem from "./ProstirGalleryItem.vue";
import ProstirBtn from "../ui/ProstirBtn.vue";

const galleryItemArr = ref([
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
  {
    imgPath: "gallery-img",
  },
]);
</script>

<template>
  <section class="bg-[linear-gradient(48deg,_#53aa56_0%,_#a3ff85_100%)]">
    <div class="block-container">
      <h2 class="light">Галерея</h2>
      <p class="block-subtitle-light">Ось декілька фото з знашого закладу</p>
      <div
        class="mt-6 grid grid-cols-4 grid-rows-[repeat(2,auto)] gap-[60px_36px] Laptop:gap-[40px_16px] Tablet:grid-cols-2 Tablet:grid-rows-[repeat(4,auto)] Tablet:gap-[40px_16px] Tablets:flex Tablets:gap-[20px_!important] Tablets:overflow-x-auto"
      >
        <ProstirGalleryItem
          v-for="el in galleryItemArr"
          :key="el.imgPath"
          :img="el.imgPath"
        />
      </div>
      <div class="w-full flex justify-center mt-[60px]">
        <ProstirBtn type="primary">Показати більше</ProstirBtn>
      </div>
    </div>
  </section>
</template>
