import { Component, InputSignal, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NgStyle } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ResourceType } from "../../application";

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, NgStyle]
})
export class ResourcesComponent {
  resources: InputSignal<ResourceType[]> = input.required<ResourceType[]>()
}
