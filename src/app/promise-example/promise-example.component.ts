import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
@Component({
  selector: 'app-promise-example',
  templateUrl: './promise-example.component.html',
  styleUrls: ['./promise-example.component.scss']
})
export class PromiseExampleComponent implements OnInit {
  country: any;  
  constructor(private _countryService:CountryService) { }

  ngOnInit(): void {
  }

  public searchCountryUsingPromise(keyWord){  
        this._countryService.getSearchedCountry(keyWord).toPromise()  
        .then((data:any) =>{  
          console.log(data);  
          this.country =data;  
        });  
      }

}
