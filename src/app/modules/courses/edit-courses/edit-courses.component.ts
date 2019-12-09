import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseService } from '../services/course.service';
import { CategoriesService } from '../../categories/services/categories.service';
import { CategoriesInterface } from '../../categories/typings/categories-typing.interface';
import { CourseInterface } from '../typings/courses-typing.interface';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {

  formEdit: FormGroup
  categories: CategoriesInterface[]
  idCourse: string
  course: CourseInterface
  idCategory: string
  name: string
  description

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoriesService,
    private _couseService: CourseService
  ) { }

  ngOnInit() {

    this.formEdit = this._formBuilder.group({
      idCategory: [
        '',
        [
          Validators.required
        ]
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ]
    })

    this._activatedRoute.params.subscribe(params =>
      this.idCourse = params.id
      ,error => console.error(error)
    )
    
    this._categoryService
      .getAll()
      .subscribe(data => {
  
        this.categories = data
        console.log('categorias', this.categories);
        
      }, error => console.error(error))

    this._couseService
      .getById(this.idCourse)
      .subscribe(data => {
        console.log('curso', data[0]);

        this.course = data[0]
        this.formEdit = this._formBuilder.group({
          idCategory: [
            this.course.idCategory._id,
            [
              Validators.required
            ]
          ],
          name: [
            this.course.name,
            [
              Validators.required,
              Validators.minLength(3)
            ]
          ],
          description: [
            this.course.description,
            [
              Validators.required,
              Validators.maxLength(50)
            ]
          ]
        })
      }, error => console.error(error))
  }

  update(e: Event) {

    e.preventDefault()

    
    if(confirm('Deseja confirmar essa alteração')) {
      
      const {idCategory, name, description} = this.formEdit.value

      this._couseService
      .put(this.idCourse, idCategory, name, description)
      .subscribe(() => {

          alert('Curso alterado')
          this._router.navigate(['/courses'])
        }, error => console.error(error))
    }
    
  }

}
