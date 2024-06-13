import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IconsService } from '@plugins';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly translateService = inject(TranslateService);
  private readonly iconsService = inject(IconsService);


  ngOnInit() {
    this.iconsService.registerIcons();
    this.translateService.use(this.translateService.getBrowserLang() || 'en')
  }

}
