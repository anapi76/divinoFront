import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ResultVino, Uva } from '../../models/response.interfaceVino';
import { ModalVinoComponent } from '../../components/modal-vino/modal-vino.component';

@Component({
  selector: 'app-espumosos',
  standalone: true,
  imports: [ContentComponent,ModalVinoComponent],
  templateUrl: './espumosos.component.html',
  styleUrl: './espumosos.component.css'
})
export class EspumososComponent {
  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlEspumosos = this.url+'vino/espumoso/' + id;
        this.getVinos(this.urlEspumosos);
      }
    });
    this.idSubscription = this.service.getSelectedTitle().subscribe(title => {
      this.selectedTitle= title;
    });
  }
  public url: string = 'http://localhost:8000/api/';

  public idSubscription: Subscription;
  public selectedId: number | null = 1;
  public selectedTitle: string | null = '';
  public urlEspumosos: string = this.url+'vino/espumoso/' + this.selectedId;
  public vinosColor:ResultVino[]=[];
  public view: string = 'vino';
  public modalVino:string='modalVino';
  public uvas:Uva[]=[];
  public vino:ResultVino={
    id: 0,
    nombre: '',
    descripcion: '',
    notaCata: '',
    imagen: '',
    url: '',
    color: '',
    azucar: null,
    espumoso: null,
    maduracion: '',
    sabor: null,
    cuerpo: null,
    boca: null,
    bodega:'',
    do:'',
    puntos:0,
    uvas: [],
    maridajes: [],
    puntuaciones: []
  };

  public getVinos(url: string): void {
    console.log(url);
    this.service.getResponseVino(url).subscribe(response => {
      this.vinosColor=[];
      this.vinosColor = response.results;
    })
  }

  public onClose(modalVino: string): void {
    this.modalVino = modalVino;
  }

  onContentClicked(vino: ResultVino) {
    this.vino = vino;
    this.modalVino = 'show-modal-vino'; 
  }

}
