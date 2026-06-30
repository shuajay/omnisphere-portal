import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
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
    it('should render the dashboard container', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.dashboard-container')).toBeTruthy();
    });

    it('should render the top section with chart and stats grid', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.top-section')).toBeTruthy();
      expect(compiled.querySelector('.chart-card')).toBeTruthy();
      expect(compiled.querySelector('.stats-grid')).toBeTruthy();
    });

    it('should render four stat cards in the stats grid', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const statCards = compiled.querySelectorAll('.stats-grid .stat-card');
      expect(statCards.length).toBe(4);
    });

    it('should display correct stat labels', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const labels = compiled.querySelectorAll('.stats-grid .stat-label');
      const labelTexts = Array.from(labels).map((el) => el.textContent?.trim());

      expect(labelTexts).toContain('Active Users');
      expect(labelTexts).toContain('Total Projects');
      expect(labelTexts).toContain('Total Payments');
      expect(labelTexts).toContain('Total Change');
    });

    it('should display correct stat values', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const values = compiled.querySelectorAll('.stats-grid .stat-value');
      const valueTexts = Array.from(values).map((el) => el.textContent?.trim());

      expect(valueTexts).toContain('1,234');
      expect(valueTexts).toContain('776');
      expect(valueTexts).toContain('$2,222');
      expect(valueTexts).toContain('103');
    });

    it('should render the middle section with wide stats and quick access', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.middle-section')).toBeTruthy();
      expect(compiled.querySelector('.wide-stats-card')).toBeTruthy();
      expect(compiled.querySelector('.quick-access-card')).toBeTruthy();
    });

    it('should render quick access items', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const quickAccessItems = compiled.querySelectorAll('.quick-access-item');
      expect(quickAccessItems.length).toBe(3);
    });

    it('should display correct quick access labels', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const items = compiled.querySelectorAll('.quick-access-item');
      const itemTexts = Array.from(items).map((el) => el.textContent?.trim());

      expect(itemTexts).toContain('Dashboard');
      expect(itemTexts).toContain('Tenmark Project');
      expect(itemTexts).toContain('Man in Map');
    });

    it('should render the percent data section', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.percent-data-card')).toBeTruthy();
      expect(compiled.querySelector('.area-chart-placeholder')).toBeTruthy();
    });

    it('should render the data charts card header', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const chartHeader = compiled.querySelector('.chart-card .card-header h3');
      expect(chartHeader?.textContent).toContain('Data Charts');
    });
  });
});
