import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenqueteComponent } from './createnquete.component';

describe('CreatenqueteComponent', () => {
  let component: CreatenqueteComponent;
  let fixture: ComponentFixture<CreatenqueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenqueteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
