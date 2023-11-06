import Meal from "./Meal";

const Menu = ({ categories }) => {
  return (
    <>
      {categories.map((category) => {
        return (
          <div key={category.name}>
            <h2>{category.name}</h2>
            {category.meals.map((meal) => {
              return <Meal {...{ meal }} key={meal.id} />;
            })}
          </div>
        );
      })}
    </>
  );
};

export default Menu;
