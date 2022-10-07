import { Component } from '@angular/core'

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent {
  // ------------------------------ Variables ------------------------------
  eventDate: string

  constructor(private storageService: StorageService) {
    if (!this.storageService.getData('eventDate')) {
      this.storageService.setData('eventDate', new Date('06/24/2023'))
    }
    this.eventDate = JSON.parse(localStorage.getItem('eventDate') as string)
  }
  // ------------------------------ Methods ------------------------------
  onEventDateChangeFn(value: string) {
    this.eventDate = value
    this.storageService.setData('eventDate', value)
  }
}
