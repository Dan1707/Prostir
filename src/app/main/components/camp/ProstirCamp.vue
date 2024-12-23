<script setup lang="ts">
import ProstirBtn from "@/common/components/ui/ProstirBtn.vue";
</script>

<template>
  <section>
    <div class="block-container">
      <h2 class="dark">Літній табір</h2>
      <p class="block-subtitle-dark mt-2 max-w-[385px] m-auto">
        Кожного літа ми організовуємо табір для на дітей
      </p>
      <div
        class="flex items-center justify-between mt-[60px] Desktop:flex-col Desktop:items-center"
      >
        <div
          class="basis-[509px] relative camp-img hidden Desktop:block Desktop:basis-auto max-w-[450px] px-4"
        >
          <img
            src="./img/camp-img.png"
            alt="camp-img"
            class="w-full rounded-[0_125px_40px_40px] shadow-[15px_-15px_0_0_var(--primary)] Tablets:shadow-[15px_-15px_0_0_var(--primary)] Tablets:rounded-[0_80px_10px_10px]"
          />
        </div>
        <div
          class="basis-[535px] Desktop:text-center Desktop:basis-auto Desktop:mt-[50px]"
        >
          <h3 class="dark">Літній табір на базі освітнього центру</h3>
          <p class="block-secondary-text-light">
            Lorem ipsum dolor sit amet consectetur. Dictum vestibulum
            pellentesque tortor aenean suspendisse mauris diam. Aliquam morbi
            in.At quis fermentum vitae urna rhoncus mauris tempus donec
            ultricies. Blandit ultrices nulla amet mattis fringilla. Gravida
            nisl at vestibulum facilisis. Turpis viverra pretium volutpat tortor
            urna sed ornare faucibus. Tempor non suspendisse est facilisi
            bibendum purus dictum sapien
          </p>
          <ProstirBtn type="primary" :border="true" class="mt-[50px]">
            Детальніше
          </ProstirBtn>
        </div>
        <div
          class="basis-[509px] relative camp-img Desktop:hidden Desktop:basis-auto"
        >
          <img
            src="./img/camp-img.png"
            alt="camp-img"
            class="w-full rounded-[0_125px_40px_40px] shadow-[26px_-26px_0_0_var(--primary)]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.camp-img::before {
  position: absolute;
  content: "";
  width: 441px;
  height: 441px;
  background-image: url("./img/camp-img-bg.png");
  background-repeat: no-repeat;
  top: 50%;
  left: -190px;
  transform: translateY(-50%);
  z-index: 1 !important;
}

@media (max-width: 768px) {
  .camp-img::before {
    display: none;
  }
}

.camp-img img {
  position: relative;
  z-index: 2 !important;
}
</style>
