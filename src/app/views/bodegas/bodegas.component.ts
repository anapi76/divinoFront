import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ContentComponent } from '../../components/content/content.component';
import { Result, Vino } from '../../models/response.interfaceBodega'


@Component({
  selector: 'app-bodegas',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './bodegas.component.html',
  styleUrl: './bodegas.component.css'
})
export class BodegasComponent {

  public idSubscription: Subscription;
  public selectedId: number | null = 1;
  public urlBodega: string = 'http://localhost:8000/bodega/' + this.selectedId;
  public bodega: Result[] = [];
  public vinosDo: Vino[] = [];
  public vinos: { name: string, image: string, maduracion: string }[] = [];
  public view: string = 'bodega';

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlBodega = 'http://localhost:8000/bodega/' + id;
        this.getBodega(this.urlBodega);
      }
    });
  }

  public getBodega(url: string): void {
    this.service.getResponseBodega(url).subscribe(response => {
      this.bodega = response.results;
      this.vinos = [];
      this.vinosDo = this.bodega[0].vinos;
      this.vinosDo.map(vino => {
        this.service.getResponseVino("http://localhost:8000/" + vino.url).subscribe(responseVino => {
          this.vinos.push({ name: responseVino.results[0].nombre, image: "http://localhost:8000/" + responseVino.results[0].imagen, maduracion: responseVino.results[0].maduracion });
        })
      })
    })
  }
}
