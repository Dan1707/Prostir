<script setup lang="ts">
import ProstirBtn from "@/common/components/ui/ProstirBtn.vue";
</script>

<template>
  <section>
    <div class="block-container">
      <aside
        class="w-full py-[55px] px-[78px] bg-[#53AA56] flex items-center justify-between rounded-3xl shadow-[10px_10px_0_0_rgba(83,170,86,0.6)] Tablet:flex-col Tablet:gap-5 Tablet:py-[30px] Tablet:px-[20px] Laptop:gap-10 Laptop:py-[50px] Laptop:px-[40px]"
      >
        <div>
          <h3
            class="font-subTitle font-medium text-4xl text-light Phonel:text-2xl"
          >
            Бажаєте записати свою дитину?
          </h3>
          <p class="block-secondary-text-primary max-w-[445px] mt-[10px]">
            Зацікавлені в заняттях, спрямованих на розвиток вашої дитини?
            Обираючи наш центр ви робите правильний вибір!
          </p>
        </div>
        <ProstirBtn
          type="primary"
          class="text-[30px] h-[114px] Tablet:w-full Tablet:min-h-fit"
        >
          Звязатися із закладом
        </ProstirBtn>
      </aside>
    </div>
  </section>
</template>
