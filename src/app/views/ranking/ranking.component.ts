import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent {
  public urlRanking: string = 'http://localhost:8000/ranking/';
  public vinos:{id:number,nombre:string,puntos:number}[]=[];

  public constructor(public service: DataService) {
    this.getRanking(this.urlRanking);
  }

  public getRanking(url: string): void {
    this.service.getResponseVino(url).subscribe(response => {
      response.results.map((element => {
        this.vinos.push({ nombre: element.nombre, id: element.id, puntos:element.puntos});
      }))
    })
  }
}
