import { Component, EventEmitter, Inject, Output } from '@angular/core'
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter'
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core'
import 'moment/locale/en-gb'
import 'moment/locale/sv'

import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-gb' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DateInputComponent {
  // ------------------------------ Variables ------------------------------
  eventDate: string
  minDate: string
  startDate: Date

  @Output() newEventDate = new EventEmitter<string>()

  constructor(
    private storageService: StorageService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
  ) {
    this.minDate = new Date(Date.now() + 3600 * 1000 * 24).toISOString() //set minimum pickable date to tomorrow
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

  swedish() {
    this._locale = 'sv'
    this._adapter.setLocale(this._locale)
  }

  unitedKingdom() {
    this._locale = 'en-gb'
    this._adapter.setLocale(this._locale)
  }

  getDateFormatString(): string {
    if (this._locale === 'en-gb') {
      return 'DD/MM/YYYY'
    } else if (this._locale === 'sv') {
      return 'YYYY-MM-DD'
    }
    return ''
  }
}
