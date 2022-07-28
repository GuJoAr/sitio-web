import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  volverInicio(){
    this.router.navigate(['']);
  }

}
