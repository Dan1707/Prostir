<script setup lang="ts">
import SocialBtn from "@/common/components/ui/SocialBtn.vue";
import { ref, watch } from "vue";

const win = ref(window.innerWidth);

watch([window.innerWidth], () => {
  win.value = window.innerWidth;
  console.log(win.value);
});
</script>

<template>
  <section
    class="w-full bg-[linear-gradient(220deg,_rgba(95,215,84,1)_31%,_rgba(83,170,86,1)_100%)]"
  >
    <div class="block-container">
      <h2 class="light">Контакти</h2>
      <p class="block-subtitle-light">Як можна з нами зв’язатися?</p>
      <div
        class="mt-[63px] bg-light shadow-[0_15px_0_0_#99ff90] rounded-[10px] flex overflow-hidden Tablet:flex-col"
      >
        <div
          class="px-[24px] py-[24px] flex flex-col justify-center gap-2 max-w-[50%] Tablet:text-center Tablet:max-w-[700px] Tablet:items-center"
        >
          <h3 class="dark">Для зв’язку з нами:</h3>
          <span class="flex items-center gap-2 mt-[20px]">
            <SocialBtn social="call" alt="call-icon" />
            <p class="font-normal text-[20px] text-black">
              +(380) 68 729 65 62
            </p>
          </span>
          <span class="flex items-center gap-2">
            <SocialBtn social="call" alt="call-icon" />
            <p class="font-normal text-[20px] text-black">
              +(380) 96 280 13 07
            </p>
          </span>
          <span class="flex items-center gap-2">
            <SocialBtn social="location" alt="location-icon" />
            <p class="font-normal text-[20px] text-black">
              м.Рівне, Борисенка, 5, Рівненський інститут Київського
              університету права, 2 поверх
            </p>
          </span>
          <span class="flex items-center gap-2">
            <SocialBtn social="email" alt="email-icon" />
            <p class="font-normal text-[20px] text-black">
              prostirmozlivostej1707@gmail.com
            </p>
          </span>
        </div>
        <div v-if="win <= 768"></div>
      </div>
    </div>
  </section>
</template>
