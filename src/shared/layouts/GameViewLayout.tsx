import { FC } from "react";
import Sidebar from "../../features/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const GameViewLayout: FC = () => {
    return (
        <main className="h-screen w-screen flex bg-secondary gap-2.5">
            <Sidebar />
            <Outlet />
        </main>
    )
}
export default GameViewLayout;
