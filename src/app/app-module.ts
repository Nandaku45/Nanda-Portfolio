import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { Home } from './Pages/home/home';
import { Contact } from './Pages/contact/contact';
import { About } from './Pages/about/about';
import { Projects } from './Pages/projects/projects';
import { Project } from './project/project';
import { FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    Contact,
    About,
    Projects,
    Project
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
