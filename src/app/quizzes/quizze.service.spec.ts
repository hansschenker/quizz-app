import { TestBed } from '@angular/core/testing';

import { QuizzeService } from './quizze.service';

describe('QuizzeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzeService = TestBed.get(QuizzeService);
    expect(service).toBeTruthy();
  });
});
