import { FC } from "react";
import GameCalendar from "./components/GameCalendar";

const AppBar: FC = () => {
    return (
        <header className="w-full p-3 bg-base rounded-bl-lg flex">
            <GameCalendar />
        </header>
    )
}
export default AppBar;
