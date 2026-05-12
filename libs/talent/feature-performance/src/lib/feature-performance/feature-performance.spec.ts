import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePerformance } from './feature-performance';

describe('FeaturePerformance', () => {
  let component: FeaturePerformance;
  let fixture: ComponentFixture<FeaturePerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePerformance],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePerformance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
