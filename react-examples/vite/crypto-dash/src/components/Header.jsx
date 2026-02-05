import { Link } from "react-router";
const Header = () => {
  {
    //Заменено с Link за да не рендърва от 0-лата. Работи само за страници от проекта, за външни -> a href
    /*<a href="/">Home</a>
        <a href="/about">About</a>*/
  }
  return (
    <div className="top-nav">
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
    </div>
  );
};

export default Header;
