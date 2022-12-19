
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }  
  Nombre:any;
  Apellido:any;
  Email:any;
  Direccion:any;
  Integrantes:any;
  Telefono:any;


  ngOnInit(): void {
    this.recuperar();
  }

  recuperar(){
    this.Nombre= localStorage.getItem('1')
    this.Apellido= localStorage.getItem('2')
    this.Email= localStorage.getItem('3')
    this.Direccion= localStorage.getItem('4' )
    this.Integrantes= localStorage.getItem('5')
    this.Telefono= localStorage.getItem('6')
  }
}