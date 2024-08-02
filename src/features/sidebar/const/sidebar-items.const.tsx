import { DefenceIcon, HitpointsIcon, ItemBagIcon, MagicIcon, MeleeIcon, RangedIcon, RitualsIcon, StrengthIcon, VillagerIcon } from "../../../shared/icons";
import { SidebarSectionInterface } from "../interfaces";

export const SIDEBAR_SECTIONS: Array<SidebarSectionInterface> = [
    {
        title: 'Character',
        items: [
            {
                title: 'Equipment',
                icon: <ItemBagIcon />
            },
            {
                title: 'Village',
                icon: <VillagerIcon />
            }
        ]
    },
    {
        title: 'Fighting',
        items: [
            {
                title: 'Strength',
                icon: <StrengthIcon />,
                level: 1
            },
            {
                title: 'Defence',
                icon: <DefenceIcon />,
                level: 1
            },
            {
                title: 'Hitpoints',
                icon: <HitpointsIcon />,
                level: 1
            },
            {
                title: 'Melee',
                icon: <MeleeIcon />,
                level: 1
            },
            {
                title: 'Ranged',
                icon: <RangedIcon />,
                level: 1
            },
            {
                title: 'Magic',
                icon: <MagicIcon />,
                level: 1
            },
            {
                title: 'Rituals',
                icon: <RitualsIcon />,
                level: 1
            }
        ]
    },
]
