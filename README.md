# DigiDex Web

DigiDex Web es una aplicación web interactiva desarrollada con Vue.js y Quasar Framework que permite explorar el universo Digimon mediante información obtenida desde una API pública.

La aplicación permite buscar Digimon, filtrarlos por nivel y consultar una ficha individual con la información disponible de cada criatura digital.

## Vista general

DigiDex Web fue diseñado como una enciclopedia digital sencilla, moderna y responsive.

Flujo principal:

Bienvenida → Explorar DigiDex → Catálogo → Buscar/Filtrar → Detalle del Digimon

## Características

- Pantalla de bienvenida.
- Catálogo de Digimon.
- Más de 200 Digimon obtenidos mediante API.
- Búsqueda por nombre.
- Búsqueda case-insensitive.
- Filtro por nivel.
- Tarjetas individuales.
- Vista detallada de cada Digimon.
- Manejo de carga.
- Manejo de errores.
- Estado sin resultados.
- Navegación con Vue Router.
- Diseño responsive.
- Interfaz adaptada para escritorio, tablet y móvil.
- API centralizada mediante un servicio.
- Sin autenticación innecesaria.
- Sin credenciales hardcodeadas.

## Tecnologías

- Vue 3
- Quasar Framework 2
- Vue Router 4
- Pinia
- Axios
- Vite
- JavaScript
- HTML5
- SCSS / CSS

## API

Se utiliza la **Digimon API**:

```
https://digimon-api.vercel.app/api
```

Es una API pública que proporciona principalmente los siguientes datos por cada Digimon:

- `name` — nombre de la criatura
- `img` — URL de la imagen
- `level` — nivel de evolución

La aplicación muestra únicamente la información que la API realmente entrega.

## Rutas principales

| Ruta          | Descripción                          |
| ------------- | ------------------------------------- |
| `/`           | Pantalla de bienvenida.               |
| `/dex`        | Catálogo principal.                   |
| `/dex/:name`  | Detalle del Digimon.                  |

## Estructura del proyecto

```
src/
├── components/
│   ├── DigimonCard.vue
│   └── DigimonFilter.vue
├── css/
├── layouts/
│   └── MainLayout.vue
├── pages/
│   ├── WelcomePage.vue
│   ├── DigimonList.vue
│   ├── DigimonDetail.vue
│   └── ErrorNotFound.vue
├── router/
├── services/
│   └── digimonService.js
└── stores/
```

## Instalación

```bash
git clone https://github.com/Brandon-SC-147/DigiDex-Web.git
cd DigiDex-Web
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Verificación de código

```bash
npm run lint
```

## Autor

Brandon Valenzuela

## Nota

Este proyecto utiliza información proporcionada por una API pública relacionada con Digimon y fue desarrollado con fines educativos y de portafolio.