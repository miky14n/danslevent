import InfoCard from "@/components/InfoCard";
import { cocktailsData } from "./data/dataCocktails";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";
import ListoCocktails from "../page";
export default function CocktailDetail({ params }) {
  const cocktail = cocktailsData.find((c) => c.id === params.id);

  const cocktails = [
    {
      image: "/images/sidecar.png",
      name: "Sidecar",
      link: "",
    },
    {
      image: "/images/Brandy-Alexander.png",
      name: "Brandy Alexander",
      link: "",
    },
    {
      image: "/images/French-Conection.png",
      name: "French Connection",
      link: "",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 space-y-20 ">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start">
        {/* Imagen de la botella */}
        <div className="flex justify-center items-center">
          <Image
            src={cocktail.image}
            alt={cocktail.id}
            width={320}
            height={320}
            className="rounded-2xl shadow-2xl object-contain max-w-full h-auto"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-tertiary">
            {cocktail.title}
          </h1>
          <p className="text-quaternary leading-relaxed text-lg">
            {cocktail.description}
          </p>
          <hr />
          <h2 className="text-quaternary leading-relaxed text-lg">
            Ingredientes
          </h2>
          {cocktail.ingredients.map((ingredients, index) => (
            <p className="text-quaternary leading-relaxed text-lg" key={index}>
              * {ingredients}
            </p>
          ))}
          <hr />
          <h2 className="text-quaternary leading-relaxed text-lg">Preparado</h2>
          <p className="text-quaternary leading-relaxed text-lg">
            {cocktail.preparation}
          </p>
        </div>
      </section>

      {/* OTRAS OPCIONES */}
      <section className="">
        <h2 className="text-center text-2xl font-semibold text-tertiary">
          Otras opciones de Cócteles
        </h2>
        {/*} <ProductGrid products={cocktails} />*/}

        <ListoCocktails />
      </section>
    </section>
  );
}
