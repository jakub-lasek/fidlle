import { RoutesEnum } from "../../../router/routes.enum";
import { DefenceIcon, HitpointsIcon, ItemBagIcon, MagicIcon, MeleeIcon, RangedIcon, RitualsIcon, StrengthIcon, VillagerIcon } from "../../../shared/icons";
import { SidebarSectionInterface } from "../interfaces";

const translationKey = 'skills';

export const SIDEBAR_SECTIONS: Array<SidebarSectionInterface> = [
    {
        title: `${translationKey}.character`,
        items: [
            {
                title: `${translationKey}.equipment`,
                icon: <ItemBagIcon />,
                path: RoutesEnum.EQUIPMENT
            },
            {
                title: `${translationKey}.village`,
                icon: <VillagerIcon />,
                path: RoutesEnum.VILLAGE
            }
        ]
    },
    {
        title: `${translationKey}.fightin`,
        items: [
            {
                title: `${translationKey}.strength`,
                icon: <StrengthIcon />,
                level: 1,
                path: RoutesEnum.STRENGTH
            },
            {
                title: `${translationKey}.defence`,
                icon: <DefenceIcon />,
                level: 1,
                path: RoutesEnum.DEFENCE
            },
            {
                title: `${translationKey}.endurance`,
                icon: <HitpointsIcon />,
                level: 1,
                path: RoutesEnum.HITPOINTS
            },
            {
                title: `${translationKey}.melee`,
                icon: <MeleeIcon />,
                level: 1,
                path: RoutesEnum.MELEE
            },
            {
                title: `${translationKey}.ranged`,
                icon: <RangedIcon />,
                level: 1,
                path: RoutesEnum.RANGED
            },
            {
                title: `${translationKey}.magic`,
                icon: <MagicIcon />,
                level: 1,
                path: RoutesEnum.MAGIC
            },
            {
                title: `${translationKey}.rituals`,
                icon: <RitualsIcon />,
                level: 1,
                path: RoutesEnum.RITUALS
            }
        ]
    },
]
