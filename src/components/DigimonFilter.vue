<template>
  <q-card class="filter-card">
    <q-card-section>
      <div class="filter-title">
        <q-icon name="radar" class="q-mr-xs" color="secondary" />
        Digivice Radar
      </div>

      <div class="q-gutter-y-md">
        <div>
          <div class="filter-label">Identificar Digimon</div>
          <q-input
            filled
            dark
            bg-color="grey-9"
            color="secondary"
            v-model="searchName"
            placeholder="Escribe un nombre..."
            dense
            clearable
            @update:model-value="emitFilter"
            data-test="dex-search"
          >
            <template v-slot:prepend>
              <q-icon name="search" color="secondary" />
            </template>
          </q-input>
        </div>

        <div>
          <div class="filter-label">Nivel de evolución</div>
          <q-select
            filled
            dark
            bg-color="grey-9"
            color="secondary"
            v-model="searchLevel"
            :options="levels"
            label="Todos los niveles"
            dense
            clearable
            @update:model-value="emitFilter"
          >
            <template v-slot:prepend>
              <q-icon name="signal_cellular_alt" color="secondary" />
            </template>
          </q-select>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  levels: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['filter'])

const searchName = ref('')
const searchLevel = ref(null)

const emitFilter = () => {
  emit('filter', {
    name: searchName.value.trim(),
    level: searchLevel.value,
  })
}
</script>

<style scoped lang="scss">
.filter-card {
  background: rgba(21, 27, 46, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
}

.filter-title {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.filter-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 6px;
  text-transform: uppercase;
}
</style>