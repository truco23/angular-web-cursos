import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  user = new BehaviorSubject<Object>(null)

  setLocalStorage(name): void {
    window.localStorage.setItem('keyCursos', name)
  }

  getLocalStorage(): string {
    return window.localStorage.getItem('keyCursos')
  }

  clearStorage(): void {
    window.localStorage.clear()
    this.user.next(null)
  }

  userEmitted(user): void {
    this.user.next(user)
  }

  getUser(): BehaviorSubject<Object> {
    return this.user
  }
}
