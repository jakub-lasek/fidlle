import { RoutesEnum } from "../../../router/routes.enum";
import { DefenceIcon, HitpointsIcon, ItemBagIcon, MagicIcon, MeleeIcon, RangedIcon, RitualsIcon, StrengthIcon, VillagerIcon } from "../../../shared/icons";
import { SidebarSectionInterface } from "../interfaces";

export const SIDEBAR_SECTIONS: Array<SidebarSectionInterface> = [
    {
        title: 'Character',
        items: [
            {
                title: 'Equipment',
                icon: <ItemBagIcon />,
                path: RoutesEnum.EQUIPMENT
            },
            {
                title: 'Village',
                icon: <VillagerIcon />,
                path: RoutesEnum.VILLAGE
            }
        ]
    },
    {
        title: 'Fighting',
        items: [
            {
                title: 'Strength',
                icon: <StrengthIcon />,
                level: 1,
                path: RoutesEnum.STRENGTH
            },
            {
                title: 'Defence',
                icon: <DefenceIcon />,
                level: 1,
                path: RoutesEnum.DEFENCE
            },
            {
                title: 'Endurance',
                icon: <HitpointsIcon />,
                level: 1,
                path: RoutesEnum.HITPOINTS
            },
            {
                title: 'Melee',
                icon: <MeleeIcon />,
                level: 1,
                path: RoutesEnum.MELEE
            },
            {
                title: 'Ranged',
                icon: <RangedIcon />,
                level: 1,
                path: RoutesEnum.RANGED
            },
            {
                title: 'Magic',
                icon: <MagicIcon />,
                level: 1,
                path: RoutesEnum.MAGIC
            },
            {
                title: 'Rituals',
                icon: <RitualsIcon />,
                level: 1,
                path: RoutesEnum.RITUALS
            }
        ]
    },
]
