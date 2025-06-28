import blogPosts from "../data/blogPosts";
import { BASE_URL } from "./Header";

export default function Blog() {
    return (
        <section id="tin-tuc" className="w-full py-16 bg-light animate-fade-in">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
                <h2 className="font-serif text-3xl font-bold text-navy mb-10 text-center animate-slide-up">Tin tức & Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((p) => (
                        <div key={p.title} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col group animate-fade-in">
                            <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300 shadow" />
                            <div className="font-bold text-lg text-navy mb-2 group-hover:text-blue-400 transition-colors duration-200">{p.title}</div>
                            <div className="text-accent mb-4 line-clamp-2">{p.content}</div>
                            <a href={BASE_URL + 'blog/' + p.id} className="mt-auto text-blue-400 hover:underline hover:text-accent transition-colors duration-200">Xem thêm</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
