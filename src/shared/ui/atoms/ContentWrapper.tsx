import { FC } from "react";

interface PropTypes {
    children: JSX.Element
}

const GroupWrapper: FC<PropTypes> = ({ children }) => {
    return (
        <div className="p-1.5 bg-primary w-100 h-fit rounded-lg flex flex-col items-center justify-start gap-1.5 select-none">
            <div className="pb-1.5 border-b border-text w-full text-center">
                <span className="text-text font-semibold">Pocket Items</span>
            </div>
            {children}
        </div>
    )
}
export default GroupWrapper;
