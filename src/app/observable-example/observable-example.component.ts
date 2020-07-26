import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service'; 
import { FormControl } from '@angular/forms';  
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
 
@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})

export class ObservableExampleComponent implements OnInit {
  country: any; 
   term =new FormControl(); 
  constructor(private _countryService:CountryService) { }

  ngOnInit(): void {
    this.term.valueChanges  
    .pipe(debounceTime(800),
    distinctUntilChanged() 
    )
    .subscribe(searchText=>{  
      this._countryService.getSearchedCountry(searchText).subscribe((result)=>{  
        console.log(result);  
 
        this.country =result;  
      })    
    })  
  }

}
