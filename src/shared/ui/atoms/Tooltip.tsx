import { FC } from "react";

interface PropTypes {
    messageElement: JSX.Element,
    children: JSX.Element
}

const Tooltip: FC<PropTypes> = ({ messageElement, children }) => {
    return (
        <div className="group relative flex max-w-max flex-col items-center justify-center select-none">
            {children}
            <div className="absolute left-1/2 top-10 ml-auto mr-a uto min-w-max -translate-x-1/2 scale-0 transform rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 group-hover:scale-100">
                <div className="rounded bg-base p-2 text-center text-s text-text min-w-max shadow-lg items-center flex">
                    {messageElement}
                </div>
            </div>
        </div>
    );
}
export default Tooltip;

