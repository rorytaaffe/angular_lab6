import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  // Added
import {Observable} from 'rxjs';  // Added

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }  // Added

  // Added
  GetStudentData():Observable<any>{
    // Put /api/jsonblob/ after .com from url that was given after saving on JsonBlob.com to create an api
    return this.http.get('https://jsonblob.com/api/jsonblob/1dd79b2c-67b6-11eb-9c90-f18f0bc9509e');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=8470af7af094307bf4fc71c963ae6fca');
  }
}
