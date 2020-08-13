import { Component } from '@angular/core';

export class Project  {
  id: number;
  name: string;
  root: string;
  desc:string;
}
  
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: 
            `
            <h1>{{title}}</h1>
            <h2>project: \'{{project.name}}\' is selected</h2>
            <div><label>Project ID: </label>{{project.id}}</div>
            <div>
              <label>Project Name: </label>
              <input [(ngModel)] = "project.name" placeholder="name">
            </div>
            <div><label>Root Folder: </label>{{project.root}}</div>
            <div><label>Project Description: </label>{{project.desc}}</div>
            `
})
export class AppComponent {
  title = 'Nate\'s Projects';
  project: Project = {
    id: 1001,
    name: 'MyProject',
    root: '\CODING PROJECTS\MyProject',
    desc: 'This is a simple sample project.'
  };
} 
