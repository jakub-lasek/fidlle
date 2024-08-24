import { FC, lazy, Suspense } from "react";

interface PropTypes {
    iconName: string
}

const Icon: FC<PropTypes> = ({ iconName }) => {
    const IconComponent = lazy(() => import(`../../icons/${iconName}`))

    return (
        <Suspense>
            <IconComponent />
        </Suspense>
    )
}
export default Icon;
