import { Component, OnInit, Input } from '@angular/core';
import { BreadCrumb } from './breadcrumb.interface';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() list: string
  listBreadCrumb: BreadCrumb[]

  constructor() { }

  ngOnInit() {
    this.listBreadCrumb = JSON.parse(this.list)
  }
}
