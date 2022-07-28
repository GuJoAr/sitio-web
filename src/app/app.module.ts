import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTMLComponent } from './frontend/html/html.component';
import { CSSComponent } from './frontend/css/css.component';
import { JavaScriptComponent } from './frontend/java-script/java-script.component';
import { AngularComponent } from './frontend/angular/angular.component';
import { CSharpComponent } from './backend/csharp/csharp.component';
import { GitComponent } from './backend/git/git.component';
import { SQLComponent } from './backend/sql/sql.component';
import { NetCoreComponent } from './backend/net-core/net-core.component';

const appRoutes: Routes=[
  {path:'', component:InicioComponent},
  {path:'frontend', component: FrontendComponent},
  {path:'backend', component: BackendComponent},
  {path:'quienes', component: QuienesComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'html', component: HTMLComponent},
  {path:'css', component: CSSComponent},
  {path:'javascript', component: JavaScriptComponent},
  {path:'angular', component: AngularComponent},
  {path:'csharp', component: CSharpComponent},
  {path:'git', component: GitComponent},
  {path:'netcore', component: NetCoreComponent},
  {path:'sql', component: SQLComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FrontendComponent,
    BackendComponent,
    QuienesComponent,
    ContactoComponent,
    HTMLComponent,
    CSSComponent,
    JavaScriptComponent,
    AngularComponent,
    CSharpComponent,
    GitComponent,
    SQLComponent,
    NetCoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
