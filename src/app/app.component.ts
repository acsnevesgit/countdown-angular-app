import { Component } from '@angular/core'
import { interval, Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

import { timeI } from './core/timeI'
import { DateDiff } from './services/timediff.service'
import { StorageService } from './services/storage.service'

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
  startName: string
  startDate: Date
  timeRemaining$: Observable<timeI>

  constructor(
    private dateDiffService: DateDiff,
    private storageService: StorageService,
  ) {
    this.startName = 'Midsummer Eve' //default event name
    if (!this.storageService.getData('eventName')) {
      this.storageService.setData('eventName', this.startName)
    }
    this.eventName = JSON.parse(localStorage.getItem('eventName') as string)

    this.startDate = new Date('2023-06-23T22:00:00.000Z') //default event date
    if (!this.storageService.getData('eventDate')) {
      this.storageService.setData('eventDate', this.startDate)
    }
    this.eventDate = JSON.parse(localStorage.getItem('eventDate') as string)

    //update displayed remaining time every 1 second
    this.timeRemaining$ = interval(1000).pipe(
      map((x) => this.dateDiffService.calcDateDiff(new Date(this.eventDate))),
      shareReplay(1),
    )
  }

  // ------------------------------ Methods ------------------------------
  addNewEventName(newName: string) {
    this.eventName = newName
  }

  addNewEventDate(newDate: string) {
    this.eventDate = newDate
  }
}
