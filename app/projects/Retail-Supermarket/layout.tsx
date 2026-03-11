import Header from "./components/Header";
import Footer from "./components/Footer";

export default function CarRentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
