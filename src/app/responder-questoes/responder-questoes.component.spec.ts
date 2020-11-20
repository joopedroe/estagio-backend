import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderQuestoesComponent } from './responder-questoes.component';

describe('ResponderQuestoesComponent', () => {
  let component: ResponderQuestoesComponent;
  let fixture: ComponentFixture<ResponderQuestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponderQuestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderQuestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
