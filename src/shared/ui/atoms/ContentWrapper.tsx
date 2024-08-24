import { FC } from "react";
import { useTranslation } from "react-i18next";

interface PropTypes {
    title: string,
    children: JSX.Element
}

const GroupWrapper: FC<PropTypes> = ({ children, title }) => {
    const { t } = useTranslation();

    return (
        <div className="p-1.5 bg-primary w-full h-fit rounded-lg flex flex-col items-center justify-start gap-1.5 select-none">
            <div className="pb-1.5 border-b border-text w-full text-center">
                <span className="text-text font-semibold">{t(title)}</span>
            </div>
            {children}
        </div>
    )
}
export default GroupWrapper;
