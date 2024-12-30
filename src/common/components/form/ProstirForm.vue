<script setup lang="ts">
import ProstirBtn from "@/common/components/ui/ProstirBtn.vue";
</script>

<template>
  <section
    class="bg-[url('./img/form-img.png')] bg-no-repeat bg-[cover] bg-center form relative"
  >
    <div class="block-container">
      <h2 class="dark">Як записати дитину?</h2>
      <p class="block-subtitle-dark">
        За телефоном
        <a href="tel:+38068729562" aria-label="Натисніть, щоб зателефонувати">
          +38068729562
        </a>
        або заповнивши анкету
      </p>
      <form class="max-w-[545px] m-auto mt-[60px] relative z-10">
        <h3 class="dark text-center">Анкета</h3>
        <div class="flex flex-col items-center gap-10 Tablets:gap-5">
          <label for="name" class="block-secondary-text-light w-full">
            Ім’я *
            <input
              type="text"
              id="name"
              class="shadow-[0_4px_0_0_#99ff90] focus:bg-[#ACFFA3] rounded-[10px] duration-[0.6s] border-[0.50px] border-solid border-primary w-full py-3 px-5 outline-none"
            />
          </label>
          <label for="name" class="block-secondary-text-light w-full">
            Номер телефону *
            <input
              type="tel"
              id="name"
              class="shadow-[0_4px_0_0_#99ff90] focus:bg-[#ACFFA3] rounded-[10px] duration-[0.6s] border-[0.50px] border-solid border-primary w-full py-3 px-5 outline-none"
            />
          </label>
          <label for="name" class="block-secondary-text-light w-full">
            Ел. пошта *
            <input
              type="email"
              id="name"
              class="shadow-[0_4px_0_0_#99ff90] focus:bg-[#ACFFA3] rounded-[10px] duration-[0.6s] border-[0.50px] border-solid border-primary w-full py-3 px-5 outline-none"
            />
          </label>
          <label for="name" class="block-secondary-text-light w-full">
            Повідомлення *
            <textarea
              id="name"
              class="shadow-[0_4px_0_0_#99ff90] focus:bg-[#ACFFA3] duration-[0.6s] rounded-[10px] border-[0.50px] min-h-[126px] border-solid border-primary w-full py-3 px-5 outline-none"
            >
            </textarea>
          </label>
          <div
            class="flex items-center justify-between w-full gap-10 mt-[62px] Tablets:flex-col Tablets:mt-[30px]"
          >
            <ProstirBtn type="normal" class="w-full Tablets:order-2"
              >Очистити</ProstirBtn
            >
            <ProstirBtn type="primary" class="w-full Tablets:order-1">
              Надіслати форму
            </ProstirBtn>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
