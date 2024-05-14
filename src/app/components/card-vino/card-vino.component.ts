import { Component, Input } from '@angular/core';

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
  @Input() attr:string='';


}
