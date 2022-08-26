import { timeI } from './core/timeI'

// Calculates difference in time between two dates and returns an object with the individual time components - s, m, h, d
// eventDate = Jun 24 2023

// TODO: change strictly typed date
export function calcDateDiff(eventDate: Date = new Date(2023, 0o5, 24)): timeI {
  // ----- Time values -----
  const hoursInDay = 24
  const minutesInHour = 60
  const secondsInMinute = 60
  const millisecondsInSecond = 1000

  const eventDay = eventDate.valueOf() // ms
  const timeDiff = eventDay - Date.now()

  // ----- Time conversions -----
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
