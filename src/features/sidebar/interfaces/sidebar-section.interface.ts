import { ReactElement } from "react";

export interface SidebarSectionInterface {
    title: string,
    items: Array<SidebarItemInterface>
}


export interface SidebarItemInterface {
    title: string,
    icon: ReactElement,
    level?: number
}
