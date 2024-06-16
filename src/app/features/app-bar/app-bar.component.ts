import { Component, WritableSignal, signal } from "@angular/core";
import { CalendarComponent, ProfileComponent, ResourcesComponent } from "./ui";
import { RESOURCES, ResourceType } from "./application";

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
  standalone: true,
  imports: [CalendarComponent, ResourcesComponent, ProfileComponent]
})
export class AppBarComponent {
  resources: WritableSignal<ResourceType[]> = signal<ResourceType[]>(RESOURCES);
}
