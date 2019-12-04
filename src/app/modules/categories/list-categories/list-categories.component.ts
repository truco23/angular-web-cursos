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
  somePages: number = 1

  constructor(
    private _categorieService: CategoriesService
  ) { }

  ngOnInit(): void {
    
    this._categorieService
      .get()
      .subscribe(data => {
        console.log('data', data);
        
        this.categories = data;
        this.data = data;

        for (let i = 1; i < this.data.totalPages + 1; i++) {

          this.pagesNumber.push({page: i})
        }
        console.log('pages', this.pagesNumber);
    }, error => {
      console.error(error);
      return error
    })
  }

  pagination(page: number) {
    
    if(!page) return

    this._categorieService
      .pagination(page)
      .subscribe(data => {
        this.categories = data,
        console.log('paginacao', this.categories);
        
      }, error => console.error(error))
  }
}
