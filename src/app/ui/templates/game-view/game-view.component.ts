import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'ui-game-view-template',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './game-view.component.html',
})
export class GameViewComponent {

}
