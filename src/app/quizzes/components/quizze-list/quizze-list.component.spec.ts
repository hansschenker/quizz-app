import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzeListComponent } from './quizze-list.component';

describe('QuizzeListComponent', () => {
  let component: QuizzeListComponent;
  let fixture: ComponentFixture<QuizzeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizzeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
