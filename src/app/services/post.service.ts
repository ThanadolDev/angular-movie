import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class PostService {
  public url = 'http://localhost:3000/api/getMovie';
    
  constructor(private httpClient: HttpClient) { }
   
  getPosts(){
    console.log(this.url)
    return this.httpClient.get(this.url);
  }
   
}