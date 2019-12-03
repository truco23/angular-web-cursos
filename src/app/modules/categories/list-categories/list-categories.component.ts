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

  constructor(
    private _categorieService: CategoriesService
  ) { }

  ngOnInit() {
    this._categorieService.get().subscribe(data => {
      this.data = data;
      this.categories = this.data.docs
      console.log(this.categories);
    }, error => {
      console.error(error);
      return error
    })
  }

}
