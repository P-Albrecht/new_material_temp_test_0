import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { EnviromentComponent } from './enviroment/enviroment.component';

const routes: Routes = [
  { path: 'NotificationsComponent'
     , component: EnviromentComponent },
  { path: 'UserProfileComponent'
     , component: EnviromentComponent },
  { path: 'FooterComponent'
     , component: EnviromentComponent },
  { path: 'NavbarComponent'
     , component: EnviromentComponent },
  { path: 'TableListComponent'
     , component: EnviromentComponent },
  { path: 'TypographyComponent'
     , component: EnviromentComponent },
  { path: 'DashboardComponent'
     , component: EnviromentComponent },
  { path: 'UpgradeComponent'
     , component: EnviromentComponent },
  { path: 'IconsComponent'
     , component: EnviromentComponent },
  { path: 'MapsComponent'
     , component: EnviromentComponent },
  { path: 'enviroment', component: EnviromentComponent },
  { path: '', redirectTo: '/enviroment', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
