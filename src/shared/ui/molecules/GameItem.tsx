import { FC, lazy, Suspense } from "react";
import { GameItemTooltipContent, Tooltip } from "../atoms";

interface PropTypes {
    name: string,
    iconName: string,
    stats: Record<string, string | number>,
    excludeBorder?: boolean;
}

const GameItem: FC<PropTypes> = ({ excludeBorder = false, iconName, name, stats }) => {
    const IconComponent = lazy(() => import(`../../icons/${iconName}`))

    return (
        <Tooltip messageElement={<GameItemTooltipContent name={name} stats={stats} />}>
            <div className={`w-9 h-9 rounded-md flex items-center justify-center ${excludeBorder ? '' : 'border border-text'}`}>
                <Suspense fallback={<></>}>
                    <IconComponent />
                </Suspense>
            </div>
        </Tooltip>
    );
}

export default GameItem;
