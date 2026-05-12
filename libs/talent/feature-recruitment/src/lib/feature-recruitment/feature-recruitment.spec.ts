import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureRecruitment } from './feature-recruitment';

describe('FeatureRecruitment', () => {
  let component: FeatureRecruitment;
  let fixture: ComponentFixture<FeatureRecruitment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureRecruitment],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureRecruitment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
