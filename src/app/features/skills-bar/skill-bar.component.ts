import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "skill-bar",
  templateUrl: "./skill-bar.component.html",
  styleUrl: "./skill-bar.component.scss",
  standalone: true,
  imports: [NgOptimizedImage]
})
export class SkillBarComponent { }
