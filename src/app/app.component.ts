import { Component } from '@angular/core';

export class Project  {
  id: number;
  name: string;
  root: string;
  desc:string;
}

const PROJECTS: Project[] = [
  { id: 1002, name: 'Color Flipper', root: '\\CODING PROJECTS\\Color Flipper', desc:'A CSS \'color flipper\' web app which changes its own background color based on the value of its text input. Built as a CSS-based expiriment.'},
  { id: 1003, name: 'Data Access Layer With Thread Pool', root: '\\CODING PROJECTS\\DAL-With-Thread-Pool', desc: 'An asynchronous Spring Boot Back end DAO setup that accesses h2 datadbase via up to 6 concurrently running threads.'},
  { id: 1004, name: 'Fetch Sandbox', root: '\\CODING PROJECTS\\Fetch Sandbox', desc: 'A Sandbox for expirimenting with the javascript Fetch API.'},
  { id: 1005, name: 'MEAN stack Authorization App', root: '\\CODING PROJECTS\\MEAN-Auth-App', desc: 'MEAN stack app template that I built as a base for all my future apps of the type. Includes built in authorization and authentication...'},
  { id: 1006, name: 'ng-front-end01', root: '\\CODING PROJECTS\\ng-front-end01', desc: 'This project!!!'},
  { id: 1007, name: 'Roblox Studio Worlds', root: '\\CODING PROJECTS\\Roblox Studio Worlds', desc: 'Just a generic workspace for Cadey\'s Roblox Studio Worlds and custom scripts.'},
  { id: 1008, name: 'Snippets etc', root: '\\CODING PROJECTS\\Snippets etc', desc: 'Workspace for random scripts, files, and Snippets that need to be kept with my code but do not belong anywhere else.'},
  { id: 1009, name: 'STS_Workspace', root: '\\CODING PROJECTS\\STS_Workspace', desc: 'Workspace for all my Spring Projects built using Spring Tool Suite.'},
  { id: 1010, name: 'Data Access Layer With Thread Pool', root: '\\CODING PROJECTS\\STS_Workspace\\DAL-With-Thread-Pool', desc: 'Copy of project #1003'},
  { id: 1011, name: 'Springboot Layered API Template', root: '\\CODING PROJECTS\\STS_Workspace\\Springboot_Layered_API_Template', desc: 'Template for a simple Spring Data faccess layer.'},
  { id: 1012, name: 'VS_Code_Debugging_Tutorial', root: '\\CODING PROJECTS\\VS_Code_Debugging_Tutorial', desc: 'Sandbox for expirimenting with Code\'s debugging features for JS and TS/ Angular.'},
  { id: 1013, name: 'VS-Code-Spring-Extension-Demo', root: '\\CODING PROJECTS\\VS-Code-Spring-Extension-Demo', desc: 'Just made this to see how easy / feasible Spring development is via VS Code.'},
  { id: 1014, name: 'Workout Assistant 2 (For-Share version)', root: '\\CODING PROJECTS\\WorkoutAssistant2 - ForShare', desc: '\'safe to share\' version of my most recent Android app \'Dumbbell Workout Assistant\'. Images and other various resources have been removed to prevent piracy.'},
];
  
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: 
            `
            <h1>{{title}}</h1>
            <h2>Projects List</h2>
            <ul class="projects">
              <li *ngFor= "let project of projects">
                <span class="badges">{{project.id}}</span> {{project.name}}
              </li>
            </ul>
            <h2>project: \'{{project.name}}\' is selected</h2>
            <div><label>Project ID: </label>{{project.id}}</div>
            <div>
              <label>Project Name: </label>
              <input [(ngModel)] = "project.name" placeholder="name">
            </div>
            <div><label>Root Folder: C:\\\\Desktop</label>{{project.root}}</div>
            <div><label>Project Description: </label>{{project.desc}}</div>
            `
})
export class AppComponent {
  title = 'Nate\'s Projects';
  project: Project = {
    id: 1001,
    name: 'MyProject',
    root: '\\CODING PROJECTS\\MyProject',
    desc: 'This is a simple sample project.'
  };
  projects = PROJECTS;
} 
