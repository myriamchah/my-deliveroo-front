import CartLine from "./CartLine";

const Cart = ({ cart, addMeal, removeMeal, showCart }) => {
  const fees = 2.5;
  let subTotal = 0;
  cart.forEach((meal) => {
    subTotal += +meal.price * meal.quantity;
  });

  return (
    <div className="col-right">
      <div className="cart">
        <button
          disabled={subTotal === 0}
          onClick={() => alert("Merci pour votre commande !")}
        >
          Valider mon panier
        </button>
        <div className="cart-content">
          {showCart ? (
            cart.map((meal) => {
              return (
                <CartLine key={meal.title} {...{ addMeal, removeMeal, meal }} />
              );
            })
          ) : (
            <p>Votre panier est vide</p>
          )}
        </div>

        {showCart && (
          <div className="cart-footer">
            <hr />
            <div>
              Sous-total <span>{subTotal} €</span>
            </div>
            <div>
              Frais de livraison <span>{fees} €</span>
            </div>
            <hr />
            <div className="total">
              Total <span>{subTotal + fees} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
