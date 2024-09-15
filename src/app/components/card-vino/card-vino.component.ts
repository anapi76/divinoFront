import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultVino } from '../../models/response.interfaceVino';

@Component({
  selector: 'app-card-vino',
  standalone: true,
  imports: [],
  templateUrl: './card-vino.component.html',
  styleUrl: './card-vino.component.css'
})
export class CardVinoComponent {
  @Input() title:string='';
  @Input() description:string='';
  @Input() imageCard:string='';
  @Input() maduracion:string='';
  @Input() attr:string='';
  @Input() vino:ResultVino={
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

  @Output() cardClicked = new EventEmitter<ResultVino>();
  public openModal(): void {
    this.cardClicked.emit(this.vino);
  }

}
