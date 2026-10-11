import Link from 'next/link';
import { listarPosts } from '../lib/posts';

export default function Home() {
  const posts = listarPosts();
  return (
    <main>
      <h1>Blog estatico</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/posts/${p.slug}`}>{p.titulo}</Link>
            <p>{p.resumen}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
