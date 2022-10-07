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
  timeRemaining$: Observable<timeI>

  constructor(
    private dateDiffService: DateDiff,
    private storageService: StorageService,
  ) {
    if (!this.storageService.getData('eventName')) {
      this.storageService.setData('eventName', 'Midsummer Eve')
    }
    if (!this.storageService.getData('eventDate')) {
      this.storageService.setData('eventDate', new Date('06/24/2023'))
    }

    this.eventName = JSON.parse(localStorage.getItem('eventName') as string)
    this.eventDate = JSON.parse(localStorage.getItem('eventDate') as string)

    this.timeRemaining$ = interval(1000).pipe(
      map((x) => this.dateDiffService.calcDateDiff(new Date(this.eventDate))),
      shareReplay(1),
    )
  }
}
