# DigiDex Web

DigiDex Web es una aplicación web interactiva desarrollada con Astro que permite explorar el universo Digimon mediante información obtenida desde una API pública.

La aplicación permite buscar Digimon, filtrarlos por nivel y consultar una ficha individual con la información disponible de cada criatura digital.

> Este repositorio es la versión actual del proyecto (Astro). La versión anterior con Vue + Quasar se conserva como recuerdo en [DigiDex-Web](https://github.com/Brandon-SC-147/DigiDex-Web).

## Vista general

DigiDex Web fue diseñado como una enciclopedia digital sencilla, moderna y responsive.

Flujo principal:

Bienvenida → Explorar DigiDex → Catálogo → Buscar/Filtrar → Detalle del Digimon

## Características

- Pantalla de bienvenida con conteo real de Digimon.
- Catálogo de Digimon.
- Más de 200 Digimon obtenidos mediante API.
- Búsqueda por nombre.
- Búsqueda case-insensitive.
- Filtro por nivel.
- Tarjetas individuales con efecto sensor al pasar el mouse.
- Vista detallada de cada Digimon (prerenderizada en el build).
- Manejo de carga.
- Manejo de errores con reintento y tiempo máximo de espera.
- Estado sin resultados.
- Página 404 personalizada.
- Diseño responsive.
- Interfaz adaptada para escritorio, tablet y móvil.
- API centralizada mediante un servicio (`fetch` con timeout).
- Acceso directo al sitio oficial de Digimon con su logo.
- Favicon propio.
- Sin autenticación innecesaria.
- Sin credenciales hardcodeadas.

## Tecnologías

- Astro 5 (sitio estático)
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

La aplicación muestra únicamente la información que la API realmente entrega. Las fichas de detalle se generan en el build (`getStaticPaths`) y el catálogo se sincroniza en el cliente con un timeout de 15 segundos.

## Rutas principales

| Ruta         | Descripción                          |
| ------------ | ------------------------------------- |
| `/`          | Pantalla de bienvenida.               |
| `/dex`       | Catálogo principal.                   |
| `/dex/:name` | Detalle del Digimon (prerenderizado). |

## Estructura del proyecto

```
public/
├── favicon.svg          # Favicon propio
├── official-logo.png    # Logo del sitio oficial de Digimon
└── backgrounds/
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

El servidor de desarrollo corre en `http://localhost:4321`.

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
