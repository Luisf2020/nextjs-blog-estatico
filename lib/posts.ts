export type Post = { slug: string; titulo: string; resumen: string; fecha: string };

const POSTS: Post[] = [
  { slug: 'arquitectura-modular', titulo: 'Arquitectura modular', resumen: 'Separar datos, logica y UI.', fecha: '2026-02-01' },
  { slug: 'pruebas-de-bloqueo', titulo: 'Pruebas de bloqueo', resumen: 'Verificar herencia de estados.', fecha: '2026-02-18' },
];

export function listarPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function obtenerPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
