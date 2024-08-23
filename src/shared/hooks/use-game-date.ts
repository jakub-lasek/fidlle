import { useEffect, useState } from "react"
import { subYears } from "date-fns"

const useGameDate = () => {

    const [gameDate, setGameDate] = useState(subYears(new Date(), 8000))

    useEffect(() => {
        const updateGameDate = () => {
            setGameDate(subYears(new Date(), 800))
        }

        updateGameDate();

        const intervalId = setInterval(updateGameDate, 60_000)

        return () => clearInterval(intervalId);
    })

    return { gameDate }
}
export default useGameDate;
