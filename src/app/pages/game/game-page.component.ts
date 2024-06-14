import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { SkillBarComponent } from "@features";
import { RouterOutletsEnum } from "@shared/const";
import { GameViewTemplateComponent } from "@shared/ui";

@Component({
  selector: "game-page",
  templateUrl: "./game-page.component.html",
  styleUrl: "./game-page.component.scss",
  standalone: true,
  imports: [GameViewTemplateComponent, SkillBarComponent, RouterOutlet]
})
export class GamePageComponent {
  public readonly routerOutletsEnum = RouterOutletsEnum;
}
