import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
baseUrl:string = "http://localhost:9999/task-bucket-api/";

constructor(private httpClient : HttpClient) {

  }

  get(action){
    return this.httpClient.get(this.baseUrl +action);
  }

}
