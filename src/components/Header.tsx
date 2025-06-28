export const BASE_URL = import.meta.env.BASE_URL;

const menu = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '#gioi-thieu' },
    { label: 'Dịch vụ', href: '#dich-vu' },
    { label: 'Tin tức', href: '#tin-tuc' },
    { label: 'Liên hệ', href: '#lien-he' },
];

export default function Header() {
    return (
        <header className="bg-white w-full h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-lg z-50 fixed top-0 left-0 border-b border-accent/10 transition-all duration-300 animate-fade-in">
            <div className="font-serif text-2xl font-bold text-light tracking-tight">
                <img src={`${BASE_URL}logo.png`} alt="Logo" className="inline-block h-8 mr-2" />
                Luật sư Nguyễn Tiến Dũng</div>
            <nav className="hidden md:flex gap-8 items-center">
                {menu.map((item) => (
                    <a key={item.label} href={item.href} className="text-light font-medium hover:text-blue-400 transition-colors duration-200">
                        {item.label}
                    </a>
                ))}
                <a href="tel:0123456789" className="ml-4 px-5 py-2 rounded-full bg-blue-400 text-navy font-semibold shadow-md hover:bg-accent hover:text-light transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none">
                    Gọi ngay: ☎️ 0378 513 855
                </a>
            </nav>
        </header>
    );
}
