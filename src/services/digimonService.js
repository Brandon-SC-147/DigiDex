import axios from 'axios'

const BASE_URL = 'https://digimon-api.vercel.app/api'

/**
 * Obtiene el catálogo completo de Digimon.
 * @returns {Promise<Array<{ name: string, img: string, level: string }>>}
 */
export async function getAllDigimons() {
  const { data } = await axios.get(`${BASE_URL}/digimon`)
  return data
}

/**
 * Obtiene un Digimon por su nombre.
 * @param {string} name
 * @returns {Promise<Array<{ name: string, img: string, level: string }>>}
 */
export async function getDigimonByName(name) {
  const { data } = await axios.get(`${BASE_URL}/digimon/name/${encodeURIComponent(name)}`)
  return data
}