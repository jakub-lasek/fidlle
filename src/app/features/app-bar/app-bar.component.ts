import { Component } from "@angular/core";
import { CalendarComponent, ProfileComponent, ResourcesComponent } from "./components";

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
  standalone: true,
  imports: [CalendarComponent, ResourcesComponent, ProfileComponent]
})
export class AppBarComponent { }
