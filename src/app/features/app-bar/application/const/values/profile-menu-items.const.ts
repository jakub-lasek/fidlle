import { ProfileMenuItemType } from "../../types";

const TRANSLATE_PATH: string = "app-bar.profile-panel"

export const PROFILE_MENU_ITEMS: ProfileMenuItemType[] = [
  {
    text: `${TRANSLATE_PATH}.profile`,
    iconName: 'profile'
  },
  {
    text: `${TRANSLATE_PATH}.stats`,
    iconName: 'chart',
  },
  {
    text: `${TRANSLATE_PATH}.settings`,
    iconName: 'settings'
  },
  {
    text: `${TRANSLATE_PATH}.logout`,
    iconName: 'logout',
    textColor: '#fb1616'
  }
]
