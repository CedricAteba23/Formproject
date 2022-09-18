import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatairesComponent } from './destinataires.component';

describe('DestinatairesComponent', () => {
  let component: DestinatairesComponent;
  let fixture: ComponentFixture<DestinatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinatairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
