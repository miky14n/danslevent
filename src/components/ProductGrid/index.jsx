"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) return null;

  const isSingle = products.length === 1;

  return (
    <div
      className={`grid gap-8 ${
        isSingle
          ? "place-items-center"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      }`}
    >
      {products.map((product, index) => (
        <Link
          key={index}
          href={product.link}
          className="flex flex-col items-center text-center group"
        >
          <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-2xl font-semibold text-yellow-200">
            {product.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
