<script setup lang="ts">
interface advantItem {
  iconPath: string;
  text: string;
}

defineProps<{
  el: advantItem;
}>();
</script>

<template>
  <article
    class="max-w-[234px] h-[245px] bg-primary p-5 rounded-[10px] flex flex-col items-center gap-2 shadow-[0_7px_1px_0_var(--shadow)] Laptop:max-w-full"
  >
    <div
      class="max-w-[120px] h-[120px] rounded-[50%] p-[27px] bg-light flex items-center justify-center"
    >
      <img
        :src="`../../../src/assets/img/${el.iconPath}`"
        class="w-full"
        alt="advant_1"
      />
    </div>
    <hr class="w-[89px] h-1 bg-gray rounded-md border-none" />
    <div
      class="px-3 py-[15px] rounded-[10px] min-h-[66px] bg-light flex items-center justify-center"
    >
      <p class="font-medium text-base font-subTitle text-center text-black">
        {{ el.text }}
      </p>
    </div>
  </article>
</template>
