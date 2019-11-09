import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzeDetailsComponent } from './quizze-details.component';

describe('QuizzeDetailsComponent', () => {
  let component: QuizzeDetailsComponent;
  let fixture: ComponentFixture<QuizzeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
