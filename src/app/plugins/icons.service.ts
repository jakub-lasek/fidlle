import { Injectable, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ICONS } from "@const";

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  private readonly matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer: DomSanitizer = inject(DomSanitizer)


  public registerIcons(): void {
    ICONS.forEach((iconName: string) => {
      this.matIconRegistry.addSvgIcon(iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`))
    })
  }
}
