
import { createBrowserRouter, Navigate } from "react-router-dom";
import GameViewLayout from "../shared/layouts/GameViewLayout";
import { Equipment } from "../features";

export const ROUTER = createBrowserRouter([
    {
        path: 'game',
        element: <GameViewLayout />,
        children: [
            { path: 'equipment', element: <Equipment /> }
        ],
    },
    {
        path: '*',
        element: <Navigate to="game/equipment" />
    }
])
