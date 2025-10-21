import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  // 验证params但不需要使用locale
  await params;
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </div>
  );
}