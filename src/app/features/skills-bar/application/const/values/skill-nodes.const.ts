import { SkillNodeType } from "../../types";

const getTranslateKey = (name: string): string => `skill-bar.nodes.${name}`

const CHARACTER_NODES: SkillNodeType[] = [
  {
    name: getTranslateKey('equipment'),
    iconName: 'item-bag'
  },
  {
    name: getTranslateKey('bank'),
    iconName: 'chest'
  }
]

const FIGHTING_NODES: SkillNodeType[] = [
  {
    name: getTranslateKey('strength'),
    experienceLevel: 1,
    iconName: 'biceps'
  },
  {
    name: getTranslateKey('defence'),
    experienceLevel: 1,
    iconName: 'shield'
  },
  {
    name: getTranslateKey('hitpoints'),
    experienceLevel: 1,
    iconName: 'heart'
  },
  {
    name: getTranslateKey('melee'),
    experienceLevel: 1,
    iconName: 'sword'
  },
  {
    name: getTranslateKey('ranged'),
    experienceLevel: 1,
    iconName: 'bow'
  },
  {
    name: getTranslateKey('magic'),
    experienceLevel: 1,
    iconName: 'magic'
  },
  {
    name: getTranslateKey('rituals'),
    experienceLevel: 1,
    iconName: 'spell-book'
  }
]

const SHAMANISM_NODES: SkillNodeType[] = [
  {
    name: getTranslateKey('rune-carving'),
    experienceLevel: 1,
    iconName: 'rune'
  },
  {
    name: getTranslateKey('alchemy'),
    experienceLevel: 1,
    iconName: 'cauldron'
  },
  {
    name: getTranslateKey('scrolls-writting'),
    experienceLevel: 1,
    iconName: 'scroll'
  },
  {
    name: getTranslateKey('summoning'),
    experienceLevel: 1,
    iconName: 'dragon-egg'
  }
]

const CRAFTSMANSHIP_NODES: SkillNodeType[] = [
  {
    name: getTranslateKey('smithing'),
    iconName: 'anvil',
    experienceLevel: 1
  },
  {
    name: getTranslateKey('cooking'),
    iconName: 'chef-hat',
    experienceLevel: 1
  },
  {
    name: getTranslateKey('woodworking'),
    iconName: 'chisel',
    experienceLevel: 1
  },
  {
    name: getTranslateKey('tailoring'),
    iconName: 'wool',
    experienceLevel: 1
  },
  {
    name: getTranslateKey('leatherworking'),
    iconName: 'leather',
    experienceLevel: 1
  }
]

const HOARDING_NODES: SkillNodeType[] = [
  {
    name: getTranslateKey('woodcutting'),
    experienceLevel: 1,
    iconName: 'axe'
  },
  {
    name: getTranslateKey('herbalism'),
    experienceLevel: 1,
    iconName: 'herbalism'
  },
  {
    name: getTranslateKey('mining'),
    experienceLevel: 1,
    iconName: 'pickaxe'
  },
  {
    name: getTranslateKey('skinning'),
    experienceLevel: 1,
    iconName: 'knife'
  },
  {
    name: getTranslateKey('harvesting'),
    experienceLevel: 1,
    iconName: 'cotton'
  }
]

export const SKILL_NODES: SkillNodeType[] = [
  {
    name: getTranslateKey('character'),
    children: CHARACTER_NODES
  },
  {
    name: getTranslateKey('fighting'),
    children: FIGHTING_NODES
  },
  {
    name: getTranslateKey('shamanism'),
    children: SHAMANISM_NODES
  },
  {
    name: getTranslateKey('craftsmanship'),
    children: CRAFTSMANSHIP_NODES
  },
  {
    name: getTranslateKey('hoarding'),
    children: HOARDING_NODES
  }
]
