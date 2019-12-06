import { Component, OnInit } from '@angular/core';

import { CourseService } from '../services/course.service';
import { CourseInterface } from '../typings/courses-typing.interface';

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

  constructor(
    private _courseService: CourseService
  ) { }

  ngOnInit() {

    this._courseService
      .get()
      .subscribe(data => {

        this.data = data
        this.courses = this.data.result
        
        for (let i = 1; i < this.data.result.totalPages + 1; i++) {
          this.pagesNumber.push({ page: i })
        }
        
        console.log('cursos',this.courses);
        console.log('paginas', this.pagesNumber);
        
        
      }, error => console.log(error))
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
}
