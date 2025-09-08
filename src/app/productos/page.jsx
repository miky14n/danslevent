import ProductGrid from "@/components/ProductGrid";

export default function productos(params) {
  const products = [
    {
      image: "/edit 6.png",
      name: "VSOP",
      link: "/productos/vsop",
    },
  ];

  return (
    <section className="text-center text-tertiary mt-24">
      <h2 className="text-4xl font-bold mb-4">Nuestra línea de Destilados</h2>
      <p className="max-w-2xl mx-auto mb-10 mt-5 text-[18px]">
        Todos nuestros destilados se elaboran 100% con uvas francesas
        seleccionadas de la región de Coñac y se añejan en barricas de roble
        Troncáis. Suave y elegante, cada botella ofrece un carácter único, ideal
        para disfrutar solo o en cócteles sofisticados..
      </p>
      <ProductGrid products={products} />
    </section>
  );
}
