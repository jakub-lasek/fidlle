import { FC } from "react";
import { v4 as generateUuidv4 } from "uuid"
import { GameItemInterface } from "../interfaces/organisms";
import { GameItem } from "../molecules";

interface PropTypes {
    items: GameItemInterface[],
    excludeItemsBorder?: boolean
}

const GameItemsGrid: FC<PropTypes> = ({ items, excludeItemsBorder = false }) => {
    return (
        <div className="flex gap-2.5 justify-center items-center">
            {items && items.map((item: GameItemInterface) => <GameItem key={generateUuidv4()} item={item} excludeBorder={excludeItemsBorder} />)}
        </div>
    )
}
export default GameItemsGrid;
