import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';
import { Projects } from './Pages/projects/projects';
import { Project } from './project/project';
import { CheckoutGuard } from './checkoutgurad/checkout.guard'; // ✅ Correct import
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {
    path:'',component:Home
  },
  {path:'About',component:About,children:[{
    path:'Projects',component:Projects
  },
{path:'Contact',component:Contact}
]},
{path:'Projects/:projid',component:Project,canActivate:[CheckoutGuard]},
  {path:'Contact',component:Contact},
  {path:'Projects',component:Projects},
  {path:'**',component:NotFoundError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
