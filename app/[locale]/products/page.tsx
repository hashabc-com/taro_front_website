import Header from "@/components/Header";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  // 验证params但不需要使用locale
  await params;
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <Products />
      </div>
      <Footer />
    </div>
  );
}