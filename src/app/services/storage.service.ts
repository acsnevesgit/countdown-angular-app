import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // ------------------------------ Setter/Getter Methods------------------------------
  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string)
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
