import { TestBed } from '@angular/core/testing';

import { SearchArticleService } from './searchArticleService';

describe('SearchArticleService', () => {
  let service: SearchArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
