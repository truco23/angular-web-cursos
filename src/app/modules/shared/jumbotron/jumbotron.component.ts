import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() title: string
  @Input() bg: string
  @Input() color: string

  constructor() { }

  ngOnInit() {
  }

}
