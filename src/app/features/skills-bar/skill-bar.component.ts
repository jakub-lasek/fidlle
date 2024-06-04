import { FlatTreeControl } from "@angular/cdk/tree";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from "@angular/material/tree";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
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
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: "skill-bar",
  templateUrl: "./skill-bar.component.html",
  styleUrl: "./skill-bar.component.scss",
  standalone: true,
  imports: [NgOptimizedImage, MatTreeModule, MatButtonModule, MatIconModule, NgClass]
})
export class SkillBarComponent {
  private _transformer = (node: FoodNode, level: number): ExampleFlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener, TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}
