import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloListarComponent } from './polo-listar.component';

describe('ListarComponent', () => {
  let component: PoloListarComponent;
  let fixture: ComponentFixture<PoloListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoloListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoloListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
