
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Equipment, Village } from "../features";
import { RoutesEnum } from "./routes.enum";
import { GamePage } from "../pages";

export const ROUTER = createBrowserRouter([
    {
        path: RoutesEnum.GAME,
        element: <GamePage />,
        children: [
            { path: RoutesEnum.EQUIPMENT, element: <Equipment /> },
            { path: RoutesEnum.VILLAGE, element: <Village /> },
            { path: RoutesEnum.STRENGTH, element: <Village /> },
            { path: RoutesEnum.DEFENCE, element: <Village /> },
            { path: RoutesEnum.HITPOINTS, element: <Village /> },
            { path: RoutesEnum.MELEE, element: <Village /> },
            { path: RoutesEnum.RANGED, element: <Village /> },
            { path: RoutesEnum.MAGIC, element: <Village /> },
            { path: RoutesEnum.RITUALS, element: <Village /> }
        ],
    },
    {
        path: '*',
        element: <Navigate to="game/equipment" />
    }
])
