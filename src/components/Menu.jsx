import Meal from "./Meal";

const Menu = ({ categories }) => {
  return (
    <>
      {categories
        .filter((category) => category.meals.length)
        .map((category) => {
          return (
            <div className="container" key={category.name}>
              <h2>{category.name}</h2>
              <div className="cards">
                {category.meals.map((meal) => {
                  return <Meal {...{ meal }} key={meal.id} />;
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Menu;
