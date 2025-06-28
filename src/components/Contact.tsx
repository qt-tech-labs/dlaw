import { BASE_URL } from "./Header";

export default function Contact() {
    return (
        <section id="lien-he" className="w-full py-16 bg-light animate-fade-in">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-0 items-center">
                <form className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 animate-fade-in">
                    <h2 className="font-serif text-3xl font-bold text-navy mb-4 animate-slide-up">Liên hệ / Đặt lịch tư vấn</h2>
                    <input type="text" placeholder="Họ tên" className="border border-accent rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                    <input type="tel" placeholder="Số điện thoại" className="border border-accent rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all duration-200" required />
                    <select className="border border-accent rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all duration-200" required>
                        <option>Dịch vụ quan tâm</option>
                        <option>Tư vấn pháp luật</option>
                        <option>Đất đai & Nhà ở</option>
                        <option>Hôn nhân & Gia đình</option>
                        <option>Doanh nghiệp</option>
                    </select>
                    <textarea placeholder="Nội dung" className="border border-accent rounded-2xl px-4 py-2 focus:ring-2 focus:ring-blue-400 transition-all duration-200" rows={4} required />
                    <button type="submit" className="px-6 py-3 rounded-full bg-blue-400 text-navy font-semibold shadow-lg hover:bg-accent hover:text-light transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none">Gửi thông tin</button>
                </form>
                <div className="flex justify-center items-center animate-fade-in">
                    <img src={`${BASE_URL}avatar.png`} alt="Văn phòng luật sư" className="rounded-2xl shadow-xl w-full h-80 object-cover transition-transform duration-300 hover:scale-105" />
                </div>
            </div>
        </section>
    );
}
