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

  constructor(
    private _courseService: CourseService
  ) { }

  ngOnInit() {

    this._courseService
      .get()
      .subscribe(course => {

        this.data = course
        this.courses = this.data.result
        console.log(this.courses);
        
      }, error => console.log(error))
  }

}
