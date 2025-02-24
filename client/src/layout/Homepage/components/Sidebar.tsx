import { NavLink } from "react-router";
import { sidebarItems } from "../../../const/index";

function Sidebar() {
  return (
    <div className="border-r border-r-border grow-[1] h-full">
      <div className="flex flex-col gap-2 p-2">
        {sidebarItems.map(({ img, title, url }, index) => (
          <NavLink
            to={url}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "bg-bg-secondary-accent rounded-lg border-black border"
                : "border border-border rounded-lg"
            }
          >
            <div className="flex items-center py-3 px-5 gap-2 text-lg font-semibold hover:bg-bg-secondary-accent rounded-lg hover:border-black">
              <div className="h-[25px]">
                <img src={img} alt="" className="h-full" />
              </div>
              {title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
