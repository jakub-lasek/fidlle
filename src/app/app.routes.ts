import { Routes } from '@angular/router';

import { RoutesEnum } from '@shared';
import { GamePageComponent } from '@pages';
import { RouterOutletsEnum } from '@const';
import { StrengthComponent } from '@features';

export const routes: Routes = [
  {
    path: RoutesEnum.GAME,
    loadComponent: () => GamePageComponent
  },
  {
    path: RoutesEnum.STRENGTH,
    loadComponent: () => StrengthComponent,
    outlet: RouterOutletsEnum.GAME_SECTION_OUTLET
  },
  {
    path: "**",
    redirectTo: RoutesEnum.GAME
  }
];
