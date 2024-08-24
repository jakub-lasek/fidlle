import { FC } from "react";
import { GroupWrapper } from "../../shared/ui/atoms";
import { CharacterEq, Inventory, Pockets, Statistics } from "./components";

const Equipment: FC = () => {
    return (
        <section className="flex flex-col gap-2.5">
            <div className="flex gap-2.5">
                <GroupWrapper>
                    <div className="flex flex-col gap-5">
                        <CharacterEq />
                        <Pockets />
                    </div>
                </GroupWrapper>
                <GroupWrapper>
                    <Statistics />
                </GroupWrapper>
            </div>
                <GroupWrapper>
                    <Inventory />
                </GroupWrapper>
        </section>
    )
}
export default Equipment;
