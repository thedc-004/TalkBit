import { Link } from "react-router";
import "../styles/Header.css";
import { menuItems } from "../../../const/index.ts";

function Header() {
  return (
    <div className="h-20 border-b border-b-border flex justify-between items-center">
      <div className="h-full sm:p-3 m-1">
        <Link to="/">
          <img
            src="/logoWithText.png"
            alt=""
            className="h-full responsive-image min-w-[30px]"
          />
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center mx-4">
        <input
          type="text"
          placeholder="Search here... "
          className="py-3 px-5 w-full max-w-[720px] bg-bg-secondary-accent rounded-full min-w-[100px]"
        />
      </div>
      <div className="flex sm:gap-5 gap-1 sm:mr-5">
        {menuItems.map(({ img, title }, index) => (
          <button
            className="border border-border p-3 cursor-pointer rounded-lg flex items-center justify-center hover:bg-bg-secondary-accent "
            key={index}
          >
            <img src={img} className="sm:mr-1 max-w-[25px]" />
            <span className="navmenu-item-text">{title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Header;
