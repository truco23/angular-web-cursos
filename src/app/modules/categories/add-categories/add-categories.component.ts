import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  formAdd: FormGroup;
  messageSuccess: string
  messageDanger: string
  modal: boolean = false
  modalTitle: string
  modalDescription: string
  breadCrumb: string

  constructor(
    private _formBuilder: FormBuilder,
    private _categorieService: CategoriesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const segment = this._router.parseUrl(this._router.url)
    const categoria = `/${segment.root.children.primary.segments[0].path}/${segment.root.children.primary.segments[1].path}`

    this.breadCrumb = JSON.stringify([
      { name: 'Categorias', link: categoria }, 
      { name: 'Cadastro', link: this._router.url }
    ])

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

    e.preventDefault()
    this.modal = true
    this.modalTitle = 'Cadastro de categoria'
    this.modalDescription = 'Deseja cadastrar essa categoria?'
  }

  confirm(next) {

    if (next) {

      const { name } = this.formAdd.getRawValue()

      this._categorieService
        .create(name)
        .subscribe(data => {

          if (data) {

            this.formAdd.reset()
            this.messageSuccess = 'Categoria criada com sucesso';
            this.modal = false
            return
          }

          this.messageDanger = 'Não foi possível criar a categoria'
        }, error => {

          console.log(error)
          this.modal = false
        })
    }
  }
}
