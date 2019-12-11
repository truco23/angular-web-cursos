import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private _menuService: MenuService,
    private _router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(!this._menuService.getLocalStorage()) {
        
        console.log('Acesso não permitido');
        this._router.navigate([''])
        return false
      }

      return true
    }
}
