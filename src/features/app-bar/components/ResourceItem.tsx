import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ResourceInterface } from "../interfaces";
import { useIntl } from "../../../shared/hooks";
import { Tooltip } from "../../../shared/ui/atoms";

interface PropTypes {
    resource: ResourceInterface
}

const ResourceItem: FC<PropTypes> = ({ resource }) => {
    const { formatter } = useIntl()
    const { t } = useTranslation()

    return (
        <Tooltip messageElement={<>{t(resource.name)}</>}>
            <div className="flex gap-2 items-center group select-none">
                {resource.icon}
                <span className="font-semibold" style={{ color: resource.color }}>{formatter.format(resource.value)}</span>
            </div>
        </Tooltip >
    )
}
export default ResourceItem;
