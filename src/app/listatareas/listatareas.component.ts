import { Component } from '@angular/core';

@Component({
  selector: 'app-listatareas',
  templateUrl: './listatareas.component.html',
  styleUrls: ['./listatareas.component.css']
})
export class ListatareasComponent {
  tareas: string[] = [
    'Aplicaciones moviles multiplataforma',
    'Desarrollol y soluciones en la nube',
    'Desarrollo de aplicaciones Avanzado',
    // Agrega más tareas aquí
  ];
}
