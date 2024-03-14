const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    if (query?.userId) {
      (async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${query.userId}&_limit=3`
        );
        const posts = await res.json();
        posts.length >= 1 && setPosts(posts);
      })();
    }
  }, [query?.userId]);

  return (
    <main className={`pb-14 mt-28 max-w-[800px] mx-auto`}>
      <ul className={"grid grid-cols-3 gap-x-4 gap-y-8 items-center"}>
        {posts.map((post) => (
          <li key={post.id}>
            <span className={"px-5 pb-6 mt-5 block font-medium capitalize"}>
              {post.title}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};
