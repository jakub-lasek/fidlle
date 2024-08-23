import { FC } from "react";
import { ResourceInterface } from "../interfaces";

interface PropTypes {
    resource: ResourceInterface
}

const ResourceItem: FC<PropTypes> = ({ resource }) => {
    return (
        <div className="flex gap-2 items-center">
            {resource.icon}
            <span className={`font-semibold text-[${resource.color}]`}>{resource.value}</span>
        </div>
    )
}
export default ResourceItem;
