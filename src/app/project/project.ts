import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projectdata } from '../projectdata';
@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
project: any; // to store selected project details
id:any;
btn_name='Show More';
constructor(public ar:ActivatedRoute,public pd:Projectdata){
  ar.paramMap.subscribe((s)=>{
   this.id= s.get('projid');
    this.project=pd.pdata.filter((f)=>f.id==this.id);

  })
}
btnchange(){
  this.btn_name=this.btn_name==='Show More'?'Show Less':'Show More'
}
  
}
