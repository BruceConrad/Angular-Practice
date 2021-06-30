import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-sample',
  //templateUrl: './api-sample.component.html',
  template: `
    <h4 *ngFor = "let user of users">{{user.name}}</h4>
  `,
  styleUrls: ['./api-sample.component.css']
})
export class ApiSampleComponent implements OnInit {

  users = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:[]) => {
      this.users = data;
    })
  }

}
