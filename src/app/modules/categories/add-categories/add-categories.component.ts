import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  formAdd: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formAdd = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    })
  }

  addCategorie(e: Event): void {
    
    e.preventDefault();

    const {name} = this.formAdd.getRawValue()
    console.log('cadastro', name);
    
  }
}
