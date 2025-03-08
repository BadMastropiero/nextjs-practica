import React from "react";
import Lista from "@/componentes/Lista";

type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
}

export default function Posts({ posts }: Props) {
  return (
    <div>
      <h1>Lista de Posts (SSG)</h1>
      <ul>
        {posts.map((post) => (
          //   <li key={post.id}>{post.title}</li>
          <Lista key={post.id} id={post.id} title={post.title} />
        ))}
      </ul>
    </div>
  );
}
