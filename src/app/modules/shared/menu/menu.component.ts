import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: Object
  userLocalStorage: Object

  constructor(
    private _menuService: MenuService,
    private _router: Router
  ) {}
  
  ngOnInit() {
    this._menuService.getUser().subscribe(data => this.user = data)
    this.userLocalStorage = this._menuService.getLocalStorage()

    if(this.userLocalStorage) {
      this.user = this.userLocalStorage
    }

  }

  logout(): void {
    this._menuService.clearStorage()
    this._router.navigate([''])
  }
}
