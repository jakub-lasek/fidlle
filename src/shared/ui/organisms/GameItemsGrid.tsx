import { FC } from "react";
import { GameItemInterface } from "../interfaces/organisms";
import { GameItem } from "../molecules";

interface PropTypes {
    items: GameItemInterface[]
}

const GameItemsGrid: FC<PropTypes> = ({ items }) => {
    return (
        <>
            {items && items.map((item) => <GameItem {...item} />)}
        </>
    )
}
export default GameItemsGrid;
