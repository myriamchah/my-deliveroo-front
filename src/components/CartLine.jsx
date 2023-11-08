const CartLine = ({ addMeal, removeMeal, meal }) => {
  return (
    <div
      className="cart-line"
      style={{ display: meal.quantity <= 0 ? "none" : "" }}
    >
      <span>
        <i className="icon-minus" onClick={() => removeMeal(meal)}></i>{" "}
        {meal.quantity}
        <i className="icon-plus" onClick={() => addMeal(meal)}></i>
      </span>
      <span>{meal.title}</span>
      <span>{meal.price} €</span>
    </div>
  );
};

export default CartLine;
