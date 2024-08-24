import { FC } from "react"
import { useTranslation } from "react-i18next"

interface PropTypes {
    name: string,
    stats: Record<string, string | number>
}

const GameItemTooltipContent: FC<PropTypes> = ({ name, stats }) => {
    const { t } = useTranslation();

    return (<div className="w-32 flex flex-col gap-2 text-text">
        <div className="font-semibold text-sm">{name}</div>
        {Object.entries(stats).map(([key, value]) => (
            <div className="flex justify-between">
                <div>{t(`itemStats.${key}`)}</div>
                <div>{value}</div>
            </div>
        ))}
    </div>)
}
export default GameItemTooltipContent;
