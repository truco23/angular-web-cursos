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

  remove(id): void {

    if (!confirm('Deseja remover essa categoria?')) return

    this._categorieService
      .delete(id)
      .subscribe(() => {

        const copyCategories: any = this.categories;
        const indice = copyCategories.docs.findIndex(data => data._id == id)
        copyCategories.docs.splice(indice, 1)

        this.messageSuccess = 'Categoria removida'
      }, error => {

        console.error(error)
        this.messageDanger = 'Não foi possível remover a categoria'
      })
  }
}
