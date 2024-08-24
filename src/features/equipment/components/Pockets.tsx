import { FC } from "react";
import { ContentWrapper } from "../../../shared/ui/atoms";
import { GameItemsGrid } from "../../../shared/ui/organisms";

const Pockets: FC = () => {
    return (
        <ContentWrapper title="equipment.panels.pocket">
            <GameItemsGrid items={[]} />
        </ContentWrapper>
    )
}
export default Pockets;
