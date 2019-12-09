import { Component, OnInit } from '@angular/core';

import { CourseService } from '../services/course.service';
import { CourseInterface } from '../typings/courses-typing.interface';
import { CategoriesService } from '../../categories/services/categories.service';
import { CategoriesInterface } from '../../categories/typings/categories-typing.interface';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  data: any
  courses: CourseInterface[] = []
  messageSuccess: string
  messageDanger: string
  pagesNumber = []
  categories: CategoriesInterface[]

  constructor(
    private _courseService: CourseService,
    private _categoryService: CategoriesService
  ) { }

  ngOnInit() {

    this._courseService
      .get()
      .subscribe(data => {

        this.data = data
        this.courses = this.data.result.docs
        
        for (let i = 1; i < this.data.result.totalPages + 1; i++) {
          this.pagesNumber.push({ page: i })
        }
      }, error => console.log(error))

    this._categoryService
      .getAll()
      .subscribe(data => 
        this.categories = data, 
        error => console.error(error)
      )
  }

  pagination(page: number) {

    if(!page) return

    this._courseService
      .pagination(page)
      .subscribe(data => {
        
        this.data = data
        this.courses = this.data.result
      }, error => console.log(error))
  }

  delete(id: string): void {

    if(confirm('Deseja remover esse curso')) {

      this._courseService
        .delete(id)
        .subscribe(() => {

          const coursesCopy: any = this.courses
          const indice = coursesCopy.docs.findIndex(data => data._id === id)

          this.messageSuccess = 'Categoria removida'
          coursesCopy.docs.splice(indice, 1)
        }, error => {
          console.error(error)
          this.messageDanger = 'Não foi possível remover a categoria'
        })
    }
  }

  filterCategory(e): void {

    if(e === '') {
      this._courseService
        .pagination(1, 100)
        .subscribe(data => {
          let courses: any = data
          this.courses = courses.result.docs
        }, error => console.log(error))

      return  
    }

    this._courseService
    .pagination(1, 100)
    .subscribe(data => {
      const courses: any = data
      this.courses = courses.result.docs.filter(item => item.idCategory.name.trim().toLowerCase() === e.trim().toLowerCase())
      }, error => console.log(error))
  }
}
