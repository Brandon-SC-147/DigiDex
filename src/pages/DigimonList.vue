<template>
  <q-page class="dex-page-bg">
    <div class="container-xl q-pa-md q-pa-lg-xl">
      <div class="page-hero text-center q-mb-xl">
        <div class="hero-kicker">CATÁLOGO DIGITAL</div>
        <h1 class="hero-title">
          <span class="text-digimon-gradient">Explora</span> el Mundo Digital
        </h1>
        <p class="hero-desc mx-auto">
          Consulta los Digimon del catálogo, sus niveles de evolución e información detallada de
          cada criatura digital.
        </p>
      </div>

      <div class="row q-col-gutter-lg">
        <!-- Búsqueda / Filtros -->
        <div class="col-12 col-md-3">
          <div class="sticky-top q-pt-sm">
            <DigimonFilter :levels="levelOptions" @filter="handleFilter" />

            <q-card class="counter-card q-mt-md">
              <q-card-section class="text-center">
                <div class="counter-value">{{ filteredDigimons.length }}</div>
                <div class="counter-label">DIGIMONS ENCONTRADOS</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Resultados -->
        <div class="col-12 col-md-9">
          <div class="results-toolbar row items-center q-mb-md">
            <q-icon name="storage" color="secondary" class="q-mr-sm" size="20px" />
            <span class="results-title">Registros del Dex</span>
            <q-space />
            <span class="results-meta gt-sm">{{ filteredDigimons.length }} de {{ digimons.length }}</span>
          </div>

          <div v-if="loading" class="flex flex-center q-pa-xl">
            <q-spinner-orbit color="secondary" size="3.5em" />
            <div class="text-grey-4 q-ml-md">Sincronizando con el Mundo Digital...</div>
          </div>

          <q-card v-else-if="loadError" class="error-card q-pa-xl">
            <div class="flex flex-center column text-center">
              <q-icon name="cloud_off" size="56px" color="negative" />
              <div class="text-h6 text-white q-mt-md">No se pudo conectar con la API</div>
              <div class="text-grey-5 q-mt-sm">
                Revisa tu conexión o inténtalo de nuevo en unos segundos.
              </div>
              <q-btn
                class="q-mt-lg"
                outline
                color="secondary"
                icon="refresh"
                label="Reintentar"
                no-caps
                @click="loadDigimons"
              />
            </div>
          </q-card>

          <div v-else-if="filteredDigimons.length === 0" class="empty-state q-pa-xl">
            <q-icon name="search_off" size="56px" class="q-mb-sm" color="grey-6" />
            <div class="text-h6 text-grey-3">No se encontraron resultados</div>
            <div class="text-grey-6 q-mt-xs">
              Prueba con otro nombre o quita el filtro de nivel.
            </div>
          </div>

          <div v-else class="row q-col-gutter-md">
            <div
              v-for="digimon in filteredDigimons"
              :key="digimon.name"
              class="col-12 col-sm-6 col-md-4 col-lg-3 flex justify-center"
            >
              <DigimonCard :digimon="digimon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DigimonCard from 'src/components/DigimonCard.vue'
import DigimonFilter from 'src/components/DigimonFilter.vue'
import { getAllDigimons } from 'src/services/digimonService'

const digimons = ref([])
const loading = ref(true)
const loadError = ref(false)
const filters = ref({ name: '', level: null })

const levelOptions = computed(() => {
  const levels = new Set(digimons.value.map((d) => d.level).filter(Boolean))
  return [...levels].sort()
})

const filteredDigimons = computed(() => {
  const nameFilter = filters.value.name.toLowerCase()
  return digimons.value.filter((d) => {
    const nameMatch = d.name.toLowerCase().includes(nameFilter)
    const levelMatch = !filters.value.level || d.level === filters.value.level
    return nameMatch && levelMatch
  })
})

const handleFilter = (newFilters) => {
  filters.value = newFilters
}

const loadDigimons = async () => {
  loading.value = true
  loadError.value = false
  try {
    digimons.value = await getAllDigimons()
  } catch {
    loadError.value = true
  } finally {
    loading.value = false
  }
}

onMounted(loadDigimons)
</script>

<style scoped lang="scss">
.container-xl {
  max-width: 1320px;
  margin: 0 auto;
}

.page-hero {
  padding-top: 8px;
}

.hero-kicker {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
  color: $secondary;
  text-transform: uppercase;
}

.hero-title {
  font-size: clamp(30px, 5vw, 44px);
  font-weight: 900;
  letter-spacing: 0.5px;
  color: #fff;
  margin: 10px 0 6px;
}

.hero-desc {
  max-width: 560px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 15px;
  line-height: 1.6;
}

.counter-card {
  background: rgba(21, 27, 46, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.counter-value {
  font-size: 40px;
  font-weight: 900;
  color: $secondary;
  line-height: 1.1;
}

.counter-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 4px;
}

.results-toolbar {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 10px;
}

.results-title {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
}

.results-meta {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 500;
}

.error-card {
  background: rgba(21, 27, 46, 0.85);
  border: 1px solid rgba(255, 82, 82, 0.4);
  border-radius: 16px;
}

.empty-state {
  text-align: center;
  border: 1px dashed rgba(255, 255, 255, 0.18);
  border-radius: 16px;
}
</style>