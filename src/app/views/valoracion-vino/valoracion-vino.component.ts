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

  public idSubscription: Subscription;
  public selectedId: number | null = 1;

  public urlPuntuacionVino: string = 'http://localhost:8000/puntuacion/vino';
  public urlPuntuacion: string = 'http://localhost:8000/puntuacion';
  public urlVino: string = 'http://localhost:8000/vino' + this.selectedId;
  public vinos: { id: number, nombre: string } = { id: 0, nombre: "" };
  public puntuaciones: { id: number, puntos: number, descripcion: string }[] = [];
  public valoraciones: ResultValoracion[] = [];

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlVino = 'http://localhost:8000/vino/' + id;
        this.getVinos(this.urlVino);
      }
    });
    this.getPuntuaciones(this.urlPuntuacion);
    this.getValoraciones(this.urlPuntuacionVino);
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

  public addPuntuacion(url: string, data: ResponseValoracion) {
    this.service.createValoracion(url, data).subscribe();
  }

  public dataReceived(data: any): void {
    this.addPuntuacion(this.urlPuntuacionVino, data);
  }
}
