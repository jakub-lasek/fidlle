import { FC } from "react";
import { CalendarIcon } from "../../../shared/icons";
import { format } from "date-fns";
import { useGameDate } from "../../../shared/hooks";

const GameCalendar: FC = () => {
    const { getGameDate } = useGameDate()

    return (
        <div className="flex text-text text-sm font-semibold items-center gap-2 select-none">
            <CalendarIcon />
            <div className="flex flex-col items-center">
                <span>{format(getGameDate(), 'dd.MM.yyyy')}</span>
            </div>
        </div>
    )
}
export default GameCalendar;
