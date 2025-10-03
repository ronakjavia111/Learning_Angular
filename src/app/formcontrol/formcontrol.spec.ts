import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formcontrol } from './formcontrol';

describe('Formcontrol', () => {
  let component: Formcontrol;
  let fixture: ComponentFixture<Formcontrol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formcontrol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formcontrol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
