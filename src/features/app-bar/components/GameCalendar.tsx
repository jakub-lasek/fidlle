import { FC } from "react";
import { CalendarIcon } from "../../../shared/icons";
import { format } from "date-fns";
import { useGameDate } from "../../../shared/hooks";

const GameCalendar: FC = () => {
    const { gameDate } = useGameDate()

    return (
        <div className="flex text-text text-sm font-semibold items-center gap-2">
            <CalendarIcon />
            <div className="flex flex-col items-center">
                <span>{format(gameDate, 'dd.MM.yyyy')}</span>
                <span>{format(gameDate, 'HH:mm')}</span>
            </div>
        </div>
    )
}
export default GameCalendar;
