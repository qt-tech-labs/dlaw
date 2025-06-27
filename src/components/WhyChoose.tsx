import React from 'react';

const reasons = [
    'Tận tâm & chuyên nghiệp',
    '15+ năm kinh nghiệm',
    'Bảo mật thông tin tuyệt đối',
    'Tư vấn tận nơi, hỗ trợ online',
];

export default function WhyChoose() {
    return (
        <section className="w-full py-16 bg-gradient-to-b from-accent/10 to-light animate-fade-in">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
                <h2 className="font-serif text-3xl font-bold text-navy mb-10 text-center animate-slide-up">Lý do chọn luật sư</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {reasons.map((r) => (
                        <div key={r} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                            <div className="text-3xl mb-2 bg-blue-400 text-navy rounded-full w-12 h-12 flex items-center justify-center shadow group-hover:bg-accent group-hover:text-light transition-all duration-300">✅</div>
                            <div className="font-semibold text-accent">{r}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
