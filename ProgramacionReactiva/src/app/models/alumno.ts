import { Curso } from "./curso";

export interface Alumno{
    nombre: string;
    apellido: string;
    curso: Curso;
    comision: number;
    email: string;
}