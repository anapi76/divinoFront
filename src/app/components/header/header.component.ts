import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  public constructor(public service: DataService) {
    this.getDenominaciones(this.url+'denominacion');
    this.getBodegas(this.url+'bodega');
    this.getColores(this.url+'color');
    this.getEspumosos(this.url+'espumoso');
  }
  
  public url: string = 'http://localhost:8000/';

  public denominaciones: { title: string, id: number }[] = [];
  public bodegas: { title: string, id: number }[] = [];
  public colores: { title: string, id: number }[] = [];
  public espumosos: { title: string, id: number }[] = [];

  public menu: { route: string, title: string, content: { title: string, id: any }[] }[] = [
    { route: '/home', title: 'diVino', content: [] },
    { route: '/tuvino', title: 'tuVino', content: [] },
    { route: '/denominaciones', title: 'denominaciones', content: this.denominaciones },
    { route: '/bodegas', title: 'bodegas', content: this.bodegas },
    { route: '/vinos/color', title: 'vinos', content: this.colores },
    { route: '/vinos/espumosos', title: 'espumosos', content: this.espumosos },
    { route: '/ranking', title: 'ranking', content: [] },
    { route: '/valoraciones', title: 'valoraciones', content: [] }];

  public setSelected(id: number,title:string) {
    this.service.setSelected(id,title);
  }

  public getDenominaciones(url: string): void {
    this.service.getResponseDenominacion(url).subscribe(response => {
      response.results.map((element => {
        this.denominaciones.push({ title: element.nombre, id: element.id })
      }))
    })
  }

  public getBodegas(url: string): void {
    this.service.getResponseBodega(url).subscribe(responseBodega => {
      responseBodega.results.map((element => {
        this.bodegas.push({ title: element.nombre, id: element.id })
      }))
    })
  }

  public getColores(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element => {
        this.colores.push({ title: element.nombre, id: element.id })
      }))
    })
  }

  public getEspumosos(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element => {
        this.espumosos.push({ title: element.nombre, id: element.id })
      }))
    })
  }
}
