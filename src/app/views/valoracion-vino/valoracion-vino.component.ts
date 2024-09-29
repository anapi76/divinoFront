import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ResponseValoracion, ResultValoracion } from '../../models/response.interfaceValoracion';
import { FormVinoComponent } from "../../components/form-vino/form-vino.component";


@Component({
  selector: 'app-valoracion-vino',
  standalone: true,
  imports: [FormComponent, FormVinoComponent],
  templateUrl: './valoracion-vino.component.html',
  styleUrl: './valoracion-vino.component.css'
})
export class ValoracionVinoComponent {

  public url: string = 'http://localhost:8000/api/';
  public idSubscription: Subscription;
  public selectedId: number | null = 1;

  public urlValoracion: string = this.url + 'valoracion';
  public urlPuntuacion: string = this.url + 'puntuacion';
  public urlVino: string = this.url + 'vino' + this.selectedId;
  public vinos: { id: number, nombre: string } = { id: 0, nombre: "" };
  public puntuaciones: { id: number, puntos: number, descripcion: string }[] = [];
  public valoraciones: ResultValoracion[] = [];

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlVino = this.url + 'vino/' + id;
        this.getVinos(this.urlVino);
      }
    });
    this.getPuntuaciones(this.urlPuntuacion);
    this.getValoraciones(this.urlValoracion);
  }

  public getVinos(url: string): void {
    this.service.getResponseVino(url).subscribe(response => {
      response.results.map((element => {
        this.vinos = { nombre: element.nombre, id: element.id };
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
    console.log(data);
    this.service.createValoracion(url, data).subscribe();
  }

  public dataReceived(data: any): void {
    this.addValoracion(this.urlValoracion, data);
  }
}
