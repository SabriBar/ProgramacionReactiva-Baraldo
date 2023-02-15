import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {
 
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ModificarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {
    let regexCorreo: string = '^[^@]+@[^@]+\.[a-zA-Z]{2,}$';

    this.formulario = new FormGroup({
      usuario: new FormControl(data.nombre, Validators.required),
      curso: new FormControl(data.curso, Validators.required),
      comision: new FormControl(data.comision, Validators.required),
      email: new FormControl(data.email, [Validators.required, Validators.pattern(regexCorreo)])
    });
  }

  login() {
    console.log(this, this.formulario);
  }

  ngOnInit(): void {
  }

}
