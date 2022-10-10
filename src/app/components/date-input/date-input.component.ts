import { Component, EventEmitter, Output } from '@angular/core'

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent {
  // ------------------------------ Variables ------------------------------
  eventDate: string
  minDate: string
  startDate: Date

  @Output() newEventDate = new EventEmitter<string>()

  constructor(private storageService: StorageService) {
    // const currentDate = Date.now()
    this.minDate = new Date(Date.now() + 3600 * 1000 * 24).toISOString() //set minimum pickable date to current date
    this.startDate = new Date('2023-06-23T22:00:00.000Z') //default event date

    if (!this.storageService.getData('eventDate')) {
      this.storageService.setData('eventDate', this.startDate)
    }
    this.eventDate = JSON.parse(localStorage.getItem('eventDate') as string)
  }

  // ------------------------------ Methods ------------------------------
  onEventDateChangeFn(value: string) {
    this.eventDate = value
    this.storageService.setData('eventDate', new Date(value))
    this.eventDate = JSON.parse(localStorage.getItem('eventDate') as string)
    this.newEventDate.emit(value)
  }
}
