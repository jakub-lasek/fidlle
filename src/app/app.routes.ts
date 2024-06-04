import { Routes } from '@angular/router';

import { RoutesEnum } from '@shared';
import { GamePageComponent } from '@pages';

export const routes: Routes = [
  {
    path: RoutesEnum.GAME,
    loadComponent: () => GamePageComponent
  },
  {
    path: "**",
    redirectTo: RoutesEnum.GAME
  }
];
