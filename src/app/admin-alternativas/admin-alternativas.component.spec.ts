import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAlternativasComponent } from './admin-alternativas.component';

describe('AdminAlternativasComponent', () => {
  let component: AdminAlternativasComponent;
  let fixture: ComponentFixture<AdminAlternativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAlternativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAlternativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
