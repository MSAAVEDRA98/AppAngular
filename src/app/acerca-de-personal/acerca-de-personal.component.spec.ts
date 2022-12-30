import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDePersonalComponent } from './acerca-de-personal.component';

describe('AcercaDePersonalComponent', () => {
  let component: AcercaDePersonalComponent;
  let fixture: ComponentFixture<AcercaDePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
