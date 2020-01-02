import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CategoriesInterface } from '../typings/categories-typing.interface';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  data: any
  categories: CategoriesInterface[] = []
  pagesNumber = []
  showMessage: boolean = false
  messageSuccess: string
  messageDanger: string
  modal: boolean = false
  modalTitle: string
  modalDescription: string
  idCategorie: string

  constructor(
    private _categorieService: CategoriesService
  ) { }

  ngOnInit(): void {

    this._categorieService
      .get()
      .subscribe(data => {

        this.categories = data;
        this.data = data;

        for (let i = 1; i < this.data.totalPages + 1; i++) {
          this.pagesNumber.push({ page: i })
        }
      }, error => {
        console.error(error);
        return error
      })
  }

  pagination(page: number) {

    if (!page) return

    this._categorieService
      .pagination(page)
      .subscribe(data =>
        this.categories = data,
        error => console.error(error)
      )
  }

  remove(id, modal): void {

    console.log('remove', modal);
    
    this.idCategorie = id
    this.modal = !modal
    this.modalTitle = 'Deseja remover essa categoria?'
    this.modalDescription = 'Após remover essa categoria não poderá ser desfeita'

  }
  
  confirm(next) {
    
    console.log('confirm', next);
    if(next) {

      this._categorieService
        .delete(this.idCategorie)
        .subscribe((data: any) => {
    
          const copyCategories: any = this.categories;
          const indice = copyCategories.docs.findIndex(data => data._id == this.idCategorie)
    
          if(data.message) {
            
            console.log('data', data);
            this.messageDanger = data.message
            return
          }
          
          copyCategories.docs.splice(indice, 1)
    
          this.messageSuccess = 'Categoria removida'
          this.messageDanger = ''
          this.modal = !this.modal
        }, error => {
    
          console.error(error)
          this.modal = !this.modal
          this.messageSuccess = ''
          this.messageDanger = 'Não foi possível remover a categoria'
        })
      
    }
  }
}
