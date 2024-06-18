import { DatePipe } from "@angular/common";
import { Component, InputSignal, input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, DatePipe]
})
export class CalendarComponent {
  gameDate: InputSignal<Date> = input<Date>(new Date());
}
