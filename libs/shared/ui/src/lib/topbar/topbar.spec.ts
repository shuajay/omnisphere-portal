import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Topbar } from './topbar';

describe('Topbar', () => {
  let component: Topbar;
  let fixture: ComponentFixture<Topbar>;

  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');

    await TestBed.configureTestingModule({
      imports: [Topbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Topbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('theme initialization', () => {
    it('should default to light theme when no saved theme exists', () => {
      expect(component['isDarkTheme']).toBe(false);
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('should initialize with dark theme when saved theme is dark', async () => {
      localStorage.setItem('theme', 'dark');

      const newFixture = TestBed.createComponent(Topbar);
      const newComponent = newFixture.componentInstance;
      await newFixture.whenStable();

      expect(newComponent['isDarkTheme']).toBe(true);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should initialize with light theme when saved theme is light', async () => {
      localStorage.setItem('theme', 'light');

      const newFixture = TestBed.createComponent(Topbar);
      const newComponent = newFixture.componentInstance;
      await newFixture.whenStable();

      expect(newComponent['isDarkTheme']).toBe(false);
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });
  });

  describe('toggleTheme', () => {
    it('should switch from light to dark theme', () => {
      component.toggleTheme();

      expect(component['isDarkTheme']).toBe(true);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('should switch from dark to light theme', () => {
      component.toggleTheme(); // light -> dark
      component.toggleTheme(); // dark -> light

      expect(component['isDarkTheme']).toBe(false);
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(localStorage.getItem('theme')).toBe('light');
    });

    it('should persist theme preference to localStorage', () => {
      component.toggleTheme();
      expect(localStorage.getItem('theme')).toBe('dark');

      component.toggleTheme();
      expect(localStorage.getItem('theme')).toBe('light');
    });
  });

  describe('logout', () => {
    it('should log a message to the console', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      component.logout();
      expect(consoleSpy).toHaveBeenCalledWith('User logged out');
      consoleSpy.mockRestore();
    });
  });

  describe('icon properties', () => {
    it('should have all required icon references defined', () => {
      expect(component.faSun).toBeDefined();
      expect(component.faMoon).toBeDefined();
      expect(component.faBell).toBeDefined();
      expect(component.faCircleQuestion).toBeDefined();
      expect(component.faCircleUser).toBeDefined();
      expect(component.faSearch).toBeDefined();
    });
  });

  describe('template rendering', () => {
    it('should render the logo title', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.logo-title')?.textContent).toContain('Omnisphere Portal');
    });

    it('should render a search input', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const input = compiled.querySelector('.search-input') as HTMLInputElement;
      expect(input).toBeTruthy();
      expect(input.placeholder).toBe('Search...');
    });

    it('should render the theme toggle button', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const buttons = compiled.querySelectorAll('.btn-icon');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should render the user dropdown with profile, settings, and logout links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const dropdownContent = compiled.querySelector('.dropdown-content');
      expect(dropdownContent).toBeTruthy();
      const links = dropdownContent!.querySelectorAll('a');
      expect(links.length).toBe(3);
      expect(links[0].textContent).toContain('Profile');
      expect(links[1].textContent).toContain('Settings');
      expect(links[2].textContent).toContain('Logout');
    });
  });
});
