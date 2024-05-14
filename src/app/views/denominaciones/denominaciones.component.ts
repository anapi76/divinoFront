import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { Bodegas, Result } from '../../models/response.interfaceDenominacion';
import { ContentComponent } from '../../components/content/content.component';


@Component({
  selector: 'app-denominaciones',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './denominaciones.component.html',
  styleUrl: './denominaciones.component.css'
})
export class DenominacionesComponent {

  public idSubscription: Subscription;
  public selectedId: number | null = 1;
  public urlDenominacion: string = 'http://localhost:8000/denominacion/' + this.selectedId;
  public denominacion: Result[] = [];
  public name: string = 'DO Valencia';
  public web: string | null = '';
  public bodegasDo: Bodegas[] = [];
  public creacion: string | null = '';
  public descriptions: { title: string, description: string, imageCard: string }[] = [];
  public view: string = 'denominacion';

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlDenominacion = 'http://localhost:8000/denominacion/' + id;
        this.getDenominaciones(this.urlDenominacion);
      }
    });
  }

  public getDenominaciones(url: string): void {
    this.service.getResponseDenominacion(url).subscribe(response => {
      this.denominacion = response.results;
      this.name = this.denominacion[0].nombre;
      this.web = this.denominacion[0].web;
      this.creacion = "Fecha de creación: " + this.denominacion[0].creacion + '';
      this.bodegasDo = this.denominacion[0].bodegas;

      this.descriptions = [];
      this.descriptions.push({ title: 'Región', description: this.denominacion[0].descripcion, imageCard: "http://localhost:8000/" + this.denominacion[0].imagen });
      this.descriptions.push({ title: 'Historia', description: this.denominacion[0].historia, imageCard: "http://localhost:8000/" + this.denominacion[0].imagen_historia });
      this.descriptions.push({ title: 'Tipo de vinos', description: this.denominacion[0].descripcion_vinos, imageCard: "http://localhost:8000/" + this.denominacion[0].logo });
      this.descriptions.push({ title: 'Uvas permitidas', description: this.denominacion[0].uvas_permitidas.join(', '), imageCard: "http://localhost:8000/" + this.denominacion[0].imagen_uva });
    })
  }




}
