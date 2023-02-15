import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CursoModule } from './curso/curso.module';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnoComponent } from './alumno/components/lista-alumno/lista-alumno.component';
import { CardCursoComponent } from './curso/components/card-curso/card-curso.component';

const appRoutes: Routes = [
  {path:'', component: ListaAlumnoComponent},
  {path:'cursos', component: CardCursoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AlumnoModule,
    CursoModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
