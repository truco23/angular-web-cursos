import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  
  constructor(
    private _menuService: MenuService
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this._menuService.getLocalStorage()) {
        
        console.log('Não pode acessar a home estando logado');
        return false
      }

      return true
    }
}
