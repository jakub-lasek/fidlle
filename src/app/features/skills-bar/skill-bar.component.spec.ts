import { RouterOutletsEnum } from "@shared/const";
import { SkillBarComponent } from "./skill-bar.component";

describe('SkillBarComponent', () => {
  let component: SkillBarComponent;

  beforeEach(() => {
    component = new SkillBarComponent();
  })

  it('should create component', () => {
    expect(component).toBeTruthy();
  })

  it('should generate correct router link', () => {
    const url = 'test-url';
    const result = component.generateRouterLink(url);

    expect(result).toEqual([{ outlets: { [RouterOutletsEnum.GAME_SECTION_OUTLET]: [url] } }])
  })
})
