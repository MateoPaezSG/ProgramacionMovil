import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
 @Input () Nombre:any="";
 @Input () Apellido:any="";
 @Input () Email:any="";
 @Input () Direccion:any="";
 @Input () Integrantes:any="";
 @Input () Telefono:any="";
  


  almacenar(){
    localStorage.setItem('1', this.Nombre),
    localStorage.setItem('2', this.Apellido),
    localStorage.setItem('3', this.Email)
    localStorage.setItem('4', this.Direccion),
    localStorage.setItem('5', this.Integrantes),
    localStorage.setItem('6', this.Telefono);
  }

  ngOnInit(): void {

  }

    Imprimir(){
      
    }
  Mostrar(){
    localStorage.getItem('1')
    localStorage.getItem('2')
    localStorage.getItem('3')
    localStorage.getItem('4')
    localStorage.getItem('5')
    localStorage.getItem('6')
  }
}