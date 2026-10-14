import "./Cart.css";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setPage,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty 🛒</h1>

          <p>
            You have not added any product yet.
          </p>

          <button onClick={() => setPage("products")}>
            Go to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-item-info">
                <h2>{item.name}</h2>

                <p>${item.price}</p>

                <div className="quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>
              </div>

              <strong>
                ${item.price * item.quantity}
              </strong>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <p>
            Total: <strong>${total}</strong>
          </p>

          <button
            onClick={() =>
              alert("Checkout coming soon!")
            }
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;