<script setup lang="ts">
import SocialBtn from "../ui/SocialBtn.vue";

const changeActiveBtn = (event: Event) => {
  const target = (event.target as HTMLElement).closest("li");

  const navList = document.querySelectorAll("li");

  navList.forEach((el) => el.classList.remove("active-item"));

  if (target) {
    target.classList.add("active-item");
  }
};
</script>

<template>
  <header class="w-full bg-light sticky top-0 z-[998]">
    <div class="m-auto max-w-[940px] py-3 px-5">
      <nav class="w-full flex items-center justify-between">
        <ul
          class="flex items-center justify-between basis-[330px]"
          v-auto-animate
        >
          <li
            class="font-medium text-sm text-black active-item w-[100px] Tablet:w-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ГОЛОВНА</p>
          </li>
          <li
            class="font-medium text-sm text-black w-[100px] Tablet:w-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ПРО НАС</p>
          </li>
          <li
            class="font-medium text-sm text-black w-[100px] Tablet:w-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ПОСЛУГИ</p>
          </li>
        </ul>
        <div
          class="basis-[160px] gap-5 flex items-center justify-center overflow-hidden z-[10000]"
        >
          <img
            src="../../assets/img/logo-text.svg"
            alt="logo-text"
            class="w-full"
          />
        </div>
        <ul
          class="flex items-center justify-between basis-[340px]"
          v-auto-animate
        >
          <li
            class="font-medium text-sm text-black w-[100px] Tablet:w-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ГАЛЕРЕЯ</p>
          </li>
          <li
            class="font-medium text-sm text-black w-[100px] Tablet:w-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>КОНТАКТИ</p>
          </li>
          <li class="flex items-center gap-2">
            <SocialBtn social="facebook" alt="facebook" />
            <SocialBtn social="instagram" alt="instagram" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style scoped>
header::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 63px;
  background-image: url("../../assets/img/header-waves.png");
  background-position: center;
  bottom: 0;
  top: 137px;
}

.active-item::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 5px;
  background-color: var(--gray);
  border-radius: 5px;
}

.active-item {
  position: relative;
  top: -40px;
  height: 148px;
  cursor: pointer;
  flex-direction: column;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--primary);
  transition: 0.3s;
  animation: pulse 0.3s ease-in-out;
}

.active-item p {
  position: relative;
  transform: translateY(101px);
  color: var(--light);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
