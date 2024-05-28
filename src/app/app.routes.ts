import { Routes } from '@angular/router';
import { RoutesEnum } from './shared/enums';
import { GamePageComponent } from './pages/game/game-page.component';

export const routes: Routes = [
  {
    path: RoutesEnum.GAME,
    component: GamePageComponent
  },
  {
    path: "**",
    redirectTo: RoutesEnum.GAME
  }
];
