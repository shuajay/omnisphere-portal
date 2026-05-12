import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAttendance } from './feature-attendance';

describe('FeatureAttendance', () => {
  let component: FeatureAttendance;
  let fixture: ComponentFixture<FeatureAttendance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAttendance],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAttendance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
