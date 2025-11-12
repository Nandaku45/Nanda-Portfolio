import { Component } from '@angular/core';
import { Projectdata } from '../../projectdata';
@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  ProjectData:any=[];
  pid!:number;
  constructor(public data:Projectdata){
    this.ProjectData=data.pdata;
  }

}
