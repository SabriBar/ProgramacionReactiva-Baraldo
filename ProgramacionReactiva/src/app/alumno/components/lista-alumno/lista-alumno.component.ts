import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { ModificarAlumnoComponent } from '../abm-alumno/modificar-alumno/modificar-alumno.component';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit, OnDestroy{

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['usuario', 'curso', 'comision', 'email', 'acciones'];
  suscripcion!: Subscription;

  constructor(
    private alumnoService: AlumnosService,
    private dialog: MatDialog
  ){}
  
  
  ngOnInit(): void {
    this.cargarAlumno();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  cargarAlumno(){
    this.dataSource = new MatTableDataSource<Alumno>();
    this.alumnoService.getAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      this.dataSource.data = alumnos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  abrirModal(element: Alumno){
    const dialogRef = this.dialog.open(ModificarAlumnoComponent, {
      data: element
    });
  }

}
