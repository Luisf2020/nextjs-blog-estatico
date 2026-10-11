# nextjs-blog-estatico

Blog estatico con Next.js App Router: rutas dinamicas y generateStaticParams (SSG).

> Proyecto de portafolio de Luis Felipe Zuniga Leon. Desarrollado con asistencia de IA
> (generacion de codigo, revision y documentacion); el codigo fue revisado y probado manualmente.
> No declara clientes, metricas ni resultados no verificables.

## Stack

- Next.js 14
- React 18
- TypeScript

## Como ejecutar

```bash
npm install
npm run dev
npm run build
```

## Estructura

```
app/page.tsx            # listado
app/posts/[slug]/page.tsx  # ruta dinamica (SSG)
lib/posts.ts            # fuente de datos
```

## Estado

Muestra tecnica de portafolio. Sin datos de produccion.
