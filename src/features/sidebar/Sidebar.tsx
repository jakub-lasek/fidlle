import { FC } from "react";
import { SIDEBAR_SECTIONS } from "./const";
import { SidebarSectionInterface } from "./interfaces";
import { SidebarSection } from "./components";

const Sidebar: FC = () => {
    return (
        <nav className="min-w-64 h-full bg-base text-text flex flex-col overflow-auto gap-2.5 py-3">
            <div className="w-full flex justify-center">
                <img srcSet="/fidlle.png" width={128} height={128} />
            </div>
            {SIDEBAR_SECTIONS.map((section: SidebarSectionInterface) => <SidebarSection key={section.title} {...section} />)}
        </nav>
    )
}
export default Sidebar;
