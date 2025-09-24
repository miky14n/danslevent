import CardDetail from "@/components/CardDetail";

export default function Cocteleria(params) {
  const listOfCocktails = [
    {
      image: "/images/sidecar.png",
      title: "Sidecar",
      description:
        "Clásico cóctel de brandy con licor de naranja y limón fresco, de sabor cítrico y elegante.",
      link: "/cocteles/sidecar",
    },
    {
      image: "/images/crusta.jpg",
      title: "Crusta",
      description:
        "Clásico cóctel de brandy con licor de naranja y limón fresco, de sabor cítrico y elegante.",
      link: "/cocteles/crusta",
    },
  ];
  return (
    <section className="">
      <div>
        {listOfCocktails.map((cocktailDetails, index) => (
          <CardDetail key={index} {...cocktailDetails} />
        ))}
      </div>
    </section>
  );
}
