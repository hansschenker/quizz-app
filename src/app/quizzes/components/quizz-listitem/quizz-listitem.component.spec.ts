import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzListitemComponent } from './quizz-listitem.component';

describe('QuizzListitemComponent', () => {
  let component: QuizzListitemComponent;
  let fixture: ComponentFixture<QuizzListitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzListitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
