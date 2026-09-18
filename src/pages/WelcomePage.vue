<template>
  <main class="welcome-page">
    <div class="welcome-bg" aria-hidden="true"></div>
    <div class="welcome-overlay" aria-hidden="true"></div>
    <div class="orb orb-primary" aria-hidden="true"></div>
    <div class="orb orb-secondary" aria-hidden="true"></div>
    <div class="orb orb-accent" aria-hidden="true"></div>

    <div class="welcome-content">
      <q-card class="welcome-card">
        <q-card-section class="text-center">
          <div class="brand-badge">ENCICLOPEDIA DIGITAL</div>

          <h1 class="welcome-title">
            <span class="text-digimon-gradient">DigiDex Web</span>
          </h1>

          <div class="welcome-subtitle">Explora el Mundo Digital</div>

          <q-icon name="edit" size="14px" color="grey-6" class="divider-icon" />

          <p class="welcome-desc">
            Descubre Digimon, consulta sus características, niveles, atributos e información
            detallada.
          </p>

          <div class="row justify-center q-gutter-sm feature-row">
            <q-badge outline color="grey-4" class="feature-chip">
              <q-icon name="pets" size="15px" color="secondary" class="q-mr-xs" />
              {{ digimonCount }}+ Digimon
            </q-badge>
            <q-badge outline color="grey-4" class="feature-chip">
              <q-icon name="trending_up" size="15px" color="info" class="q-mr-xs" />
              Niveles de evolución
            </q-badge>
            <q-badge outline color="grey-4" class="feature-chip">
              <q-icon name="search" size="15px" color="accent" class="q-mr-xs" />
              Búsqueda rápida
            </q-badge>
          </div>

          <q-btn
            class="cta-btn q-mt-lg"
            color="primary"
            text-color="white"
            icon="travel_explore"
            label="Explorar DigiDex"
            size="lg"
            no-caps
            to="/dex"
          />
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <div class="welcome-footer">
            <q-icon name="public" size="14px" class="q-mr-xs" />
            Un viaje por el Mundo Digital
          </div>
        </q-card-section>
      </q-card>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAllDigimons } from 'src/services/digimonService'

const digimonCount = ref(209)

onMounted(async () => {
  try {
    const data = await getAllDigimons()
    if (Array.isArray(data) && data.length > 0) {
      digimonCount.value = data.length
    }
  } catch {
    // El conteo por defecto se mantiene si la API no responde.
  }
})
</script>

<style scoped lang="scss">
.welcome-page {
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
  background: $dark-page;
}

.welcome-bg {
  position: absolute;
  inset: 0;
  background-image: url('/backgrounds/digital-world.jpg');
  background-position: center;
  background-size: cover;
  animation: slow-zoom 24s ease-in-out infinite alternate;
  will-change: transform;
}

.welcome-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(11, 15, 31, 0.78) 0%,
    rgba(11, 15, 31, 0.55) 50%,
    rgba(11, 15, 31, 0.9) 100%
  );
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  pointer-events: none;
  animation: float-orb 9s ease-in-out infinite;
}

.orb-primary {
  width: 340px;
  height: 340px;
  background: rgba(15, 98, 254, 0.55);
  top: -80px;
  right: -60px;
}

.orb-secondary {
  width: 260px;
  height: 260px;
  background: rgba(255, 204, 0, 0.4);
  bottom: -60px;
  left: -40px;
  animation-delay: -3s;
}

.orb-accent {
  width: 180px;
  height: 180px;
  background: rgba(255, 107, 44, 0.45);
  bottom: 18%;
  right: 12%;
  animation-delay: -6s;
}

.welcome-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.welcome-card {
  width: 100%;
  max-width: 500px;
  background: rgba(21, 27, 46, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55);
  animation: card-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.brand-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 204, 0, 0.45);
  color: $secondary;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 18px;
  animation: fade-up 0.7s 0.15s ease both;
}

.welcome-title {
  font-size: clamp(38px, 8vw, 56px);
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 1.1;
  margin: 0;
  animation: fade-up 0.7s 0.25s ease both;
}

.welcome-subtitle {
  font-size: clamp(17px, 3.4vw, 22px);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 8px;
  animation: fade-up 0.7s 0.35s ease both;
}

.divider-icon {
  margin-top: 20px;
  opacity: 0.6;
  animation: fade-up 0.7s 0.45s ease both;
}

.welcome-desc {
  max-width: 360px;
  margin: 14px auto 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 15px;
  line-height: 1.6;
  animation: fade-up 0.7s 0.55s ease both;
}

.feature-row {
  margin-top: 18px;
  animation: fade-up 0.7s 0.65s ease both;
}

.feature-chip {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
}

.cta-btn {
  animation: fade-up 0.7s 0.75s ease both;
  border-radius: 999px;
  font-weight: 700;
  padding: 0 32px;
  letter-spacing: 0.5px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 26px rgba(15, 98, 254, 0.45);
  }
}

.welcome-footer {
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  letter-spacing: 0.5px;
  animation: fade-up 0.7s 0.9s ease both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(26px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slow-zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.08);
  }
}

@keyframes float-orb {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-26px);
  }
}

@media (max-width: 480px) {
  .welcome-card {
    border-radius: 20px;
  }
}
</style>