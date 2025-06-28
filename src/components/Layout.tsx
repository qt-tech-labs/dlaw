import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="relative min-h-screen font-sans">
            <Header />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
