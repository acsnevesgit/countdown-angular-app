import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { interval, Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { DateValidator } from './validators/date.validator'

import { timeI } from './core/timeI'
import { DateDiff } from './timediff.service'
import { StorageService } from './storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ------------------------------ Variables ------------------------------
  title: string = 'countdown-angular-app'

  eventName: string
  eventDate: string
  eventValidations!: FormGroup

  timeRemaining$: Observable<timeI>

  constructor(
    private formBuilder: FormBuilder,
    private dateDiffService: DateDiff,
    private storageService: StorageService,
  ) {
    if (!this.storageService.getData('eventName')) {
      this.storageService.setData('eventName', 'Midsummer Eve')
    }
    if (!this.storageService.getData('eventDate')) {
      this.storageService.setData('eventDate', '2023-06-24')
    }

    this.eventName = JSON.parse(localStorage.getItem('eventName') as string)
    this.eventDate = JSON.parse(localStorage.getItem('eventDate') as string)

    // ------------------------------ Validation ------------------------------
    this.eventValidations = this.formBuilder.group({
      eventNameControl: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(13),
          Validators.pattern(/^[a-zA-Z0-9\ ]*$/),
        ],
      ],
      eventDateControl: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9\-]*$/),
          DateValidator.dateValidator,
        ],
      ],
    })

    this.timeRemaining$ = interval(1000).pipe(
      map((x) => this.dateDiffService.calcDateDiff(new Date(this.eventDate))),
      shareReplay(1),
    )
  }

  // -------------------------------------------------- Methods--------------------------------------------------
  onEventNameChangeFn(value: string) {
    this.eventName = value
    this.storageService.setData('eventName', value)
  }

  onEventDateChangeFn(value: string) {
    this.eventDate = value
    this.storageService.setData('eventDate', value)
  }
}
