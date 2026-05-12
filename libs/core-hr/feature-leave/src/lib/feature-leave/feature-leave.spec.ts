import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureLeave } from './feature-leave';

describe('FeatureLeave', () => {
  let component: FeatureLeave;
  let fixture: ComponentFixture<FeatureLeave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureLeave],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureLeave);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
