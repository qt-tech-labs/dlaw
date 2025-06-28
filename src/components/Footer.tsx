import { FaFacebook } from "react-icons/fa";
import ZaloIcon from "/zalo.svg";

export default function Footer() {
    return (
        <footer className="bg-navy text-light py-10 mt-16 animate-fade-in">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-0">
                <div>
                    <div className="font-serif text-2xl font-bold mb-2">Luật sư Nguyễn Tiến Dũng</div>
                    <p className="text-blue-400">Bảo vệ quyền lợi pháp lý của bạn với 15+ năm kinh nghiệm.</p>
                </div>
                <div>
                    <div className="font-semibold mb-2">Menu</div>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline hover:text-blue-400 transition-colors">Trang chủ</a></li>
                        <li><a href="#gioi-thieu" className="hover:underline hover:text-blue-400 transition-colors">Giới thiệu</a></li>
                        <li><a href="#dich-vu" className="hover:underline hover:text-blue-400 transition-colors">Dịch vụ</a></li>
                        <li><a href="#tin-tuc" className="hover:underline hover:text-blue-400 transition-colors">Tin tức</a></li>
                        <li><a href="#lien-he" className="hover:underline hover:text-blue-400 transition-colors">Liên hệ</a></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold mb-2">Liên hệ</div>
                    <p>ĐT: <a href="tel:0378513855" className="underline hover:text-blue-400 transition-colors">0378 513 855</a></p>
                    <div className="flex gap-3 mt-2">
                        <a href="https://www.facebook.com/BildungHumboldt" className="text-xl text-blue-400 transition-colors" aria-label="Facebook"> <FaFacebook /> </a>
                        <a href="https://zalo.me/0378513855" className="text-xl hover:text-blue-400 transition-colors" aria-label="Zalo"> <img src={ZaloIcon} alt="Zalo" className="w-6 h-6" /> </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-blue-400 text-sm mt-8 border-t border-light/20 pt-4">
                &copy; {new Date().getFullYear()} Luật sư Nguyễn Tiến Dũng
            </div>
        </footer>
    );
}
