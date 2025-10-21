import { getTranslations } from "next-intl/server";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GlobalCoverage from "@/components/GlobalCoverage";
import Solutions from "@/components/Solutions";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: { locale: string } }) {
  const t = await getTranslations('Home');
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <GlobalCoverage />
      <Features />
      <Solutions />
      <Footer />
    </div>
  );
}
