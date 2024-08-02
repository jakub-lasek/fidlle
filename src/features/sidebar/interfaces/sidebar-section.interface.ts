import { ReactElement } from "react";
import { RoutesEnum } from "../../../router/routes.enum";

export interface SidebarSectionInterface {
    title: string,
    items: Array<SidebarItemInterface>
}


export interface SidebarItemInterface {
    title: string,
    icon: ReactElement,
    path: RoutesEnum,
    level?: number
}
