import logo from "../assets/img/logo-teal.svg";

const Header = ({ restaurant }) => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo Deliveroo" />
      </nav>
      <div className="container banner">
        <div className="banner-desc">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
        </div>
        <img src={restaurant.picture} alt="tasty plates" width="350" />
      </div>
    </header>
  );
};

export default Header;
