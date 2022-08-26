import { Component } from '@angular/core'
import { interval, Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { timeI } from './core/timeI'
import { calcDateDiff } from './timediff.service'

// Defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'natural-cycles-FE-challenge'

  constructor() {
    // uses pipe to change the observable
    this.timeRemaining$ = interval(1000).pipe(
      map((x) => calcDateDiff()),
      shareReplay(1),
    )
  }

  public timeRemaining$: Observable<timeI>
}
