import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CityService } from '../city.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private _cityService : CityService) { }

  ngOnInit(): void {

  }



}
