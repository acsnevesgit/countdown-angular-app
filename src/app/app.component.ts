import { Component } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { interval, Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

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
  eventNameControl: FormControl
  eventDateControl: FormControl

  public timeRemaining$: Observable<timeI>

  constructor(private dateDiffService: DateDiff) {
    this.eventName = 'Midsummer Eve'
    this.eventDate = '2023-06-24'
    this.eventNameControl = new FormControl('', Validators.required)
    this.eventDateControl = new FormControl('', Validators.required)

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

  onFormSubmit(formData: any) {
    console.log(formData)
  }
}
