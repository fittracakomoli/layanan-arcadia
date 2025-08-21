import MainLayout from "./MainLayout.jsx";

export default function App() {
    return (
        <MainLayout>
            <section className="p-4 text-center flex flex-col justify-center items-center bg-white h-screen">
                <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-4">
                    Layanan HIMA ILKOM UNNES
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">
                    Halaman yang anda akses sedang dalam pemeliharaan.
                </p>
                <a
                    href="https://himailkomunnes.com"
                    className="px-4 md:px-6 py-2 md:py-3 bg-primary text-sm md:text-base text-white rounded-full font-semibold hover:bg-blue-800 transition"
                >
                    Kembali ke Beranda
                </a>
            </section>
        </MainLayout>
    );
}
