import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService } from '@ngx-translate/core';
import { IconsService } from '@plugins';

// MOCK SERVICES
const mockTranslateService = {
  use: jest.fn(),
  getBrowserLang: jest.fn()
};

const mockIconsService = {
  registerIcons: jest.fn()
};

// TESTS
describe('AppComponent', () => {
  let component: AppComponent;
  let translateService: TranslateService;
  let iconsService: IconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: TranslateService, useValue: mockTranslateService },
        { provide: IconsService, useValue: mockIconsService }
      ]
    });

    translateService = TestBed.inject(TranslateService);
    iconsService = TestBed.inject(IconsService);
    component = TestBed.inject(AppComponent);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should use the correct language', () => {
    const lang = 'en';
    mockTranslateService.getBrowserLang.mockReturnValue(lang);
    component.ngOnInit();
    expect(mockTranslateService.use).toHaveBeenCalledWith(lang);
  });

  it('should register icons', () => {
    component.ngOnInit();
    expect(mockIconsService.registerIcons).toHaveBeenCalled();
  });
});
