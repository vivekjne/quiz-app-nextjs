import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export type NavbarProps = {
  children?: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className="py-4 px-8  w-full border-b">
      <div className="flex items-center justify-between mx-auto">
        <div className=" flex items-center">
          <a className="text-2xl font-bold tracking-wide text-indigo-700">
            QUIZ APP
          </a>
        </div>

        <ul className="flex items-center space-x-4">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBell} className="text-indigo-700" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
