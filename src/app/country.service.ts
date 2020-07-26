import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
    employees: any[];  
    private url = ''; 
  constructor(public http: HttpClient) { }

  private baseUrl = "https://jsonplaceholder.typicode.com/users";//Replace it with your http address and port  
     
  getSearchedCountry(keyWord)  {  
        this.url = this.baseUrl + '?keyword='+keyWord;  
        return this.http.get<any[]>(this.url);  
      } 

}
