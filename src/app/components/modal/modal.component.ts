import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() logoModal: string = 'assets/logo_modal.png';
  @Input() nameModal: string = 'Para acceder a este sitio web, tienes que ser mayor de edad';
  @Input() question: string = '¿Tienes más de 18 años?';
  @Input() adultModal:string='Si'; 
  @Input() notAdultModal: string = 'No';

  @Input() modal: string = '';

  public openModal(): void {
    this.modal = 'show-modal';
  }

  @Output() closeModal = new EventEmitter<string>();
  public isAdult(): void {
    this.closeModal.emit('modal');
  }
  public isNotAdult(): void {
    window.location.href = 'https://www.google.com';
    this.closeModal.emit('modal');
  }
  
}
