import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '100', 
      profesor: {
        nombre: 'Minerva',
        correo: 'minerva@gmail.com'
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Javascript', 
      comision: '101', 
      profesor: {
        nombre: 'Garrison',
        correo: 'mrGarrison@gmail.com'
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Python', 
      comision: '103', 
      profesor: {
        nombre: 'Walter',
        correo: 'walterwh@gmail.com'
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Diseño UX', 
      comision: '105', 
      profesor: {
        nombre: 'Albus',
        correo: 'albus@gmail.com'
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'SQL', 
      comision: '108', 
      profesor: {
        nombre: 'Indiana',
        correo: 'indianaj@gmail.com'
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  private cursos$!: BehaviorSubject<Curso[]>;


  constructor() {
    this.cursos$ = new BehaviorSubject(this.cursos);
  }

  obtenerCursosObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }
  
}
