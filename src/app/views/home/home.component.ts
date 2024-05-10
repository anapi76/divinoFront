import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { ContentComponent } from '../../components/content/content.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JumbotronComponent, ContentComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public image: string = 'assets/logo_home.png';
  public question: string='¿Tienes más de 18 años?'
  public nameModal: string = 'Para acceder a este sitio web tienes que ser mayor de edad';
  public adultModal: string = 'Si';
  public notAdultModal: string = 'No';
  public modal: string = 'show-modal';
  public bgColor:string="white-smoke";

  public isAdult(): void {
    this.modal = 'modal';
  }

}
