import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { WhatIsJavascriptComponent } from './what-is-javascript/what-is-javascript.component';
import { WhatIsTypescriptComponent } from './what-is-typescript/what-is-typescript.component';

const appRoutes: Routes = [
  {
    path: 'what-is-javascript',
    component: WhatIsJavascriptComponent
  },
  {
    path: 'what-is-typescript',
    component: WhatIsTypescriptComponent
  },
  {
    path: '',
    redirectTo: '/what-is-javascript',
    pathMatch: 'full'
  },
  { path: '**', component: WhatIsJavascriptComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WhatIsJavascriptComponent,
    WhatIsTypescriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
