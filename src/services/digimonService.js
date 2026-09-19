const BASE_URL = 'https://digimon-api.vercel.app/api';
const TIMEOUT_MS = 15000;

/**
 * Fetch con tiempo máximo de espera: si la API no responde,
 * se aborta para no dejar la UI colgada en "cargando".
 */
async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { signal: controller.signal });
  } catch (err) {
    if (err?.name === 'AbortError') {
      throw new Error(`La API no respondió en ${TIMEOUT_MS / 1000}s: ${url}`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Obtiene el catálogo completo de Digimon.
 * @returns {Promise<Array<{ name: string, img: string, level: string }>>}
 */
export async function getAllDigimons() {
  const res = await fetchWithTimeout(`${BASE_URL}/digimon`);
  if (!res.ok) {
    throw new Error(`Error al obtener Digimon: ${res.status}`);
  }
  return res.json();
}

/**
 * Obtiene un Digimon por su nombre.
 * @param {string} name
 * @returns {Promise<Array<{ name: string, img: string, level: string }>>}
 */
export async function getDigimonByName(name) {
  const res = await fetchWithTimeout(`${BASE_URL}/digimon/name/${encodeURIComponent(name)}`);
  if (!res.ok) {
    throw new Error(`Error al obtener Digimon "${name}": ${res.status}`);
  }
  return res.json();
}
