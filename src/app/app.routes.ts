import { Routes } from '@angular/router';

import { RoutesEnum, RouterOutletsEnum } from '@shared/const';
import { GamePageComponent } from '@pages';
import { StrengthComponent } from '@features';

export const routes: Routes = [
  {
    path: RoutesEnum.GAME,
    loadComponent: () => GamePageComponent,
    children: [
      {
        path: RoutesEnum.STRENGTH,
        loadComponent: () => StrengthComponent,
        outlet: RouterOutletsEnum.GAME_SECTION_OUTLET
      },
    ]
  },
  {
    path: "**",
    redirectTo: RoutesEnum.GAME
  }
];
