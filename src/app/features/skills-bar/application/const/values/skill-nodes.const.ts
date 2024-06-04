import { SkillNodeType } from "../../types";

export const SKILL_NODES: SkillNodeType[] = [
  {
    name: 'Character',
    children: [{ name: 'Equipment' }, { name: 'Bank' }],
  },
  {
    name: 'Fighting',
    children: [
      {
        name: 'Strength',
      },
      {
        name: 'Defence',
      },
    ],
  },
]
