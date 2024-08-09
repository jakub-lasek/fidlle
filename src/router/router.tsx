
import { createBrowserRouter, Navigate } from "react-router-dom";
import GameViewLayout from "../shared/layouts/GameViewLayout";
import { Equipment, Village } from "../features";
import { RoutesEnum } from "./routes.enum";

export const ROUTER = createBrowserRouter([
    {
        path: RoutesEnum.GAME,
        element: <GameViewLayout />,
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
