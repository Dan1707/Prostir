<script setup lang="ts">
import ProstirBtn from "../ui/ProstirBtn.vue";
</script>

<template>
  <section class="w-full bg-[linear-gradient(92deg,_#5dff4f_0%,_#53aa56_100%)]">
    <div
      class="block-container p-[60px_10px_0_10px_!important] flex items-center justify-between Tablet:flex-col Tablet:gap-[30px] Tablet:items-center"
    >
      <div
        class="Tablet:flex Tablet:flex-col Tablet:items-center Tablet:gap-[30px] Tablet:text-center"
      >
        <h1
          class="font-bold text-5xl leading-[112%] Tablets:text-4xl tracking-[0.01em] text-light font-title"
        >
          Запрошуємо до “Простору можливостей”!
        </h1>
        <p
          class="font-normal text-[23px] Tablets:text-lg leading-[127%] tracking-[0.02em] text-secondary-primary font-subTitle max-w-[499px] mt-[10px]"
        >
          Місце, де ваша дитина зможе повноцінно розвиватися та вдосконалювати
          свої навички.
        </p>
        <div
          class="max-w-[350px] flex items-center justify-between mt-[57px] Tablet:w-[320px] Tablets:w-[230px_!important] Tablet:flex-col Tablet:gap-[20px] Tablets:mt-[20px]"
        >
          <ProstirBtn type="primary" class="Tablet:w-full">Про нас</ProstirBtn>
          <ProstirBtn type="normal" class="Tablet:w-full">Контакти</ProstirBtn>
        </div>
      </div>
      <div class="max-w-[530px] relative bottom-0 hero-img">
        <img
          src="../../../src/assets/img/hero-img.png"
          class="w-full relative left-auto"
          alt="hero-img"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero-img::before {
  position: absolute;
  content: "";
  width: 463px;
  height: 365px;
  background-image: url("../../../src/assets/img/hero-img-bg.png");
  background-repeat: no-repeat;
  bottom: -35px;
  left: -77px;
}
@media (max-width: 576px) {
  .hero-img::before {
    display: none;
  }
}
</style>
