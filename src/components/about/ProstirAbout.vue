<script setup lang="ts">
import ProstirBtn from "../ui/ProstirBtn.vue";
</script>

<template>
  <section
    class="w-full bg-[linear-gradient(220deg,_rgba(95,215,84,1)_31%,_rgba(83,170,86,1)_100%)]"
  >
    <div class="block-container">
      <h2 class="light">Про нас</h2>
      <p class="block-subtitle-light">детальніше про наш заклад</p>
      <div
        class="flex items-center justify-between mt-[63px] Desktop:mt-0 Desktop:flex-col"
      >
        <div
          class="basis-[598px] relative about-img Desktop:basis-auto Desktop:w-[598px] Desktop:mt-[90px] Tablets:mt-[50px] Tabletm:w-[fit-content_!important]"
        >
          <img
            src="../../../src/assets/img/about-img.png"
            alt="about-img"
            class="rounded-[150px_0_40px_40px] shadow-[-25px_-25px_0_0_var(--primary)] Tablets:shadow-[-15px_-15px_0_0_var(--primary)]"
          />
        </div>
        <div class="max-w-[598px] Desktop:text-center Desktop:mt-[50px]">
          <h3 class="light">Освітній центр нейрокорекції та розвитку</h3>
          <p class="block-secondary-text-primary mt-[38px]">
            Lorem ipsum dolor sit amet consectetur. Sem sapien sed quis
            pellentesque enim viverra. Vel vitae ullamcorper a tincidunt quam
            velit. Augue elit fringilla mauris ornare in turpis neque. Leo neque
            id adipiscing fringilla nibh. Lorem ipsum dolor sit amet
            consectetur. Sem sapien sed qu velit. Augue elit fringilla mauris
            ornare in turpis neque. Leo neque id adipiscing fringilla nibh.
          </p>
          <div
            class="flex items-center max-w-[373px] justify-between gap-3 mt-[83px] Desktop:m-auto Desktop:mt-[83px] Phonel:flex-col Phonel:w-full"
          >
            <ProstirBtn type="primary" class="Phonel:w-full"
              >Про нас</ProstirBtn
            >
            <ProstirBtn type="normal" class="Phonel:w-full">Послуги</ProstirBtn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about-img::before {
  position: absolute;
  content: "";
  width: 460px;
  height: 360px;
  background-image: url("../../../src/assets/img/about-img-bg.png");
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  z-index: 1 !important;
}
@media (max-width: 768px) {
  .about-img::before {
    display: none;
  }
}
.about-img img {
  position: relative;
  z-index: 2 !important;
}
</style>
