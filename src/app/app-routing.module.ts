import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullLayOutComponent} from './lay-out/full-layout/Full-LayOut.component';
import {SimpleLayOutComponent} from './lay-out/simple-layout/Simple-LayOut.component';
import {MainComponent} from './main-page/Main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayOutComponent,
    data: {
      title: 'Home'
    },
  },
  {
    path: '',
    component: SimpleLayOutComponent,
    children: [
      {
        path: 'main',
        component: MainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
