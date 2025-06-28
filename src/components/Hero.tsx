import { BASE_URL } from "./Header";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-[600px] max-h-[720px] w-full pt-20 overflow-hidden animate-fade-in">
            <div className="absolute inset-0 z-0">
                <img src={`${BASE_URL}/hero.jpg`} alt="Law background" className="w-full h-full object-cover blur-sm scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-accent/80" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto text-center text-light px-4">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg animate-slide-up">Luật sư Nguyễn Tiến Dũng – Bảo vệ quyền lợi pháp lý của bạn</h1>
                <p className="text-lg md:text-2xl mb-8 animate-fade-in delay-100">15+ năm kinh nghiệm trong hình sự, dân sự, đất đai, hôn nhân…</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="px-8 py-3 rounded-full bg-blue-400 text-navy font-semibold shadow-lg hover:bg-accent hover:text-light transition-all duration-200 scale-100 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                        Đặt lịch tư vấn
                    </a>
                    <a href="#dich-vu" className="px-8 py-3 rounded-full border border-light text-light hover:bg-light hover:text-navy font-semibold shadow hover:shadow-lg transition-all duration-200 scale-100 hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                        Xem dịch vụ
                    </a>
                </div>
            </div>
        </section>
    );
}
