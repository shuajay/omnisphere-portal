import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePayroll } from './feature-payroll';

describe('FeaturePayroll', () => {
  let component: FeaturePayroll;
  let fixture: ComponentFixture<FeaturePayroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePayroll],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePayroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
