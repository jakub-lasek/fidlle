import { FC } from "react";

interface PropTypes {
    children: JSX.Element
}

const GroupWrapper: FC<PropTypes> = ({ children }) => {
    return (
        <div className="p-3 bg-base w-100 h-fit rounded-lg">
            {children}
        </div>
    )
}
export default GroupWrapper;
