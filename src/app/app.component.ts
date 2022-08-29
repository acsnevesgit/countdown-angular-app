import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { interval, Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { DateValidator } from './shared/date.validator'

import { timeI } from './core/timeI'
import { DateDiff } from './timediff.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ------------------------------ Variables ------------------------------
  title: string = 'natural-cycles-FE-challenge'

  eventName: string
  eventDate: string
  eventValidations!: FormGroup

  timeRemaining$: Observable<timeI>

  constructor(
    private formBuilder: FormBuilder,
    private dateDiffService: DateDiff,
  ) {
    this.eventName = 'Midsummer Eve'
    this.eventDate = '2023-06-24'

    // ------------------------------ Validation ------------------------------
    this.eventValidations = this.formBuilder.group({
      eventNameControl: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
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

  // ------------------------------ Methods--------------------------------------------------
  onEventNameChangeFn(value: string) {
    this.eventName = value
    console.log('event name has changed: ' + value)
  }

  onEventDateChangeFn(value: string) {
    this.eventDate = value
    console.log('event date has changed: ' + value)
  }
}
