import { FC } from "react";
import { ContentWrapper } from "../../../shared/ui/atoms";
import { GameItemsGrid } from "../../../shared/ui/organisms";
import { GameItemInterface } from "../../../shared/ui/interfaces/organisms";

interface PropTypes {
    items?: GameItemInterface[]
}

const Pockets: FC<PropTypes> = ({ items = new Array(8).fill(null) }) => {
    return (
        <ContentWrapper title="equipment.panels.pocket">
            <GameItemsGrid items={items} />
        </ContentWrapper>
    )
}
export default Pockets;
