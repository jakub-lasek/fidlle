import { SkillNodeType } from "../../types";

const CHARACTER_NODES: SkillNodeType[] = [
  {
    name: 'Equipment',
    iconName: 'item-bag'
  },
  {
    name: 'Bank',
    iconName: 'bank'
  }
]

const FIGHTING_NODES: SkillNodeType[] = [
  {
    name: 'Strength',
    experienceLevel: 1,
    iconName: 'biceps'
  },
  {
    name: 'Defence',
    experienceLevel: 1,
    iconName: 'shield'
  },
  {
    name: 'Hitpoints',
    experienceLevel: 1,
    iconName: 'heart'
  },
  {
    name: 'Melee',
    experienceLevel: 1,
    iconName: 'sword'
  },
  {
    name: 'Ranged',
    experienceLevel: 1,
    iconName: 'bow'
  },
  {
    name: 'Magic',
    experienceLevel: 1,
    iconName: 'magic'
  },
  {
    name: 'Rituals',
    experienceLevel: 1,
    iconName: 'spell-book'
  }
]

const SHAMANISM_NODES: SkillNodeType[] = [
  {
    name: 'Rune carving',
    experienceLevel: 1,
    iconName: 'rune'
  },
  {
    name: 'Alchemy',
    experienceLevel: 1,
    iconName: 'cauldron'
  },
  {
    name: 'Scrolls writing',
    experienceLevel: 1,
    iconName: 'scroll'
  },
  {
    name: 'Summoning',
    experienceLevel: 1,
    iconName: 'dragon-egg'
  }
]

const CRAFTSMANSHIP_NODES: SkillNodeType[] = [
  {
    name: 'Smithing',
    iconName: 'anvil',
    experienceLevel: 1
  },
  {
    name: 'Cooking',
    iconName: 'chef-hat',
    experienceLevel: 1
  },
  {
    name: 'Woodworking',
    iconName: 'chisel',
    experienceLevel: 1
  },
  {
    name: 'Tailoring',
    iconName: 'wool',
    experienceLevel: 1
  },
  {
    name: 'Leatherworking',
    iconName: 'leather',
    experienceLevel: 1
  }
]

const HOARDING_NODES: SkillNodeType[] = [
  {
    name: 'Woodcutting',
    experienceLevel: 1,
    iconName: 'axe'
  },
  {
    name: 'Herbalism',
    experienceLevel: 1,
    iconName: 'herbalism'
  },
  {
    name: 'Mining',
    experienceLevel: 1,
    iconName: 'pickaxe'
  },
  {
    name: 'Skinning',
    experienceLevel: 1,
    iconName: 'knife'
  },
  {
    name: 'Harvesting',
    experienceLevel: 1,
    iconName: 'cotton'
  }
]

export const SKILL_NODES: SkillNodeType[] = [
  {
    name: 'Character',
    children: CHARACTER_NODES
  },
  {
    name: 'Fighting',
    children: FIGHTING_NODES
  },
  {
    name: 'Shamanism',
    children: SHAMANISM_NODES
  },
  {
    name: 'Craftsmanship',
    children: CRAFTSMANSHIP_NODES
  },
  {
    name: 'Hoarding',
    children: HOARDING_NODES
  }
]
