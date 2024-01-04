import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-100 h-full">
      <Navbar/>
      <main className="h-full p-4 ">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
