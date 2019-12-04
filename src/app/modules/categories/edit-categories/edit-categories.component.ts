import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriesService } from '../services/categories.service';
import { CategoriesInterface } from '../typings/categories-typing.interface';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  formEdit: FormGroup
  idCategorie: string
  categorie: CategoriesInterface
  showMessage: boolean = false
  messageSuccess: string
  messageDanger: string

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _categorieService: CategoriesService,
    private _router: Router
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => this.idCategorie = params.id)
    this.formEdit = this._formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    })

    this._categorieService
      .getById(this.idCategorie)
      .subscribe(data => {

        let result: any
        result = data
        this.categorie = result.categorie[0]
      }, error => console.error(error))
  }

  update(e: Event):void {

    e.preventDefault()

    const {name} = this.formEdit.getRawValue()
    
    this._categorieService
      .put(this.idCategorie, name)
      .subscribe(res => {

        this.showMessage = true
        this.messageSuccess = 'Categoria alterada'

        if(confirm('Alteração realizada, Deseja fazer outra alteração')) {return}

        this._router.navigate(['categories'])
      }, error => {
        console.error(error)
        this.showMessage = true
        this.messageDanger = 'Não foi possível alterar a categoria'
      })
  }
}
