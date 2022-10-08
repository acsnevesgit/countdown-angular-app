import { Component, EventEmitter, Output } from '@angular/core'

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
})
export class NameInputComponent {
  // ------------------------------ Variables ------------------------------
  eventName: string
  startName: string

  @Output() newEventName = new EventEmitter<string>()

  // ------------------------------ Constructor ------------------------------
  constructor(private storageService: StorageService) {
    this.startName = 'Midsummer Eve' //default event name
    if (!this.storageService.getData('eventName')) {
      this.storageService.setData('eventName', this.startName)
    }
    this.eventName = JSON.parse(localStorage.getItem('eventName') as string)
  }

  // ------------------------------ Methods ------------------------------
  onEventNameChangeFn(value: string) {
    this.eventName = value
    this.newEventName.emit(value) //pass chosen date to parent
    this.storageService.setData('eventName', value)
  }
}
