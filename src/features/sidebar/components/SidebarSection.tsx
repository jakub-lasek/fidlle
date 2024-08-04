import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SidebarItemInterface } from "../interfaces";
import SidebarItem from "./SidebarItem";

interface PropTypes {
    title: string,
    items: Array<SidebarItemInterface>
}

const SidebarSection: FC<PropTypes> = ({ title, items }) => {
    const { t } = useTranslation();

    return (
        <div className="divide-y divide-accent">
            <div className="w-full p-3 flex items-center font-semibold">{t(title)}</div>
            <div className="w-full flex flex-col">
                {items.map((item: SidebarItemInterface) => <SidebarItem key={item.title} {...item} />)}
            </div>
        </div>
    )
}
export default SidebarSection;
