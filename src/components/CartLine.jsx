const CartLine = ({ meal }) => {
  return (
    <div className="cart-line">
      <span>
        <i className="icon-minus"></i> X <i className="icon-plus"></i>
      </span>
      <span>{meal.title}</span>
      <span>{meal.price} €</span>
    </div>
  );
};

export default CartLine;
