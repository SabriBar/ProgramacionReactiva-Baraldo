import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmCursoComponent } from './components/abm-curso/abm-curso.component';
import { CardCursoComponent } from './components/card-curso/card-curso.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CardCursoComponent,
    AbmCursoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardCursoComponent
  ]
})
export class CursoModule { }
