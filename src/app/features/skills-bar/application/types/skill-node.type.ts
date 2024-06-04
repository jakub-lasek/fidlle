export type SkillNodeType = {
  name: string;
  children?: SkillNodeType[];
}

export type SkillFlatNodeType = {
  expandable: boolean;
  name: string;
  level: number;
}
