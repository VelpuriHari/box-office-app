import { Link } from "react-router-dom";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Starred",
    to: "/Starred",
  },
];

const Nav = () => {
  return (
    <dev>
      <ul>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text} </Link>
          </li>
        ))}
      </ul>
    </dev>
  );
};
export default Nav;
