<script setup lang="ts">
import ProstirFooter from "../components/layouts/footer/ProstirFooter.vue";
import ProstirHeader from "../components/layouts/header/ProstirHeader.vue";
</script>

<template>
  <div class="wrapper">
    <ProstirHeader />
    <main>
      <routerView></routerView>
    </main>
    <ProstirFooter />
  </div>
</template>
