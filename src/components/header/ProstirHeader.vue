<script setup lang="ts">
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
  <header>
    <div class="m-auto max-w-[900px] py-8">
      <nav class="w-full flex items-center justify-between">
        <ul
          class="flex items-center justify-between basis-[330px]"
          v-auto-animate
        >
          <li
            class="font-medium text-base text-black active-item w-[100px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ГОЛОВНА</p>
          </li>
          <li
            class="font-medium text-base text-black w-[100px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ПРО НАС</p>
          </li>
          <li
            class="font-medium text-base text-black w-[100px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ПОСЛУГИ</p>
          </li>
        </ul>
        <div
          class="basis-[180px] gap-5 flex items-center justify-center overflow-hidden"
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
            class="font-medium text-base text-black w-[100px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>ГАЛЕРЕЯ</p>
          </li>
          <li
            class="font-medium text-base text-black w-[100px] text-center cursor-pointer"
            @click="changeActiveBtn"
          >
            <p>КОНТАКТИ</p>
          </li>
          <li class="flex items-center gap-2">
            <button
              class="w-12 h-12 p-[7px] flex justify-center items-center border-primary border-[3px] rounded-[50%]"
            >
              <img
                src="../../assets/img/facebook.svg"
                alt="facebook"
                class="w-full"
              />
            </button>
            <button
              class="w-12 h-12 p-[7px] flex justify-center items-center border-primary border-[3px] rounded-[50%]"
            >
              <img
                src="../../assets/img/instagram.svg"
                alt="instagram"
                class="w-full"
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
