import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnoComponent } from './components/lista-alumno/lista-alumno.component';
import { MaterialModule } from '../material.module';
import { ModificarAlumnoComponent } from './components/abm-alumno/modificar-alumno/modificar-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsernamePipe } from './pipes/username.pipe';
import { TituloEstiloDirective } from './directives/titulo-estilo.directive';

@NgModule({
  declarations: [
    ListaAlumnoComponent,
    ModificarAlumnoComponent,
    UsernamePipe,
    TituloEstiloDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaAlumnoComponent
  ]
})
export class AlumnoModule { }