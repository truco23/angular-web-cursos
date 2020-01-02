import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() visible: boolean = false
  @Input() title: string
  @Input() description: string
  @Output() close = new EventEmitter<boolean>()
  @Output() action = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  toogleModal(e: Event) {

    e.preventDefault()

    this.visible = !this.visible
    this.action.emit(this.visible)
    this.close.emit(this.visible)
  }
  
  confirm(e: Event) {
    
    e.preventDefault()

    this.action.emit(this.visible)
    this.close.emit(this.visible)
  }
}
