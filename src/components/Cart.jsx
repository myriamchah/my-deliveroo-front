import CartLine from "./CartLine";

const Cart = ({ cart, showCart }) => {
  return (
    <div className="col-right">
      <div className="cart">
        <button>Valider mon panier</button>
        <div className="cart-content">
          {showCart ? (
            cart.map((meal) => {
              return <CartLine key={meal.title} meal={meal} />;
            })
          ) : (
            <p>Votre panier est vide</p>
          )}
        </div>

        {showCart && (
          <div className="cart-footer">
            <hr />
            <div>
              Sous-total <span>xx €</span>
            </div>
            <div>
              Frais de livraison <span>xx €</span>
            </div>
            <hr />
            <div className="total">
              Total <span>xx €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
