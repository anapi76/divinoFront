import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Bodegas } from '../../models/response.interfaceDenominacion';
import { Result } from '../../models/response.interfaceBodega';
import { CardVinoComponent } from '../card-vino/card-vino.component';
import { ResultVino } from '../../models/response.interfaceVino';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CardComponent,CardVinoComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() descriptions: { title: string, description: string, imageCard: string }[] = [];
  @Input() name: string = '';
  @Input() creacion: string |null= '';
  @Input() web: string |null = '';
  @Input() bodegasDo: Bodegas[] = [];
  @Input() view: string = '';
  @Input() bodega:Result[]=[];
  @Input() vinos: {name:string,image:string,url:string}[] = [];
  @Input() vinosColor:ResultVino[]=[];
  public localhost:string='http://localhost:8000/';
  public attr: string = "card";
}
