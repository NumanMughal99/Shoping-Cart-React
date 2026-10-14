import { useState } from "react";
import "./App.css";

import Home from "./assets/Components/Home";
import Products from "./assets/Components/Products";
import Cart from "./assets/Components/Cart";
import About from "./assets/Components/About";
import Contact from "./assets/Components/Contact";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  // ADD PRODUCT
  const addToCart = (product) => {
    setCart((oldCart) => {
      const existing = oldCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setPage("products");
  };

  // PLUS
  const increaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // MINUS
  const decreaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  // TOTAL ITEMS
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2
          className="logo"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          Shop<span>Now</span>
        </h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("products")}>
            Products
          </button>

          <button onClick={() => setPage("cart")}>
            Cart ({cartCount})
          </button>

          <button onClick={() => setPage("about")}>
            About
          </button>

          <button onClick={() => setPage("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* PAGES */}

      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "products" && (
        <Products addToCart={addToCart} />
      )}

      {page === "cart" && (
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          setPage={setPage}
        />
      )}

      {page === "about" && <About />}

      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;