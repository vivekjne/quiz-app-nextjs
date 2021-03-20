import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faChevronDown,
  faChevronRight,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import SidebarListItem from "./SidebarListItem";

export type SidebarProps = {
  children?: React.ReactChildren;
};
const Sidebar = ({ children }: SidebarProps) => {
  const [activeLink, setActiveLink] = React.useState("");
  return (
    <div className="bg-white rounded-2xl shadow-lg fixed top-0 left-0 bottom-0  w-64 px-4 py-8">
      <div className="flex items-center justify-between mb-12 p-2">
        <h2 className="font-bold text-xl text-indigo-700">Menu</h2>
        <button>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            className="text-indigo-700"
          />
        </button>
      </div>

      <nav>
        <ul>
          <SidebarListItem
            onClick={() =>
              setActiveLink((prev) => (prev === "questions" ? "" : "questions"))
            }
            icon={faQuestionCircle}
            label="Questions"
            href="/questions"
            isActive={activeLink === "questions"}
          />

          <SidebarListItem
            onClick={() =>
              setActiveLink((prev) => (prev === "users" ? "" : "users"))
            }
            icon={faUser}
            label="Users"
            href="/users"
            isActive={activeLink === "users"}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
