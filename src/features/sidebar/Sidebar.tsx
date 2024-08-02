import { FC } from "react";
import { SIDEBAR_SECTIONS } from "./const";
import { SidebarSectionInterface } from "./interfaces";
import { SidebarSection } from "./components";

const Sidebar: FC = () => {
    return (
        <nav className="w-64 h-full bg-base text-text flex flex-col overflow-auto gap-2.5 py-3 rounded-tr-lg">
            <div className="w-full flex justify-center">
                <img srcSet="/fidlle.png" width={128} height={128} />
            </div>
            {SIDEBAR_SECTIONS.map((section: SidebarSectionInterface) => <SidebarSection {...section} />)}
        </nav>
    )
}
export default Sidebar;
