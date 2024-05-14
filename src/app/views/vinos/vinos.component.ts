import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ContentComponent } from '../../components/content/content.component';
import { ResultVino } from '../../models/response.interfaceVino';

@Component({
  selector: 'app-vinos',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './vinos.component.html',
  styleUrl: './vinos.component.css'
})
export class VinosComponent {

  public idSubscription: Subscription;
  public selectedId: number | null = 1;
  public urlVinoColor: string = 'http://localhost:8000/vino/color/' + this.selectedId;
  public vinosColor:ResultVino[]=[];
  public view: string = 'vino';


  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlVinoColor = 'http://localhost:8000/vino/color/' + id;
        this.getVinos(this.urlVinoColor);
      }
    });
  }

  public getVinos(url: string): void {
    console.log(url);
    this.service.getResponseVino(url).subscribe(response => {
      this.vinosColor=[];
      this.vinosColor = response.results;
      console.log(this.vinosColor);
      
      
    })
  }
}
