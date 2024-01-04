import Link from "next/link";

interface PostData {
  name: string;
  email: string;
  body: string;
  postId: number;
  id: number;
}

interface Props {
  posts: PostData[];
}

export default function PostsList({ posts }: Props) {
  return posts.map((post: PostData) => (
    <Link
      href={`/intro/posts/${post.id}`}
      key={post.id}
      className="h-[150px] w-[500px] bg-lime-400 flex justify-center items-center text-center p-4 my-1 rounded-md"
    >
      <p className="text-xs text-white font-bold mr-3">{post.id}</p>
      <p className="text-sm">{post.body}</p>
    </Link>
  ));
}
