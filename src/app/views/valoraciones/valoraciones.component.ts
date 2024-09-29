import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { DataService } from '../../services/data.service';
import { ResponseValoracion, ResultValoracion } from '../../models/response.interfaceValoracion';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css'
})
export class ValoracionesComponent {
  public url: string = 'http://localhost:8000/api/';
  public urlValoracion: string = this.url + 'valoracion';
  public urlPuntuacion: string = this.url + 'puntuacion';
  public urlVino: string = this.url + 'vino';

  public vinos: { id: number, nombre: string }[] = [];
  public puntuaciones: { id: number, puntos: number, descripcion: string }[] = [];
  public valoraciones: ResultValoracion[] = [];

  public constructor(public service: DataService) {
    this.getVinos(this.urlVino);
    this.getPuntuaciones(this.urlPuntuacion);
    this.getValoraciones(this.urlValoracion);
  }

  public getVinos(url: string): void {
    this.service.getResponseVino(url).subscribe(response => {
      response.results.map((element => {
        this.vinos.push({ nombre: element.nombre, id: element.id });
      }))
    })
  }

  public getValoraciones(url: string): void {
    this.service.getResponseValoracion(url).subscribe(response => {
      this.valoraciones = response.results;
    })
  }

  public getPuntuaciones(url: string): void {
    this.service.getResponsePuntuacion(url).subscribe(response => {
      this.puntuaciones = response.results;
    })
  }

  public addValoracion(url: string, data: ResponseValoracion) {
    this.service.createValoracion(url, data).subscribe();
  }

  public dataReceived(data: any): void {
    this.addValoracion(this.urlValoracion, data);
  }
}
