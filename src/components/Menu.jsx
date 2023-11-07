import Meal from "./Meal";

const Menu = ({ categories, cart, setCart, setShowCart }) => {
  return (
    <div className="col-left">
      {categories
        .filter((category) => category.meals.length)
        .map((category) => {
          return (
            <div key={category.name}>
              <h2>{category.name}</h2>
              <div className="cards">
                {category.meals.map((meal) => {
                  return (
                    <Meal
                      {...{ meal, cart, setCart, setShowCart }}
                      key={meal.id}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Menu;
