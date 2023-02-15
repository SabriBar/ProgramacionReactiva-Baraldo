import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[] = [
    {
      nombre: 'Juan',
      apellido: 'Rodriguez',
      curso: {
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
      comision: 100, email: 'juanrodri@gmail.com'
    },

    {
      nombre: 'Mario',
      apellido: 'Garcia',
      curso: {
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
      comision: 101, email: 'garcia_mario@gmail.com'
    },

    {
      nombre: 'Ana',
      apellido: 'Lopez',
      curso: {
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
      comision: 103,
      email: 'ana1lopez@gmail.com'
    },
    {
      nombre: 'Carlos',
      apellido: 'Martinez',
      curso: {
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
      comision: 105,
      email: 'carlistosm@gmail.com'
    },
    {
      nombre: 'Jose',
      apellido: 'Hernandez',
      curso: {
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
      comision: 100,
      email: 'josehernandez@gmail.com'
    },
    {
      nombre: 'Laura',
      apellido: 'Perez',
      curso: {
        nombre: 'SQL',
        comision: '108',
        profesor: {
          nombre: 'Indiana',
          correo: 'indianaj@gmail.com'
        },
        fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
        fechaFin: new Date(2023, 3, 31, 20, 30, 0),
        inscripcionAbierta: false
      },
      comision: 108,
      email: 'lauperez@gmail.com'
    },
    {
      nombre: 'Pedro',
      apellido: 'Sanchez',
      curso: {
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
      comision: 101,
      email: 'pepesanchez@gmail.com'
    }
  ];
  private alumnos$!: BehaviorSubject<Alumno[]>;


  constructor() {
    this.alumnos$ = new BehaviorSubject(this.alumnos);

    of(this.alumnos).pipe(
      map((alumnos: Alumno[]) =>{
        return alumnos.filter((alumno: Alumno) => alumno.curso.nombre == 'Angular')
      })
    ).subscribe((alumnos) =>{
      console.log("Obtenido mediante operador map, friltado por curso", alumnos)
    })
  }


  //OBSERVABLE
  getAlumnosObservable(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  //PROMISE
  getAlumnosPromise(): Promise<Alumno[]> {
    return new Promise((resolve, reject) => {
      if (this.alumnos.length > 0) {
        resolve(this.alumnos);
      } else {
        reject([]);
      }
    });
  }

}
