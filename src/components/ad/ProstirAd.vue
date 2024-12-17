<script setup lang="ts">
import ProstirBtn from "../ui/ProstirBtn.vue";
</script>

<template>
  <section>
    <div class="block-container">
      <aside
        class="w-full py-[55px] px-[78px] bg-[#53AA56] flex items-center justify-between rounded-3xl shadow-[10px_10px_0_0_rgba(83,170,86,0.6)]"
      >
        <div>
          <h3 class="font-subTitle font-medium text-4xl text-light">
            Бажаєте записати свою дитину?
          </h3>
          <p class="block-secondary-text-primary max-w-[445px] mt-[10px]">
            Зацікавлені в заняттях, спрямованих на розвиток вашої дитини?
            Обираючи наш центр ви робите правильний вибір!
          </p>
        </div>
        <ProstirBtn type="primary" class="text-[30px] h-[114px]">
          Звязатися із закладом
        </ProstirBtn>
      </aside>
    </div>
  </section>
</template>
