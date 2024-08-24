import { FC, ReactElement } from "react";
import { Tooltip } from "../atoms";

interface PropTypes {
    icon: ReactElement
    excludeBorder?: boolean;
}

const GameItem: FC<PropTypes> = ({ excludeBorder = false, icon }) => {
    return (
        <Tooltip message="item">
            <div className={`w-9 h-9 rounded-md flex items-center justify-center ${excludeBorder ? '' : 'border border-text'}`}>
                {icon}
            </div>
        </Tooltip>
    );
}

export default GameItem;
