import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablicaTestComponent } from './tablica-test.component';

describe('TablicaTestComponent', () => {
  let component: TablicaTestComponent;
  let fixture: ComponentFixture<TablicaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablicaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablicaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
