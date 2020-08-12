import { Component } from '@angular/core';

export class Project  {
  id: number;
  name: string;
}
  
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: '<h1>{{title}}</h1><h2>project \'{{project}}\' is selected</h2>'
})
export class AppComponent {
  title = 'My Projects';
  project: Project = {
    id: 1001,
    name: 'MyProject'
  };
}
