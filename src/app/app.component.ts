import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { interval, Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

import { timeI } from './core/timeI'
import { calcDateDiff } from './timediff.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ------------------------------ Variable declarations ------------------------------
  title: string = 'natural-cycles-FE-challenge'
  eventNameControl: FormControl
  eventDateControl: FormControl
  eventName: string
  eventDate: string
  public timeRemaining$: Observable<timeI>

  constructor() {
    // ------------------------------ Variable initializations ------------------------------
    this.eventName = 'Midsummer Eve'
    this.eventDate = '2023-06-24'
    this.eventNameControl = new FormControl(
      'Midsummer Eve',
      Validators.required,
    )
    this.eventDateControl = new FormControl('2023-06-24', Validators.required)

    // uses pipe to change the observable
    this.timeRemaining$ = interval(1000).pipe(
      map((x) => calcDateDiff()),
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

  onFormSubmit(formData: any) {
    console.log(formData)
  }
}
