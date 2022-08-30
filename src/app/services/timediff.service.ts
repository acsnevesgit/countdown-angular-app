import { Injectable } from '@angular/core'

import { timeI } from '../core/timeI'

@Injectable({
  providedIn: 'root',
})
export class DateDiff {
  constructor() {}

  calcDateDiff(eventTimer: Date): timeI {
    // ------------------------------ Time values ------------------------------
    const hoursInDay = 24
    const minutesInHour = 60
    const secondsInMinute = 60
    const millisecondsInSecond = 1000

    const timeDiff = eventTimer.valueOf() - Date.now() // gives the difference in ms

    // ------------------------------ Time conversions ------------------------------
    const daysToEvent = Math.floor(
      timeDiff /
        (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay),
    )
    const hoursToEvent = Math.floor(
      (timeDiff / (millisecondsInSecond * secondsInMinute * minutesInHour)) %
        hoursInDay,
    )
    const minutesToEvent = Math.floor(
      (timeDiff / (millisecondsInSecond * secondsInMinute)) % minutesInHour,
    )
    const secondsToEvent = Math.floor(
      (timeDiff / millisecondsInSecond) % secondsInMinute,
    )

    return { daysToEvent, hoursToEvent, minutesToEvent, secondsToEvent }
  }
}
