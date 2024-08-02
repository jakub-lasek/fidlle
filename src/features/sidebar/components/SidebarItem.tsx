import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { RoutesEnum } from "../../../router/routes.enum";

interface PropTypes {
    title: string,
    icon: ReactElement,
    path: RoutesEnum
    level?: number,
}

const SidebarItem: FC<PropTypes> = ({ title, icon, level, path }) => {
    return (
        <NavLink to={path} className="aria-[current=page]:bg-accent w-full min-h-12 flex justify-between items-center px-3 cursor-pointer hover:bg-primary">
            <div className="flex items-center gap-2">{icon} {title}</div>
            {level && <div className="font-semibold">({level})</div>}
        </NavLink>
    )
}
export default SidebarItem;
