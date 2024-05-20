import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ContentComponent } from '../../components/content/content.component';
import { ResultVino, Uva } from '../../models/response.interfaceVino';
import { ModalVinoComponent } from '../../components/modal-vino/modal-vino.component';


@Component({
  selector: 'app-vinos',
  standalone: true,
  imports: [ContentComponent,ModalVinoComponent],
  templateUrl: './vinos.component.html',
  styleUrl: './vinos.component.css'
})
export class VinosComponent {

  public constructor(public service: DataService) {
    this.idSubscription = this.service.getSelectedId().subscribe(id => {
      this.selectedId = id;
      if (id !== null) {
        this.urlVinoColor = 'http://localhost:8000/vino/color/' + id;
        this.getVinos(this.urlVinoColor);
      }
    });
    this.idSubscription = this.service.getSelectedTitle().subscribe(title => {
      this.selectedTitle= title;
    });
  }

  public idSubscription: Subscription;
  public selectedId: number | null = 1;
  public selectedTitle: string | null = '';
  public urlVinoColor: string = 'http://localhost:8000/vino/color/' + this.selectedId;
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
