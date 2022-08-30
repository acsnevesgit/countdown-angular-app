import { TestBed } from '@angular/core/testing'

import { DateDiff } from './timediff.service'

describe('TimediffService', () => {
  let service: DateDiff

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DateDiff)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
