import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionFourComponent } from './seccion-four.component';

describe('SeccionFourComponent', () => {
  let component: SeccionFourComponent;
  let fixture: ComponentFixture<SeccionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionFourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
