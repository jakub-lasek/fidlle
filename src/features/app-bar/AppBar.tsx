import { FC } from "react";
import { GameCalendar, ResourceItem, Profile } from "./components";
import { RESOURCES } from "./const";
import { ResourceInterface } from "./interfaces";

const AppBar: FC = () => {
    return (
        <header className="w-full p-2 bg-base rounded-b-lg flex justify-between">
            <GameCalendar />
            <div className="flex justify-between items-center gap-8">
                {RESOURCES.map((resource: ResourceInterface) => <ResourceItem key={resource.name} resource={resource} />)}
                <Profile />
            </div>
        </header>
    )
}
export default AppBar;
