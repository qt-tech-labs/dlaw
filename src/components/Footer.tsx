import { FaFacebook } from "react-icons/fa";
import ZaloIcon from "/zalo.svg";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-black to-blue-500 text-white py-10 mt-16 animate-fade-in">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-0">
                <div>
                    <div className="font-serif text-2xl font-bold mb-2">Luật sư Nguyễn Tiến Dũng</div>
                    <p className="text-light/80">Bảo vệ quyền lợi pháp lý của bạn với 15+ năm kinh nghiệm.</p>
                </div>
                <div>
                    <div className="font-semibold mb-2">Menu</div>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline hover:text-light transition-colors">Trang chủ</a></li>
                        <li><a href="#gioi-thieu" className="hover:underline hover:text-light transition-colors">Giới thiệu</a></li>
                        <li><a href="#dich-vu" className="hover:underline hover:text-light transition-colors">Dịch vụ</a></li>
                        <li><a href="#tin-tuc" className="hover:underline hover:text-light transition-colors">Tin tức</a></li>
                        <li><a href="#lien-he" className="hover:underline hover:text-light transition-colors">Liên hệ</a></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold mb-2">Liên hệ</div>
                    <p>ĐT: <a href="tel:0378513855" className="underline hover:text-light transition-colors">0378 513 855</a></p>
                    <div className="flex gap-3 mt-2">
                        <a href="https://www.facebook.com/BildungHumboldt" className="p-2 bg-white text-blue-500 rounded-full shadow-md hover:bg-blue-100 transition-colors" aria-label="Facebook"> <FaFacebook className="w-5 h-5" /> </a>
                        <a href="https://zalo.me/0378513855" className="p-2 bg-white text-blue-500 rounded-full shadow-md hover:bg-blue-100 transition-colors" aria-label="Zalo"> <img src={ZaloIcon} alt="Zalo" className="w-5 h-5" /> </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-light/80 text-sm mt-8 border-t border-light/20 pt-4">
                &copy; {new Date().getFullYear()} Luật sư Nguyễn Tiến Dũng. All rights reserved.
            </div>
        </footer>
    );
}
