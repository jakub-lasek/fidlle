import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, AppBar } from "../features";

const GameViewLayout: FC = () => {
    return (
        <main className="h-screen w-screen flex bg-secondary gap-2.5">
            <Sidebar />
            <section className="w-full h-full flex flex-col gap-3 pr-2.5">
                <AppBar />
                <Outlet />
            </section>
        </main>
    )
}
export default GameViewLayout;
