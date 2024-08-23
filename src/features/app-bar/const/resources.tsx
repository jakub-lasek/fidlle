import { AncientScrollIcon, CrystalIcon, GoldIcon, MagicEssenceIcon } from "../../../shared/icons";
import { ResourceInterface } from "../interfaces";

const translationKey = 'resources';

export const RESOURCES: ResourceInterface[] = [
    {
        name: `${translationKey}.ancientScrolls`,
        icon: <AncientScrollIcon />,
        value: 10,
        color: '#f79a80'
    },
    {
        name: `${translationKey}.magicEssence`,
        icon: <MagicEssenceIcon />,
        value: 5,
        color: '#ffdbef'
    },
    {
        name: `${translationKey}.starCrystals`,
        icon: <CrystalIcon />,
        value: 6,
        color: '#da71ae'
    },
    {
        name: `${translationKey}.gold`,
        icon: <GoldIcon />,
        value: 10000,
        color: '#e8aa3d'
    }
]
