import { Component } from "@angular/core";
import { NgStyle } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { TranslateModule } from "@ngx-translate/core";
import { PROFILE_MENU_ITEMS, ProfileMenuItemType } from "../../application";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, TranslateModule, NgStyle]
})
export class ProfileComponent {
  readonly profileItems: ProfileMenuItemType[] = PROFILE_MENU_ITEMS;
}
