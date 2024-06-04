export type SkillNodeType = {
  name: string;
  iconName?: string;
  experienceLevel?: number;
  children?: SkillNodeType[];
}

export type SkillFlatNodeType = {
  expandable: boolean;
  name: string;
  level: number;
  iconName?: string;
  experienceLevel?: number;
}
