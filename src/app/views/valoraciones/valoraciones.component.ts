import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { DataService } from '../../services/data.service';
import { ResponseValoracion } from '../../models/response.interfaceValoracion';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css'
})
export class ValoracionesComponent {
  public urlPuntuacionVino: string = 'http://localhost:8000/puntuacion/vino';
  public urlPuntuacion: string = 'http://localhost:8000/puntuacion';
  public urlVino: string = 'http://localhost:8000/vino';
  public vinos: { id: number, nombre: string }[] = [];
  public puntuaciones: {id: number, puntos: number, descripcion:string }[] = [];

  public constructor(public service: DataService) {
    this.getVinos(this.urlVino);
    this.getPuntuaciones(this.urlPuntuacion);
  }

  public getVinos(url: string): void {
    this.service.getResponseVino(url).subscribe(response => {
      response.results.map((element => {
        this.vinos.push({ nombre: element.nombre, id: element.id });
      }))
    })
  }

  public getPuntuaciones(url: string): void {
    this.service.getResponsePuntuacion(url).subscribe(response => {
        this.puntuaciones=response.results;
    })
  }

  public addPuntuacion(url: string, data: ResponseValoracion) {
    this.service.createValoracion(url, data).subscribe();
  }

  public dataReceived(data: any): void {
    this.addPuntuacion(this.urlPuntuacionVino, data);
  }
}
