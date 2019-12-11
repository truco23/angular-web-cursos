import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formLogin: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {

    this.formLogin = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ]
    })
  }

  login(e: Event): void {

    e.preventDefault()

    const {name} = this.formLogin.value

    console.log('login', name);
    
    window.localStorage.setItem('keyCursos', name)
    this._router.navigate(['main'])
  }
}
