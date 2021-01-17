import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbtn',
  templateUrl: './searchbtn.component.html',
  styleUrls: ['./searchbtn.component.css']
})
export class SearchbtnComponent implements OnInit {
  Search : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
