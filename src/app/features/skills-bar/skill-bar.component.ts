import { FlatTreeControl } from "@angular/cdk/tree";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from "@angular/material/tree";
import { SkillFlatNodeType, SkillNodeType, SKILL_NODES } from "./application";

@Component({
  selector: "skill-bar",
  templateUrl: "./skill-bar.component.html",
  styleUrl: "./skill-bar.component.scss",
  standalone: true,
  imports: [NgOptimizedImage, MatTreeModule, MatButtonModule, MatIconModule, NgClass]
})
export class SkillBarComponent {
  private _transformer = (node: SkillNodeType, level: number): SkillFlatNodeType => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      iconName: node.iconName,
      experienceLevel: node.experienceLevel,
      level
    }
  }

  treeControl = new FlatTreeControl<SkillFlatNodeType>(
    node => node.level,
    node => node.expandable,
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener, SKILL_NODES);

  hasChild = (_: number, node: SkillFlatNodeType) => node.expandable;

}
