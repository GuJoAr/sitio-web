import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})

export class FrontendComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  volverInicio(){
    this.router.navigate(['']);
  }

  
}


