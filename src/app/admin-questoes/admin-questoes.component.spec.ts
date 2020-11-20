import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminQuestoesComponent } from './admin-questoes.component';

describe('AdminQuestoesComponent', () => {
  let component: AdminQuestoesComponent;
  let fixture: ComponentFixture<AdminQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
