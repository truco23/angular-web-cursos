import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent {

  @Input() icon: string
  @Input() title: string
  @Input() description: string
  @Input() link: string
  @Input() linkName: string
  @Input() color: string = 'dark'
}
