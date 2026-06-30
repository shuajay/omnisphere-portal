import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';

export function createComponentTests<T>(
  component: Type<T>,
  name: string
) {
  describe(name, () => {
    let instance: T;
    let fixture: ComponentFixture<T>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [component],
      }).compileComponents();

      fixture = TestBed.createComponent(component);
      instance = fixture.componentInstance;
      await fixture.whenStable();
    });

    it('should create', () => {
      expect(instance).toBeTruthy();
    });
  });
}
