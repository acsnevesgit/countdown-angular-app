import { AbstractControl } from '@angular/forms'
import * as moment from 'moment'

export class DateValidator {
  static dateValidator(dateEntered: AbstractControl) {
    if (
      dateEntered &&
      dateEntered.value &&
      !moment(dateEntered.value, 'YYYY-MM-DD', true).isValid()
    ) {
      return { dateValidator: true }
    }
    return null
  }
}
