import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/modules/shared/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formLogin: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _menuService: MenuService
  ) { }

  ngOnInit() {

    this.formLogin = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10)
        ]
      ]
    })
  }

  login(e: Event): void {

    e.preventDefault()

    const {name} = this.formLogin.value

    this._menuService.setLocalStorage(name)
    this._menuService.userEmitted(name)
    this._router.navigate(['main'])
  }
}
