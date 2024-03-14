export const getServerSideProps = async ({ query }) => {
  const posts = await api.getContentList({
    referenceName: "posts",
    languageCode: "en-us",
    sort: "properties.date",
  });

  if (query?.filter) {
    const [year, month] = query.filter;
    const filteredPosts = posts.items.filter(({ fields: post }) => {
      const date = new Date(post.date);
      if (date.getFullYear() === +year) {
        if (month && date.getMonth() + 1 === +month) return post;
        else if (!month) return post;
      }
    });

    return {
      props: {
        posts: filteredPosts,
      },
    };
  }

  return {
    props: {
      posts: posts.items,
    },
  };
};

export default function Home({ posts }) {
  return (
    <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
      <ul className={"grid grid-cols-3 gap-x-4 gap-y-8 items-center"}>
        {posts.map((post, index) => (
          <PostCard postFields={post.fields} key={index} />
        ))}
      </ul>
    </main>
  );
}
