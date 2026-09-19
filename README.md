# DigiDex Web

DigiDex Web es una aplicación web interactiva desarrollada con Astro que permite explorar el universo Digimon mediante información obtenida desde una API pública.

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

- Astro 5
- JavaScript
- HTML5
- CSS
- Fetch API (sin Axios)

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
│   ├── DigimonCard.astro
│   └── DigimonFilter.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── dex/
│   │   ├── index.astro
│   │   └── [name].astro
│   └── 404.astro
├── services/
│   └── digimonService.js
└── styles/
    └── global.css
```

## Instalación

```bash
git clone https://github.com/Brandon-SC-147/DigiDex.git
cd DigiDex
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Vista previa de producción

```bash
npm run build
npm run preview
```

## Autor

Brandon Valenzuela

## Nota

Este proyecto utiliza información proporcionada por una API pública relacionada con Digimon y fue desarrollado con fines educativos y de portafolio.