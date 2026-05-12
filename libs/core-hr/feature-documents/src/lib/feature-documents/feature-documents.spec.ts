import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDocuments } from './feature-documents';

describe('FeatureDocuments', () => {
  let component: FeatureDocuments;
  let fixture: ComponentFixture<FeatureDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDocuments],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDocuments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
