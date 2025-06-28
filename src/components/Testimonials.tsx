import { BASE_URL } from "./Header";

const testimonials = [
    {
        quote: 'Luật sư Dũng rất tận tâm và chuyên nghiệp, giúp tôi giải quyết vụ việc nhanh chóng.',
        name: 'Nguyễn Văn Trung',
        avatar: `${BASE_URL}test1.webp`,
    },
    {
        quote: 'Tôi rất hài lòng với dịch vụ tư vấn pháp lý, rõ ràng và hiệu quả.',
        name: 'Trần Thị Hoa',
        avatar: `${BASE_URL}test2.jpg`,
    },
    {
        quote: 'Luật sư hỗ trợ tận nơi, giải đáp mọi thắc mắc của tôi.',
        name: 'Phạm Văn Thanh',
        avatar: `${BASE_URL}test3.webp`,
    },
];

export default function Testimonials() {
    return (
        <section className="w-full bg-cyan-500 py-16 bg-light animate-fade-in">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
                <h2 className="font-serif text-3xl font-bold text-navy mb-10 text-center animate-slide-up">Khách hàng nói gì?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={t.name} className={`bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center italic animate-fade-in`} style={{ animationDelay: `${idx * 100}ms` }}>
                            <div className="text-4xl text-blue-400 mb-2">❝</div>
                            <div className="mb-4">{t.quote}</div>
                            <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full mb-2 object-cover border-4 border-blue-400 shadow" />
                            <div className="font-semibold text-accent">{t.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
