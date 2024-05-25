import { Component } from '@angular/core';
import { GameViewComponent } from '@ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
