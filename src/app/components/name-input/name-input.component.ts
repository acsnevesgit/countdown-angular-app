import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
})
export class NameInputComponent {
  // ------------------------------ Variables ------------------------------
  eventName: string
  eventNameControl: FormControl

  // ------------------------------ Constructor ------------------------------
  constructor(private storageService: StorageService) {
    if (!this.storageService.getData('eventName')) {
      this.storageService.setData('eventName', 'Midsummer Eve')
    }
    this.eventName = JSON.parse(localStorage.getItem('eventName') as string)
    this.eventNameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(13),
      Validators.pattern(/^[a-zA-Z0-9\ ]*$/),
    ])
  }

  // ------------------------------ Methods ------------------------------
  onEventNameChangeFn(value: string) {
    this.eventName = value
    this.storageService.setData('eventName', value)
  }
}
