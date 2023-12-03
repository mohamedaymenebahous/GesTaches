import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {LandingPageComponent} from "./components/landing-page-module/landing-page/landing-page.component";
import {TodoListComponent} from "./components/landing-page-module/todo-list/todo-list.component";
import {MatTableModule} from "@angular/material/table";

const appRoutes: Routes = [
  { path: 'accueil', component:  LandingPageComponent},
  // { path: 'creation', component:  },
  // { path: 'modification', component:  },
  // { path: 'supression', component:  }
];

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    ),
    MatTableModule
  ],
  exports: [
    RouterModule,
    TodoListComponent
  ]
})
export class AppRoutingModule {
}
