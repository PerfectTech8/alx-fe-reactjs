import { useQuery } from "@tanstack/react-query";

// Fetch function (pure async function)
const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery(
    { queryKey: ["posts"],       
      queryFn: fetchPosts,     // Query key (cache identifier) and  Fetch function
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus,
      keepPreviousData
    }
  );

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <button onClick={refetch}>
        Refetch Posts
      </button>

      {isFetching && <p>Updating data...</p>}

      <ul>
        {data.slice(0, 10).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
