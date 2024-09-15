import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Bodegas } from '../../models/response.interfaceDenominacion';
import { Result } from '../../models/response.interfaceBodega';
import { CardVinoComponent } from '../card-vino/card-vino.component';
import { ResultVino } from '../../models/response.interfaceVino';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CardComponent, CardVinoComponent,FormComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  public localhost: string = 'http://localhost:8000/';
  public attr: string = "card";

  @Input() descriptions: { title: string, description: string, imageCard: string }[] = [];
  @Input() name: string = '';
  @Input() creacion: string | null = '';
  @Input() web: string | null = '';
  @Input() bodegasDo: Bodegas[] = [];
  @Input() view: string = '';
  @Input() bodega: Result[] = [];
  @Input() vinos: { name: string, image: string, maduracion: string}[] = [];
  @Input() vinosColor: ResultVino[] = [];
  @Input() title: string | null = "";
  @Input() vino: ResultVino = {
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

  @Output() contentClicked = new EventEmitter<ResultVino>();
  onCardClicked(vino: ResultVino) {
    this.contentClicked.emit(vino);
  }


}
