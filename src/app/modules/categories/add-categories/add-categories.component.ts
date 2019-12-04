import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  formAdd: FormGroup;
  showMessage: boolean = false;
  message: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _categorieService: CategoriesService
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

    this._categorieService
      .create(name)
      .subscribe(data => {
        
        this.showMessage = true;

        if(data) {
          
          this.formAdd.reset()
          this.message = 'Categoria criada com sucesso';
          return;
        }

        this.message = 'Não foi possível criar a categoria'
      }, error => console.log(error))
    
  }
}
