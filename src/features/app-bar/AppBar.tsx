import { FC } from "react";
import { GameCalendar } from "./components";
import ResourceItem from "./components/ResourceItem";
import { RESOURCES } from "./const";
import { ResourceInterface } from "./interfaces";
import { SkeletonIcon } from "../../shared/icons";

const AppBar: FC = () => {
    return (
        <header className="w-full p-3 bg-base rounded-bl-lg flex justify-between">
            <GameCalendar />
            <div className="flex justify-between items-center gap-8">
                {RESOURCES.map((resource: ResourceInterface) => <ResourceItem resource={resource} />)}
                <SkeletonIcon />
            </div>
        </header>
    )
}
export default AppBar;
