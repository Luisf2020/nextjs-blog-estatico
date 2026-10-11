import { notFound } from 'next/navigation';
import { listarPosts, obtenerPost } from '../../../lib/posts';

export function generateStaticParams() {
  return listarPosts().map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = obtenerPost(params.slug);
  if (!post) notFound();
  return (

    <article>
      <h1>{post.titulo}</h1>
      <time>{post.fecha}</time>
      <p>{post.resumen}</p>
    </article>
  );
}
