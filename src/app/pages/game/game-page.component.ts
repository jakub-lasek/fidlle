import { Component } from "@angular/core";

import { SkillBarComponent } from "@features";
import { GameViewTemplateComponent } from "@ui";

@Component({
  selector: "game-page",
  templateUrl: "./game-page.component.html",
  styleUrl: "./game-page.component.scss",
  standalone: true,
  imports: [GameViewTemplateComponent, SkillBarComponent]
})
export class GamePageComponent { }
