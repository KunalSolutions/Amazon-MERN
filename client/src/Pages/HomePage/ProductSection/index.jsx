import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // import Link

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="border rounded-lg p-4 flex flex-col hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="text-md font-semibold mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-700 mb-2 line-clamp-3">
                {product.description}
              </p>
              <p className="text-lg font-bold text-green-600 mb-2">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Rating: {product.rating?.rate} ⭐ ({product.rating?.count})
              </p>
              <button className="mt-auto bg-amber-400 text-white py-2 px-4 rounded hover:bg-amber-500 transition">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;




