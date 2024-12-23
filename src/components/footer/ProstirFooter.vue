<script setup lang="ts">
import SocialBtn from "../ui/SocialBtn.vue";
</script>

<template>
  <footer class="bg-[#185A18] relative">
    <div
      class="flex items-center justify-between gap-1 w-full m-auto py-6 px-3 max-w-[1220px] Laptop:flex-col Laptop:gap-[60px] Tablets:gap-[20px_!important]"
    >
      <div
        class="flex items-center gap-5 Laptop:justify-center Tablets:flex-col Tablets:items-center Tablets:gap-4"
      >
        <div class="basis-[216px] Laptop:basis-auto">
          <img src="../../assets/img/logo.svg" alt="logo" class="w-full" />
        </div>
        <div class="Tablets:text-center">
          <h3 class="light">Простір можливостей</h3>
          <p class="font-normal text-[17px] text-white mt-[7px]">
            Освітній центр нейрокорекції та розвитку
          </p>
          <p class="font-normal text-xs text-white mt-[14px]">м.Рівне</p>
        </div>
        <div
          class="flex-col items-center gap-4 hidden Laptop:flex Tablets:flex-row"
        >
          <SocialBtn social="instagram" type="light" alt="instagram-logo" />
          <SocialBtn social="facebook" type="light" alt="facebook-logo" />
        </div>
      </div>
      <div
        class="flex flex-col items-center gap-[13px] font-normal text-xl basis-[445px] Laptop:basis-auto text-center Laptop:justify-center text-white Tablets:text-base"
      >
        <p>Телефон: +380687296562</p>
        <p>Ел.пошта: prostirmozlivostej1707@gmail.com</p>
        <p>Адреса: м.Рівне, парк “Лебединка”, інститут Права, 2 поверх</p>
      </div>
      <div class="flex-col items-center gap-4 flex Laptop:hidden">
        <SocialBtn social="instagram" type="light" alt="instagram-logo" />
        <SocialBtn social="facebook" type="light" alt="facebook-logo" />
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 53px;
  background-image: url("../../assets/img/footer-waves.svg");
  background-position: center;
  top: -30px;
}
</style>
