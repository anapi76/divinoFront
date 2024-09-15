import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultVino, Uva } from '../../models/response.interfaceVino';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-modal-vino',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './modal-vino.component.html',
  styleUrl: './modal-vino.component.css'
})
export class ModalVinoComponent {

  public constructor(public service: DataService) {}
  
  public localhost:string='http://localhost:8000/';
  @Input() uvas: Uva[]= [];
  @Input() modalVino: string = 'modalVino';
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

  @Output() closeModal = new EventEmitter<string>();
  public onClose(): void {
    this.closeModal.emit('modalVino');
  }
  public setSelected(id: number,nombre:string) {
    this.service.setSelected(id,nombre);
  }
}
