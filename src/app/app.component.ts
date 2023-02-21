import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from './shared/models/paging';
import { Product } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Store Application';
  constructor(private http:HttpClient){}
  products:any[]=[];
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>("https://localhost:7125/api/product?pageSize=50").subscribe({
      next :response=>{
        console.log(response)
        this.products=response.data
      },
      error:error=>console.log(error),
      complete:()=>{
        console.log("Request completed")
        console.log("extra staments")
      }
    })
    
  }
}
