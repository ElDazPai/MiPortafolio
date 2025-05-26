import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrheComponent } from './section-trhe.component';

describe('SectionTrheComponent', () => {
  let component: SectionTrheComponent;
  let fixture: ComponentFixture<SectionTrheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTrheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTrheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
