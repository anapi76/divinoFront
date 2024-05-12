import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Bodegas } from '../../models/response.interfaceDenominacion';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() descriptions: { title: string, description: string, imageCard: string }[] = [];
  @Input() name: string = '';
  @Input() creacion: string |null= '';
  @Input() web: string |null = '';
  @Input() bodegas: Bodegas[] = [];
  public attr: string = "card";
}
