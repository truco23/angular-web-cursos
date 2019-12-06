import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories/services/categories.service';
import { CategoriesInterface } from '../../categories/typings/categories-typing.interface';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  formAdd: FormGroup
  categories: CategoriesInterface[]
  data: any
  nextPage: number = 1
  messageSuccess: string
  messageDanger: string

  constructor(
    private _formBuilder: FormBuilder,
    private _categorieService: CategoriesService,
    private _courseService: CourseService
  ) { }

  ngOnInit() {

    this._categorieService
      .get()
      .subscribe(data => {
        let cat: any
        cat = data
        this.data = data  
        this.categories = this.data.docs; 
        
        if(cat.nextPage > 1) {

          this._categorieService
            .pagination(++this.nextPage)
            .subscribe(data => {
              let newCat: any
              newCat = data
              this.data.docs = cat.docs.concat(newCat.docs)
              this.categories = this.data.docs
              console.log('possui mais pagina', this.categories);
            })
        }
      }, error => console.error(error))

    this.formAdd = this._formBuilder.group({
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
          Validators.minLength(4)
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
  }

  create(e: Event): void {

    e.preventDefault()

    const data = this.formAdd.getRawValue()

    this._courseService
      .create(data.idCategory, data.name, data.description)
      .subscribe(data => {

        console.log('curso criado', data);
        this.messageSuccess = 'Curso criado'
        this.formAdd.reset()
      }, error => {
        console.log(error)
        this.messageDanger = 'Não foi possível criar o curso'
      })
  }
}
