import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ContentComponent } from '../../components/content/content.component';
import { Result, Vino } from '../../models/response.interfaceBodega';

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
  public name: string = 'DO Valencia';
  public web: string | null = '';
  public vinos: Vino[] = [];

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlBodega = 'http://localhost:8000/bodega/' + id;
        this.getBodegas(this.urlBodega);
      }
    });
  }

  public getBodegas(url: string): void {
    this.service.getResponseBodega(url).subscribe(response => {
      this.bodega = response.results;
     this.name = this.bodega[0].nombre;
      this.web = this.bodega[0].web;
      this.vinos = this.bodega[0].vinos;
    
    })
  }

}
