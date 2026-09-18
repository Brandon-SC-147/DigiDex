<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white header-glow">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          to="/"
          aria-label="Ir al inicio"
          class="q-mr-sm"
          icon="pets"
          color="secondary"
        />

        <q-btn flat no-caps to="/" class="brand-btn">
          <span class="brand-title">
            <span class="text-secondary">Digi</span>Dex
            <span class="text-accent title-strong">Web</span>
          </span>
          <span class="brand-caption gt-xs text-grey-5 q-ml-sm">Explora el Mundo Digital</span>
        </q-btn>

        <q-space />

        <q-btn
          flat
          dense
          color="grey-3"
          icon="public"
          label="Sitio Oficial"
          no-caps
          href="https://digimon.net/"
          target="_blank"
          rel="noopener"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
//
</script>

<style scoped lang="scss">
.header-glow {
  background: rgba(21, 27, 46, 0.92) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 18px rgba(15, 98, 254, 0.22);
}

.brand-btn {
  border-radius: 8px;
}

.brand-title {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1px;
}

.title-strong {
  font-weight: 900;
}

.brand-caption {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>