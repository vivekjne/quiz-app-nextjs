import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faChevronDown,
  faChevronRight,
  faQuestionCircle,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export type SidebarListItemProps = {
  label: string;
  icon: IconDefinition;
  href: string;
  onClick: () => void;
  isActive: boolean;
};

const SidebarListItem = ({
  label,
  icon,
  href,
  onClick,
  isActive = false,
}: SidebarListItemProps) => {
  return (
    <li className=" mb-2" onClick={onClick}>
      <div className="flex items-center justify-between hover:bg-gray-100 p-2 cursor-pointer">
        <div className="space-x-4">
          <FontAwesomeIcon icon={icon} className="text-indigo-700" />
          <a href={href}>{label}</a>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-gray-400"
          size="sm"
        />
      </div>
      {isActive && (
        <ul className="ml-8 mt-2 text-gray-500 text-sm">
          <li className="mb-2">
            <a>List questions</a>
          </li>

          <li className="mb-2">
            <a>+Add question</a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default SidebarListItem;
