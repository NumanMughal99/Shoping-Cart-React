import "./Home.css";

function Home({ setPage }) {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="small-title">
            WELCOME TO SHOPNOW
          </p>

          <h1>
            Shop Your
            <span> Favorite Products</span>
          </h1>

          <p className="hero-text">
            Discover amazing products at the best prices.
            Shop easily and enjoy a great experience.
          </p>

          <button
            className="shop-btn"
            onClick={() => setPage("products")}
          >
            Shop Now
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
            alt="Shopping"
          />

        </div>

      </section>

      <section className="featured">

        <h2>Featured Products</h2>

        <p>
          Explore our popular products
        </p>

        <div className="featured-cards">

          <div
            className="feature-card"
            onClick={() => setPage("products")}
          >
            <div className="feature-icon">👟</div>
            <h3>Shoes</h3>
            <p>Stylish shoes for everyone</p>
          </div>

          <div
            className="feature-card"
            onClick={() => setPage("products")}
          >
            <div className="feature-icon">⌚</div>
            <h3>Smart Watch</h3>
            <p>Modern smart watches</p>
          </div>

          <div
            className="feature-card"
            onClick={() => setPage("products")}
          >
            <div className="feature-icon">🎧</div>
            <h3>Headphones</h3>
            <p>Enjoy high quality sound</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;