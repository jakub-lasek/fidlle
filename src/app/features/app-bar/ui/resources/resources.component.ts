import { Component, InputSignal, input } from "@angular/core";
import { FabButtonAtomComponent } from "@shared/ui/atoms";
import { ResourceType } from "../../application";

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
  standalone: true,
  imports: [FabButtonAtomComponent]
})
export class ResourcesComponent {
  resources: InputSignal<ResourceType[]> = input.required<ResourceType[]>()
}
