import { subYears } from "date-fns"

const useGameDate = () => {

    const getGameDate = (): Date => subYears(new Date(), 800)

    return { getGameDate }
}
export default useGameDate;
