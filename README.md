# nextjs-blog-estatico

![stack: Next.js 14](https://img.shields.io/badge/stack--Next.js%2014-0d9488?style=flat-square) ![stack: React 18](https://img.shields.io/badge/stack--React%2018-0d9488?style=flat-square) ![stack: TypeScript](https://img.shields.io/badge/stack--TypeScript-0d9488?style=flat-square) [![Demo](https://img.shields.io/badge/demo-en%20vivo-22c55e?style=flat-square)](https://luisf2020.github.io/nextjs-blog-estatico/)
![IA: asistido](https://img.shields.io/badge/IA--asistido-6366f1?style=flat-square)

Blog estatico con Next.js App Router: rutas dinamicas y generateStaticParams (SSG).

> **Transparencia sobre IA:** este proyecto se desarrollo con asistencia de inteligencia artificial (generacion de codigo, revision y documentacion). El codigo fue leido, ejecutado y probado manualmente antes de publicarse. No declara clientes, metricas ni resultados que no puedan verificarse.

## Problema que resuelve

Publicar un blog con rutas por articulo que pueda servirse como archivos estaticos (sin servidor Node en produccion).

## Solucion implementada

App Router con generateStaticParams: cada slug se genera en el build y se exporta estaticamente con output: "export".

### Funcionalidades principales

- Rutas dinamicas [/slug]
- Generacion estatica (SSG) en build
- Layout raiz con metadatos
- Capa de datos separada (lib/posts.ts)

## Stack

- Next.js 14
- React 18
- TypeScript

## Estructura

```
app/page.tsx            # listado
app/posts/[slug]/page.tsx  # ruta dinamica (SSG)
lib/posts.ts            # fuente de datos
```

## Puesta en marcha

```bash
npm install
npm run dev
npm run build
```

## Complejidad del proyecto

**Nivel: Intermedio** — Framework con enrutado, renderizado en servidor y build de produccion; requiere configurar basePath para un subdirectorio.

El nivel describe la complejidad tecnica del proyecto, no el grado de dominio de quien lo escribio.

## Despliegue

Demo en vivo: <https://luisf2020.github.io/nextjs-blog-estatico/>  
Publicado con GitHub Pages (rama `gh-pages`).

## Autor

**Luis Felipe Zuniga Leon** — Desarrollador de software asistido por IA

- GitHub: <https://github.com/Luisf2020>

---

_Proyecto de portafolio. El desarrollo se apoyo en herramientas de IA bajo revision tecnica humana._
