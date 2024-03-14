// pages/posts/[slug].js

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const posts = await api.getContentList({
    referenceName: "posts",
    languageCode: "en-us",
  });

  const post = posts.items?.find((post) => post.fields.slug === slug);

  return {
    props: {
      post: post.fields,
    },
  };
};

const PostItem = ({ post }) => {
  return (
    <main className={"pb-14 mt-28 max-w-[800px] mx-auto"}>
      <div
        className={
          "mt-10 border-b-2 pb-3 border-[#ccc] flex justify-between items-center"
        }
      >
        <h1
          className={
            "font-bold text-3xl capitalize leading-relaxed max-w-[500px]"
          }
        >
          {post.title}
        </h1>
        <span className={"text-xs text-[#aaa]"}>
          {new Date(post.date).toDateString()}
        </span>
      </div>
      <div
        className={"blog-body mt-10"}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
};
export default PostItem;
