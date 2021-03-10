import { Component, OnInit } from '@angular/core';
import {StudentService} from './Services/student.service';  // Added

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})                        // Added
export class AppComponent implements OnInit{
  title = 'student-app';
  students:any = [];  // Added
  weather:any = []; // Added
  constructor(private service:StudentService){  // Added

  }

  // Added
  ngOnInit(){
    this.service.GetStudentData().subscribe( (data)=>{
      this.students = data.students;
      console.log(this.students); // To check that it's working
    });

    // Added
    this.service.GetWeatherData().subscribe( (data)=>{
      this.weather = data.weather;
      console.log(this.weather);
    });
  }
}
