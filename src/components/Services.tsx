const services = [
    { icon: '⚖️', name: 'Tư vấn pháp luật', desc: 'Tư vấn các vấn đề pháp lý hình sự, dân sự, đất đai, hôn nhân...', href: '#' },
    { icon: '🏠', name: 'Đất đai & Nhà ở', desc: 'Giải quyết tranh chấp, thủ tục pháp lý về đất đai, nhà ở.', href: '#' },
    { icon: '👪', name: 'Hôn nhân & Gia đình', desc: 'Tư vấn ly hôn, quyền nuôi con, phân chia tài sản...', href: '#' },
    { icon: '💼', name: 'Doanh nghiệp', desc: 'Tư vấn pháp lý cho doanh nghiệp, hợp đồng, lao động...', href: '#' },
];

export default function Services() {
    return (
        <section id="dich-vu" className="w-full hover:shadow-2xl bg-amber-500 transition-all duration-300 py-16 bg-light animate-fade-in">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0">
                <h2 className="font-serif text-3xl font-bold text-amber-50 mb-10 text-center animate-slide-up">Dịch vụ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((s) => (
                        <div key={s.name} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center text-center group animate-fade-in">
                            <div className="text-5xl mb-4 bg-blue-400 text-navy rounded-full w-16 h-16 flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-light transition-all duration-300">
                                {s.icon}
                            </div>
                            <div className="font-bold text-xl mb-2 text-navy">{s.name}</div>
                            <div className="text-accent mb-4">{s.desc}</div>
                            <a href={s.href} className="mt-auto px-4 py-2 rounded-full border border-blue-400 text-blue-400 font-semibold hover:bg-blue-400 hover:text-white shadow transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none">Xem chi tiết</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
