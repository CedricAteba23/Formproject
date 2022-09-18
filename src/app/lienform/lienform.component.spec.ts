import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienformComponent } from './lienform.component';

describe('LienformComponent', () => {
  let component: LienformComponent;
  let fixture: ComponentFixture<LienformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
