import { Component } from '@angular/core';
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
    this.getDenominaciones(this.urlDenominacion);
    this.getBodegas(this.urlBodega);
  }

  public urlDenominacion: string = 'http://localhost:8000/denominacion';
  public urlBodega: string = 'http://localhost:8000/bodega';
  public denominaciones: { title: string, id: number }[] = [];
  public bodegas: { title: string, id: number }[] = [];
  public vinos: { title: string, id: number }[] = [{ title: 'Vino tinto', id: 1 }, { title: 'Vino blanco', id: 2 }, { title: 'Vino rosado', id: 3 }]
  public espumosos: { title: string, id: number }[] = [{ title: 'Cava Brut', id: 1 }, { title: 'Cava Brut Nature', id: 2 }, { title: 'Vino espumoso', id: 3 }]

  public menu: { route: string, title: string, content: { title: string, id: any }[] }[] = [
    { route: '/home', title: 'home', content: [] },
    { route: '/tuvino', title: 'tuVino', content: [] },
    { route: '/denominaciones', title: 'denominaciones', content: this.denominaciones },
    { route: '/bodegas', title: 'bodegas', content: this.bodegas },
    { route: '/vinos/color', title: 'vinos', content: this.vinos },
    { route: '/vinos/espumosos', title: 'espumosos', content: this.espumosos },
    { route: '/valoraciones', title: 'valoraciones', content: [] }];

  public setSelectedId(id: number) {
    this.service.setSelectedId(id);
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
}
