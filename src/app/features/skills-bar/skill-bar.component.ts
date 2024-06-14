import { FlatTreeControl } from "@angular/cdk/tree";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from "@angular/material/tree";
import { TranslateModule } from "@ngx-translate/core";

import { RouterOutletsEnum } from "@shared/const";

import { SkillFlatNodeType, SkillNodeType, SKILL_NODES } from "./application";

@Component({
  selector: "skill-bar",
  templateUrl: "./skill-bar.component.html",
  styleUrl: "./skill-bar.component.scss",
  standalone: true,
  imports: [NgOptimizedImage, MatTreeModule, MatButtonModule, MatIconModule, NgClass, TranslateModule, RouterLink, RouterLinkActive]
})
export class SkillBarComponent implements OnInit {
  ngOnInit(): void {
    this.treeControl.expandAll();
  }

  private _transformer = (node: SkillNodeType, level: number): SkillFlatNodeType => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      iconName: node.iconName,
      experienceLevel: node.experienceLevel,
      url: node.url,
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

  generateRouterLink(url: string): unknown[] {
    return [{ outlets: { [RouterOutletsEnum.GAME_SECTION_OUTLET]: [url] } }]
  }
}
