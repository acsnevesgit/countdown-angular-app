import { TestBed } from '@angular/core/testing'

import { TimediffService } from './timediff.service'

describe('TimediffService', () => {
  let service: TimediffService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TimediffService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
