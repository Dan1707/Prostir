<script setup lang="ts">
import SocialBtn from "@/common/components/ui/SocialBtn.vue";
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
          class="p-6 Tablet:p-4 flex flex-col justify-center gap-2 max-w-[50%] Tablet:max-w-[700px]"
        >
          <h3 class="dark">Для зв’язку з нами:</h3>
          <span class="flex items-center gap-2 mt-[20px]">
            <SocialBtn social="call" alt="call-icon" />
            <p class="font-normal text-[20px] text-black Phonel:text-base">
              +(380) 68 729 65 62
            </p>
          </span>
          <span class="flex items-center gap-2">
            <SocialBtn social="call" alt="call-icon" />
            <p class="font-normal text-[20px] text-black Phonel:text-base">
              +(380) 96 280 13 07
            </p>
          </span>
          <span class="flex items-center gap-2">
            <SocialBtn social="location" alt="location-icon" />
            <p class="font-normal text-[20px] text-black Phonel:text-base">
              м.Рівне, Борисенка, 5, Рівненський інститут Київського
              університету права, 2 поверх
            </p>
          </span>
          <span class="flex items-center gap-2">
            <SocialBtn social="email" alt="email-icon" />
            <p class="font-normal text-[20px] text-black Phonel:text-base">
              prostirmozlivostej1707@gmail.com
            </p>
          </span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5063.064522379022!2d26.23925097770997!3d50.6172284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f134db5c66b77%3A0x22ea3a78b754db28!2z0KDRltCy0L3QtdC90YHRjNC60LjQuSDRltC90YHRgtC40YLRg9GCINCa0LjRl9Cy0YHRjNC60L7Qs9C-INGD0L3RltCy0LXRgNGB0LjRgtC10YLRgyDQv9GA0LDQstCwINCd0LDRhtGW0L7QvdCw0LvRjNC90L7RlyDQsNC60LDQtNC10LzRltGXINC90LDRg9C6INCj0LrRgNCw0ZfQvdC4!5e0!3m2!1suk!2sua!4v1735068205226!5m2!1suk!2sua"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="Tablet:w-full"
        ></iframe>
      </div>
    </div>
  </section>
</template>
