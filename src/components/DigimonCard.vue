<template>
  <q-card class="digi-card hover-lift col-grow column no-wrap">
    <div class="img-container relative-position">
      <img :src="digimon.img" :alt="digimon.name" class="digi-img" loading="lazy" />
      <div class="scan-line"></div>
    </div>

    <q-card-section class="q-pa-sm bg-dark text-white col-grow flex column justify-between">
      <div>
        <div class="digi-name text-uppercase ellipsis">{{ digimon.name }}</div>
        <div class="row items-center q-gutter-sm q-mt-xs">
          <q-badge :color="levelColor" text-color="white" :label="digimon.level" />
          <span class="text-caption text-grey-5">DIGIMON</span>
        </div>
      </div>

      <q-btn
        flat
        dense
        class="q-mt-sm full-width"
        color="secondary"
        label="Ver ficha"
        icon-right="arrow_forward"
        no-caps
        :to="'/dex/' + digimon.name"
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  digimon: {
    type: Object,
    required: true,
  },
})

const LEVEL_COLORS = {
  Fresh: 'green-6',
  'In Training': 'teal-5',
  Rookie: 'primary',
  Champion: 'purple-5',
  Ultimate: 'orange-7',
  Mega: 'red-6',
  Armor: 'amber-6',
}

const levelColor = computed(() => LEVEL_COLORS[props.digimon.level] || 'grey-6')
</script>

<style scoped lang="scss">
.digi-card {
  width: 100%;
  max-width: 240px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  overflow: hidden;
  background: $dark;

  &:hover {
    border-color: rgba(15, 98, 254, 0.7);
  }
}

.img-container {
  height: 180px;
  background:
    radial-gradient(120% 120% at 50% 20%, rgba(15, 98, 254, 0.16) 0%, transparent 60%),
    #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.digi-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 14px;
  transition: transform 0.35s ease;
}

.digi-card:hover .digi-img {
  transform: scale(1.08);
}

.digi-name {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: $secondary;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(0, 255, 0, 0.5);
  box-shadow: 0 0 10px #0f0;
  animation: scan 2s linear infinite;
  opacity: 0;
}

.digi-card:hover .scan-line {
  opacity: 1;
}

@keyframes scan {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}
</style>