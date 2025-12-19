import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"; // Back icon

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // for navigation
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product) return <div className="text-center py-10">Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // go back to previous page
        className="flex items-center cursor-pointer text-gray-700 mb-6 hover:text-gray-900"
      >
        <BiArrowBack className="mr-2 text-2xl" />
        Back
      </button>

      {/* Product Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-sm text-gray-500">
            Category: <span className="capitalize">{product.category}</span>
          </p>
            <p className="text-sm text-gray-500">
            Rating: {product.rating?.rate} ⭐ ({product.rating?.count} reviews)
          </p>
          <button className="mt-4 bg-amber-400 text-white py-2 px-6 rounded hover:bg-amber-500 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
