const Meal = ({ meal, cart, setCart, setShowCart }) => {
  return (
    <div
      className="card"
      onClick={() => {
        console.log(cart);
        const newCart = cart;
        newCart.push(meal);
        setCart(newCart);
        setShowCart(true);
      }}
    >
      <div>
        <h3>{meal.title}</h3>
        <p>{meal.description}</p>
        <span className="price">{meal.price} €</span>
        {meal.popular && (
          <span className="popular">
            <i className="icon-BADGE_STAR"></i>
            Populaire
          </span>
        )}
      </div>
      {meal.picture && <img src={meal.picture} alt="meal" />}
    </div>
  );
};

export default Meal;
