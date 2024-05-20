import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResultVino, Uva } from '../../models/response.interfaceVino';

@Component({
  selector: 'app-modal-vino',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal-vino.component.html',
  styleUrl: './modal-vino.component.css'
})
export class ModalVinoComponent {
  
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
    uvas: [],
    maridajes: [],
    puntuaciones: []
  };

  @Output() closeModal = new EventEmitter<string>();
  public onClose(): void {
    this.closeModal.emit('modalVino');
  }
}
