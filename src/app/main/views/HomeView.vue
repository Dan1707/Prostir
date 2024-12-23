<script setup lang="ts">
import ProstirAbout from "@/app/main/components/about/ProstirAbout.vue";
import ProstirAd from "@/app/main/components/ad/ProstirAd.vue";
import ProstirAdvantages from "@/app/main/components/advantages/ProstirAdvantages.vue";
import ProstirCamp from "@/app/main/components/camp/ProstirCamp.vue";
import ProstirForm from "@/common/components/form/ProstirForm.vue";
import ProstirGallery from "@/app/main/components/gallery/ProstirGallery.vue";
import ProstirHero from "@/app/main/components/hero/ProstirHero.vue";
import ProstirServices from "@/app/main/components/services/ProstirServices.vue";
import ProstirTestemonials from "@/app/main/components/testemonials/ProstirTestemonials.vue";
import ProstirWorkers from "@/app/main/components/workers/ProstirWorkers.vue";
</script>

<template>
  <ProstirHero />
  <ProstirAdvantages />
  <ProstirAbout />
  <ProstirAd />
  <ProstirServices />
  <ProstirTestemonials />
  <ProstirCamp />
  <ProstirGallery />
  <ProstirWorkers />
  <ProstirForm />
</template>
