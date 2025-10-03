import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datapassing } from './datapassing';

describe('Datapassing', () => {
  let component: Datapassing;
  let fixture: ComponentFixture<Datapassing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datapassing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datapassing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
