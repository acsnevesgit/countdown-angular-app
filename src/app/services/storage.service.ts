import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // -------------------------------------------------- Methods--------------------------------------------------
  setBool(key: string, value: boolean) {
    localStorage.setItem(key, String(value))
  }

  getBool(key: string): boolean {
    return localStorage.getItem(key) === 'true'
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string)
  }
}
