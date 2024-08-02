import { FC, ReactElement } from "react";

interface PropTypes {
    title: string,
    icon: ReactElement,
    level?: number
}

const SidebarItem: FC<PropTypes> = ({ title, icon, level }) => {
    return (
        <div className="w-full min-h-12 flex justify-between items-center px-3 cursor-pointer hover:bg-primary">
            <div className="flex items-center gap-2">{icon} {title}</div>
            {level && <div className="font-semibold">({level})</div>}
        </div>
    )
}
export default SidebarItem;
