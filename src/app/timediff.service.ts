import { timeI } from './core/timeI'

// Calculates difference in time between two dates and returns an object with the individual time components - s, m, h, d
// eventDate = Jun 24 2023

// TODO: change strictly typed date
// export class timediffService {
export function calcDateDiff(eventTimer: Date = new Date('2023-06-24')): timeI {
  // JavaScript will (by default) output dates in full text string format - e.g. Wed Mar 25 2015 01:00:00 GMT+0100 (Central European Standard Time)
  // console.log(eventDate)

  // ------------------------------ Time values ------------------------------
  const hoursInDay = 24
  const minutesInHour = 60
  const secondsInMinute = 60
  const millisecondsInSecond = 1000

  const timeDiff = eventTimer.valueOf() - Date.now() // gives the difference in ms

  // ------------------------------ Time conversions ------------------------------
  // Math.floor() returns actually elapsed seconds
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

  // TODO: remove console log
  // console.log(
  //   `The time left to the event is ${daysToEvent} days, ${hoursToEvent} hours, ${minutesToEvent} minutes and ${secondsToEvent} seconds`,
  // )

  return { daysToEvent, hoursToEvent, minutesToEvent, secondsToEvent }
}
