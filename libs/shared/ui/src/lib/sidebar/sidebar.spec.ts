import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Sidebar } from './sidebar';

describe('Sidebar', () => {
  let component: Sidebar;
  let fixture: ComponentFixture<Sidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebar, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Sidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('icon properties', () => {
    it('should have all required icon references defined', () => {
      expect(component.faUsers).toBeDefined();
      expect(component.faUser).toBeDefined();
      expect(component.faMedal).toBeDefined();
      expect(component.faTachographDigital).toBeDefined();
      expect(component.faBriefcase).toBeDefined();
      expect(component.faCreditCard).toBeDefined();
      expect(component.faChartSimple).toBeDefined();
    });
  });

  describe('template rendering', () => {
    it('should render the sidebar element', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.sidebar')).toBeTruthy();
    });

    it('should render a logo container', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.logo-container')).toBeTruthy();
    });

    it('should render navigation with menu items', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const menuItems = compiled.querySelectorAll('.remote-menu li');
      expect(menuItems.length).toBe(6);
    });

    it('should have correct navigation links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.remote-menu a');
      expect(links.length).toBe(6);

      const hrefs = Array.from(links).map(
        (link) => link.getAttribute('href') || link.getAttribute('routerLink')
      );
      expect(hrefs).toContain('/dashboard');
      expect(hrefs).toContain('/coreHr');
      expect(hrefs).toContain('/workforce');
      expect(hrefs).toContain('/talent');
      expect(hrefs).toContain('/finance');
      expect(hrefs).toContain('/analytics');
    });

    it('should display correct menu item labels', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const menuItems = compiled.querySelectorAll('.remote-menu li');
      const labels = Array.from(menuItems).map((li) => li.textContent?.trim());

      expect(labels).toContain('Dashboard');
      expect(labels).toContain('Core HR');
      expect(labels).toContain('Workforce');
      expect(labels).toContain('Talent');
      expect(labels).toContain('Finance');
      expect(labels).toContain('Analytics');
    });
  });
});
