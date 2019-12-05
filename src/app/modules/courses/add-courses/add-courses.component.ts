import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../categories/services/categories.service';
import { CategoriesInterface } from '../../categories/typings/categories-typing.interface';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  formAdd: FormGroup
  categories: CategoriesInterface[]
  data: any

  constructor(
    private _formBuilder: FormBuilder,
    private _categorieService: CategoriesService
  ) { }

  ngOnInit() {

    this._categorieService
      .get()
      .subscribe(data => {
        
        this.data = data  
        this.categories = this.data.docs; 
        console.log(this.categories);
      }, error => console.error(error))

    this.formAdd = this._formBuilder.group({
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

    console.log('data', data);
    
  }
}
