<template>
  <div class="fullscreen dex-page-bg text-white text-center q-pa-md flex flex-center">
    <div>
      <div class="not-found-code">404</div>

      <div class="text-h4 not-found-msg">Oops. Fuera del Mundo Digital...</div>
      <div class="text-grey-4 q-mt-sm">La página que buscas no existe o fue borrada por un Digimon.</div>

      <div class="row justify-center q-gutter-md q-mt-xl">
        <q-btn
          color="secondary"
          text-color="dark"
          icon="home"
          label="Ir al inicio"
          to="/"
          no-caps
          unelevated
        />
        <q-btn
          outline
          color="grey-3"
          icon="pets"
          label="Explorar el Dex"
          to="/dex"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped lang="scss">
.not-found-code {
  font-size: clamp(90px, 22vh, 150px);
  font-weight: 900;
  line-height: 1;
  color: $secondary;
  text-shadow: 0 0 40px rgba(255, 204, 0, 0.35);
}

.not-found-msg {
  font-weight: 700;
  margin-top: 8px;
}
</style>