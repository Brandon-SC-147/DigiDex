<template>
  <q-page class="dex-page-bg">
    <div class="container q-pa-md q-pa-lg-lg">
      <q-btn
        flat
        dense
        color="grey-4"
        icon="arrow_back"
        label="Volver al Dex"
        no-caps
        to="/dex"
        class="q-mb-lg"
      />

      <div v-if="loading" class="flex flex-center q-pa-xl">
        <q-spinner-grid color="secondary" size="3.5em" />
        <div class="text-grey-4 q-ml-md">Consultando datos del Digimon...</div>
      </div>

      <q-card v-else-if="loadError" class="error-card q-pa-xl">
        <div class="flex flex-center column text-center">
          <q-icon name="cloud_off" size="56px" color="negative" />
          <div class="text-h6 text-white q-mt-md">No se pudo cargar la información</div>
          <div class="text-grey-5 q-mt-sm">Inténtalo nuevamente en unos segundos.</div>
          <q-btn
            class="q-mt-lg"
            outline
            color="secondary"
            icon="refresh"
            label="Reintentar"
            no-caps
            @click="loadDigimon"
          />
        </div>
      </q-card>

      <q-card v-else-if="!digimon" class="error-card q-pa-xl">
        <div class="flex flex-center column text-center">
          <q-icon name="help_outline" size="56px" color="grey-5" />
          <div class="text-h6 text-white q-mt-md">Digimon no encontrado</div>
          <div class="text-grey-5 q-mt-sm">
            No existe una criatura con ese nombre en la base de datos.
          </div>
        </div>
      </q-card>

      <div v-else class="row full-width justify-center" style="max-width: 1000px; margin: 0 auto">
        <!-- Ficha visual -->
        <div class="col-12 col-md-5 q-pa-sm q-pa-md-md">
          <q-card class="detail-visual">
            <q-card-section class="text-center">
              <img :src="digimon.img" :alt="digimon.name" class="detail-img" />
            </q-card-section>
            <q-card-section class="text-center q-pt-none">
              <h1 class="detail-name text-uppercase">{{ digimon.name }}</h1>
              <q-badge :color="levelColor" text-color="white" :label="digimon.level" class="q-pa-sm text-subtitle1" />
            </q-card-section>
          </q-card>
        </div>

        <!-- Datos -->
        <div class="col-12 col-md-7 q-pa-sm q-pa-md-md">
          <div class="detail-heading">DATOS DE ANÁLISIS</div>

          <q-list dark bordered separator class="rounded-borders detail-list">
            <q-item>
              <q-item-section avatar>
                <q-icon name="fingerprint" color="secondary" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>NOMBRE</q-item-label>
                <q-item-label>{{ digimon.name }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="trending_up" :color="levelColor" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>NIVEL DE EVOLUCIÓN</q-item-label>
                <q-item-label>{{ digimon.level }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <div class="data-note q-mt-md">
            <q-icon name="info_outline" size="16px" class="q-mr-xs" color="info" />
            Datos obtenidos de la API pública de Digimon.
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDigimonByName } from 'src/services/digimonService'

const LEVEL_COLORS = {
  Fresh: 'green-6',
  'In Training': 'teal-5',
  Rookie: 'primary',
  Champion: 'purple-5',
  Ultimate: 'orange-7',
  Mega: 'red-6',
  Armor: 'amber-6',
}

const route = useRoute()
const digimon = ref(null)
const loading = ref(true)
const loadError = ref(false)

const levelColor = computed(() => LEVEL_COLORS[digimon.value?.level] || 'grey-6')

const loadDigimon = async () => {
  loading.value = true
  loadError.value = false
  try {
    const name = route.params.name
    const data = await getDigimonByName(name)
    digimon.value = Array.isArray(data) && data.length > 0 ? data[0] : null
  } catch {
    loadError.value = true
  } finally {
    loading.value = false
  }
}

onMounted(loadDigimon)
</script>

<style scoped lang="scss">
.container {
  max-width: 1100px;
  margin: 0 auto;
}

.detail-visual {
  background: rgba(21, 27, 46, 0.85);
  border: 1px solid rgba(15, 98, 254, 0.45);
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
}

.detail-img {
  width: 100%;
  max-width: 320px;
  filter: drop-shadow(0 0 18px rgba(255, 204, 0, 0.25));
  animation: float 3.5s ease-in-out infinite;
}

.detail-name {
  font-size: clamp(26px, 4vw, 34px);
  font-weight: 900;
  letter-spacing: 1px;
  color: $secondary;
  margin: 0;
}

.detail-heading {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
  color: $secondary;
  margin-bottom: 14px;
}

.detail-list {
  background: rgba(21, 27, 46, 0.85) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.data-note {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
}

.error-card {
  background: rgba(21, 27, 46, 0.85);
  border: 1px solid rgba(255, 82, 82, 0.4);
  border-radius: 16px;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>