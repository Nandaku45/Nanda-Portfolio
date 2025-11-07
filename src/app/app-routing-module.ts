import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Contact } from './Pages/contact/contact';

const routes: Routes = [
  {
    path:'',component:Home
  },
  {path:'About',component:About},
  {path:'Contact',component:Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
