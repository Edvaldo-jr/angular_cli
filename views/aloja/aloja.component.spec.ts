import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojaComponent } from './aloja.component';

describe('AlojaComponent', () => {
  let component: AlojaComponent;
  let fixture: ComponentFixture<AlojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
