import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GlobalCoverage from "@/components/GlobalCoverage";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // 验证params但不需要使用locale和t
  await params;
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <GlobalCoverage />
      <Features />
      <Solutions />
      <Footer />
    </div>
  );
}
