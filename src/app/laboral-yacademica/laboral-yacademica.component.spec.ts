import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralYacademicaComponent } from './laboral-yacademica.component';

describe('LaboralYacademicaComponent', () => {
  let component: LaboralYacademicaComponent;
  let fixture: ComponentFixture<LaboralYacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboralYacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboralYacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
