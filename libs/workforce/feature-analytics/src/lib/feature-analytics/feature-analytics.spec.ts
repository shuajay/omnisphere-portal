import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAnalytics } from './feature-analytics';

describe('FeatureAnalytics', () => {
  let component: FeatureAnalytics;
  let fixture: ComponentFixture<FeatureAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
