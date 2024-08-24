import { FC } from "react";
import { GameItemTooltipContent, Icon, Tooltip } from "../atoms";
import { GameItemInterface } from "../interfaces/organisms";

interface PropTypes {
    item: GameItemInterface | null
    excludeBorder: boolean;
}

const GameItem: FC<PropTypes> = ({ excludeBorder, item }) => {
    return (
        <div className={`w-9 h-9 rounded-md flex items-center justify-center ${excludeBorder ? '' : 'border border-text'}`}>
            {item &&
                <Tooltip messageElement={<GameItemTooltipContent name={item.name} stats={item.stats} />}>
                    <Icon iconName={item.iconName} />
                </Tooltip>
            }
        </div>
    );
}

export default GameItem;
