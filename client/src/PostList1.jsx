import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api/posts.js";

export default function PostList1() {
    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        placeholderData: [{ id: 1, title: "Initial Data" }],
    });

    if (postQuery.status === "loading") {
        return <h1>Loading...</h1>;
    }

    if (postQuery.status === "error") {
        return <h1>{JSON.stringify(postQuery.error)}</h1>;
    }

    return (
        <div>
            <h1>Post List 1</h1>
            <ol>
                {postQuery.data.map((post) => (
                    <div key={post.id}>{post.title}</div>
                ))}
            </ol>
        </div>
    );
}
