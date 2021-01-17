import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  studentInfo =[{
    "Name" : "Hridik",
    "Maths" : 59,
    "Science" : 100
  },
  {
    "Name" : "Rahul",
    "Maths" : 77,
    "Science" : 80
  }]
  
  constructor() { }
}
