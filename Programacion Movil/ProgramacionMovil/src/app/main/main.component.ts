import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  numero:any=0;

  sueldos=[144, 300, 888];
  ngOnInit(): void {
    this.numero=0;
  }

}
