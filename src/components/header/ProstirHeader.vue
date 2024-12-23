<script setup lang="ts">
import { ref } from "vue";
import SocialBtn from "../ui/SocialBtn.vue";
import BurgerMenu from "./BurgerMenu.vue";

const changeActiveBtn = (event: Event) => {
  const target = (event.target as HTMLElement).closest("li");

  const navList = document.querySelectorAll("li");

  navList.forEach((el) => el.classList.remove("active-item"));

  if (target) {
    target.classList.add("active-item");
  }
};

const showMenu = ref(false);

const toggleMenu = (activeBurger: boolean) => {
  showMenu.value = activeBurger;

  if (activeBurger) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
</script>

<template>
  <header
    class="w-full bg-light sticky top-0 z-[998]"
    :class="{ 'after:opacity-0': showMenu }"
  >
    <div class="m-auto max-w-[940px] py-3 px-5 Tabletm:py-5 Phonel:py-3">
      <div
        class="fixed w-full h-screen bg-light left-[50%] translate-x-[-50%] top-[-100%] duration-[0.6s] Tabletm:block hidden"
        :class="{ 'top-[0%]': showMenu }"
      >
        <nav class="flex flex-col items-center justify-center h-full">
          <ul class="flex flex-col items-center justify-center">
            <li
              class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            >
              <p>ГОЛОВНА</p>
            </li>
            <li
              class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            >
              <p>ПРО НАС</p>
            </li>
            <li
              class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            >
              <p>ПОСЛУГИ</p>
            </li>
            <li
              class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            >
              <p>ГАЛЕРЕЯ</p>
            </li>
            <li
              class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            >
              <p>КОНТАКТИ</p>
            </li>
          </ul>
          <div class="flex items-center gap-2">
            <SocialBtn social="facebook" alt="facebook" />
            <SocialBtn social="instagram" alt="instagram" />
          </div>
        </nav>
      </div>
      <nav class="w-full flex items-center justify-between">
        <ul
          class="flex items-center justify-between basis-[330px] Tabletm:hidden"
        >
          <li
            class="font-medium text-sm text-black active-item basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ГОЛОВНА</p>
          </li>
          <li
            class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ПРО НАС</p>
          </li>
          <li
            class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ПОСЛУГИ</p>
          </li>
        </ul>
        <div
          class="basis-[160px] Tabletm:basis-[100px] gap-5 flex items-center justify-center overflow-hidden z-[10000]"
        >
          <img src="../../assets/img/logo.svg" alt="logo-text" class="w-full" />
        </div>
        <ul
          class="flex items-center justify-between basis-[340px] Tabletm:hidden"
          v-auto-animate
        >
          <li
            class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ГАЛЕРЕЯ</p>
          </li>
          <li
            class="font-medium text-sm text-black basis-[100px] Tablet:basis-[80px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>КОНТАКТИ</p>
          </li>
          <li class="flex items-center gap-2">
            <SocialBtn social="facebook" alt="facebook" />
            <SocialBtn social="instagram" alt="instagram" />
          </li>
        </ul>
        <div class="hidden Tabletm:flex items-center gap-5">
          <div class="Tabletm:flex items-center gap-2">
            <SocialBtn social="facebook" alt="facebook" class="Phonel:hidden" />
            <SocialBtn
              social="instagram"
              alt="instagram"
              class="Phonel:hidden"
            />
          </div>
          <BurgerMenu @burger="toggleMenu" />
        </div>
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
  background-image: url("../../assets/img/header-waves.svg");
  background-position: center;
  bottom: 0;
  top: 145px;
  transition: 0.6s;
}

@media (max-width: 768px) {
  header::after {
    top: 95px;
  }
}
@media (max-width: 425px) {
  header::after {
    top: 85px;
  }
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
