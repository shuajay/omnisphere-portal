import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ShellLayout } from './shell-layout';

describe('ShellLayout', () => {
  let component: ShellLayout;
  let fixture: ComponentFixture<ShellLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellLayout, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('template rendering', () => {
    it('should render the sidebar component', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('lib-sidebar')).toBeTruthy();
    });

    it('should render the topbar component', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('lib-topbar')).toBeTruthy();
    });

    it('should render a router outlet', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('router-outlet')).toBeTruthy();
    });
  });
});
