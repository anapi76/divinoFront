import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title:string='';
  @Input() description:string='';
  @Input() imageCard:string='';
  @Input() attr:string='';
  //@Input() descriptions:{title:string,description:string}[]=[];

}
