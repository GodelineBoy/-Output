import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent{

  newOnomatopia = new FormControl('')
  
  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter;

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia.value)
    this.newOnomatopia = new FormControl('')
  }
  
}
