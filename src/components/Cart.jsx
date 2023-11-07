import CartLine from "./CartLine";

const Cart = ({ cart, showCart }) => {
  return (
    <div className="col-right">
      <div className="cart">
        <button>Valider mon panier</button>
        <div className="cart-content">
          {showCart
            ? cart.map((meal) => {
                return <CartLine key={meal.title} meal={meal} />;
              })
            : "Votre panier est vide"}
        </div>
      </div>
    </div>
  );
};

export default Cart;
