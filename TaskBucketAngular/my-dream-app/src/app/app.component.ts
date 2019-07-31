import { Input, Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Task Bucket';
  baseUrl = 'http://localhost:9999/task-bucket-api/tasks';
  localDataService : DataService

  private studentsObservable : Student[];
  updateElement(actionVar : string){
    this.localDataService.get(actionVar).subscribe((res : Student[])=>{
    console.log(res);
    this.studentsObservable = res;
    });
  }

  constructor(private dataService: DataService){
    this.localDataService = dataService;
  }
}
