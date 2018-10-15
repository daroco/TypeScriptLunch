import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { WhatIsJavascriptComponent } from './what-is-javascript/what-is-javascript.component';
import { WhatIsTypescriptComponent } from './what-is-typescript/what-is-typescript.component';
import { HowTypescriptWorksComponent } from './how-typescript-works/how-typescript-works.component';
import { SettingUpTypescriptComponent } from './setting-up-typescript/setting-up-typescript.component';
import { ExamplesComponent } from './examples/examples.component';

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
    path: 'how-typescript-works',
    component: HowTypescriptWorksComponent
  },
  {
    path: 'setting-up-typescript',
    component: SettingUpTypescriptComponent
  },
  {
    path: 'examples',
    component: ExamplesComponent
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
    WhatIsTypescriptComponent,
    HowTypescriptWorksComponent,
    SettingUpTypescriptComponent,
    ExamplesComponent
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
