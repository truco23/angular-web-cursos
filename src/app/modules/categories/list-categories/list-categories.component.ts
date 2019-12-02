import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CategoriesInterface } from '../typings/categories-typing.interface';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  cateogories: CategoriesInterface[] = []

  constructor(
    private _categorieService: CategoriesService
  ) { }

  ngOnInit() {
    this._categorieService.get().subscribe(data => {
      this.cateogories = data;
      console.log(this.cateogories);
    }, error => {
      console.error(error);
      return error
    })
  }

}
