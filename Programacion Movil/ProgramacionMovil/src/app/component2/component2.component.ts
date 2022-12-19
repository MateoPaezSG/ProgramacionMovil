import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  resultado:any
  resultado1:any
  resultado2:any
  resultado3:any
  resultado4:any
  resultado5:any
  mensaje:any
  @Input() name:any
  constructor() { }

  ngOnInit(): void {
    this.Mostrar
  }

  Mostrar(){
    this.resultado= localStorage.getItem('Nombre');
    this.resultado1= localStorage.getItem('2');
    this.resultado2= localStorage.getItem('3');
    this.resultado3= localStorage.getItem('4');
    this.resultado4= localStorage.getItem('5');
    this.resultado5= localStorage.getItem('6');
  }
}
