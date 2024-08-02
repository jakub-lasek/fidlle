import { FC } from "react";
import { SidebarItemInterface } from "../interfaces";
import SidebarItem from "./SidebarItem";

interface PropTypes {
    title: string,
    items: Array<SidebarItemInterface>
}

const SidebarSection: FC<PropTypes> = ({ title, items }) => {
    return (
        <div className="divide-y divide-accent">
            <div className="w-full p-3 flex items-center font-semibold">{title}</div>
            <div className="w-full flex flex-col">
                {items.map((item: SidebarItemInterface) => <SidebarItem {...item} />)}
            </div>
        </div>
    )
}
export default SidebarSection;
