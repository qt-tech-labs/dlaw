import React from 'react';

export default function Intro() {
    return (
        <section id="gioi-thieu" className="w-full bg-light py-16 animate-fade-in">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-0 items-center">
                <div className="flex justify-center">
                    <img src="/public/lawyer-portrait.jpg" alt="Luật sư Nguyễn Tiến Dũng" className="rounded-2xl shadow-xl w-64 h-80 object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <div>
                    <h2 className="font-serif text-3xl font-bold text-navy mb-4 animate-slide-up">Giới thiệu</h2>
                    <p className="text-lg text-accent mb-2">Luật sư Nguyễn Tiến Dũng có <span className="font-bold text-blue-400">15 năm kinh nghiệm</span> trong lĩnh vực hình sự, dân sự, đất đai, hôn nhân và nhiều lĩnh vực pháp lý khác.</p>
                    <p className="text-accent">Chúng tôi cam kết bảo vệ quyền lợi pháp lý tối đa cho khách hàng với sự tận tâm, chuyên nghiệp và hiệu quả.</p>
                </div>
            </div>
        </section>
    );
}
