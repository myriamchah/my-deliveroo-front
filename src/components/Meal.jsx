const Meal = ({ meal }) => {
  return (
    <>
      <div className="card">
        <div>
          <h3>{meal.title}</h3>
          <p>{meal.description}</p>
          <span>{meal.price} €</span>
          {meal.popular && (
            <span>
              <i className="icon-BADGE_STAR"></i>
              Populaire
            </span>
          )}
        </div>
        <img src={meal.picture} alt="meal" width="130" />
      </div>
    </>
  );
};

export default Meal;

// id: "1519055545-88",
// title: "Brunch authentique 1 personne",
// description: "Assiette de jambon cuit, jambon fumeì, terrine, comté bio & camembert bio, salade jeunes pousses, oeuf poché bio, pain bio & confiture, 1 viennoiserie bio au choix, granola parfait bio, jus de fruits 33cl au choix",
// price: "25.00",
// picture: "https://f.roocdn.com/images/menu_items/1583350/item-image.jpg",
// popular: true
