import { Component } from '@angular/core';
import { ecuacion } from '../formula/formula';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent {

  result = 0;
  a : number = 0;
  b : number = 0;
  h : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ecuacion(){
    let total = 0;
    total = ecuacion(this.a, this.b, this.h);
    this.result = total;
  }
}