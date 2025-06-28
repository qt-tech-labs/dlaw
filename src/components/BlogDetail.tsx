import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import blogPosts from "../data/blogPosts";
import { BASE_URL } from "./Header";

export default function BlogDetail() {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="relative min-h-screen font-sans">
            <main className="max-w-screen-xl mx-auto px-4 py-16 pt-20">
                <img src={BASE_URL + post.img} alt={post.title} className="w-full h-60 object-cover rounded-xl mb-4" />
                <div className="prose lg:prose-xl">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </main>
        </div>
    );
}
