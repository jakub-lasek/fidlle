import { ResourceType } from "../../types";
import { ResourceEnum } from "../enums";

export const RESOURCES: ResourceType[] = [
  {
    name: ResourceEnum.FOOD,
    value: 10,
    iconName: 'food',
    color: '#fa6b5a'
  },
  {
    name: ResourceEnum.SCROLL,
    value: 10,
    iconName: 'ancient-scroll',
    color: '#f79a80'
  },
  {
    name: ResourceEnum.ESSENCE,
    value: 5,
    iconName: 'magic-essence',
    color: '#965c5c'
  },
  {
    name: ResourceEnum.CRYSTAL,
    value: 6,
    iconName: 'crystal',
    color: '#a03774'
  },
  {
    name: ResourceEnum.GOLD,
    value: 10000,
    iconName: 'gold-ingot',
    color: '#e8aa3d'
  }
]
