import PostsList from "./PostsList";

const PostsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const postData = await res.json();
  console.log(postData)

  return (
    <>
      <h1>pösts</h1>
      <PostsList posts={postData} />
    </>
  );
};

export default PostsPage;
