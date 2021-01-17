import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-avgmarks',
  templateUrl: './avgmarks.component.html',
  styleUrls: ['./avgmarks.component.css']
})
export class AvgmarksComponent implements OnInit {
  info : any;

  constructor(private  studentServiceService :  StudentServiceService ) {  }

  ngOnInit(): void {

    this.info = this.studentServiceService.studentInfo;

  }
  avgMarks(item : any){
    return (item.Maths+item.Science)/2;
  }
}
