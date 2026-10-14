import "./Products.css";

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      category: "Shoes",
      price: 120,
      description: "Comfortable and stylish shoes.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 80,
      description: "Modern smartwatch for everyday use.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Headphones",
      category: "Audio",
      price: 60,
      description: "High quality sound headphones.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Backpack",
      category: "Bags",
      price: 45,
      description: "Perfect backpack for daily use.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="products">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Find your favorite products</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
            />

            <div className="product-info">
              <span className="category">
                {product.category}
              </span>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <div className="product-bottom">
                <strong>${product.price}</strong>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;