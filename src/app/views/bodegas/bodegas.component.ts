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
  public localhost: string = 'http://localhost:8000/'
  public url: string = this.localhost + 'api/';

  public idSubscription: Subscription;
  public selectedId: number | null = 1;
  public urlBodega: string = this.url + 'bodega/' + this.selectedId;
  public bodega: Result[] = [];
  public vinosBodega: Vino[] = [];
  public vinos: { name: string, image: string, maduracion: string }[] = [];
  public view: string = 'bodega';

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlBodega = this.url + 'bodega/' + id;
        this.getBodega(this.urlBodega);
      }
    });
    console.log(this.vinos);
  }

  public getBodega(url: string): void {
    this.service.getResponseBodega(url).subscribe(response => {
      this.bodega = response.results;
      this.vinos = [];
      this.vinosBodega = this.bodega[0].vinos;
      this.vinosBodega.map(vino => {
        this.service.getResponseVino(this.url + vino.url).subscribe(responseVino => {
          this.vinos.push({ name: responseVino.results[0].nombre, image: this.localhost + responseVino.results[0].imagen, maduracion: responseVino.results[0].maduracion });
        })
      })
    })
  }
}
