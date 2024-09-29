import { Component } from '@angular/core';

import { ContentComponent } from '../../components/content/content.component';
import { DataService } from '../../services/data.service';
import {  Content, ContentType } from '../../models/response.interfaceContent';

@Component({
  selector: 'app-tuvino',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './tuvino.component.html',
  styleUrl: './tuvino.component.css'
})
export class TuvinoComponent {

  public view: string = 'tuVino';
  public localhost: string = 'http://localhost:8000/api/';
  public imagesVino = [ "assets/vino_tinto.png","assets/vino_blanco.png","assets/vino_rosado.png"];
  
  public colores: Content = { questionTitle: 'Elige un tipo de vino', types: [] };
  public espumosos: Content = { questionTitle: 'Elige un espumoso', types: [] };
  public saboresTinto: Content = { questionTitle: 'Elige un sabor', types: [] };
  public saboresBlanco: Content = { questionTitle: 'Elige un sabor', types: [] };
  public saboresRosado: Content = { questionTitle: 'Elige un sabor', types: [] };
  public sabores:Content[]=[this.saboresTinto,this.saboresBlanco,this.saboresRosado];
 
  public types:ContentType[]=[];
  //public content: Content= { questionTitle: '', types: [] };
  public actualTitle: string = "";
  
  //public next: string = "";
  //public maridajesBrut: { title: string, id: number }[] = [];

  public constructor(public service: DataService) {
    //this.getMaridajesBrut(this.localhost + "maridaje/espumoso/1");
    this.getColores(this.localhost + "color");
    this.getEspumosos(this.localhost + "espumoso");
    this.getSaboresTinto(this.localhost + "sabor/1");
    this.getSaboresBlanco(this.localhost + "sabor/2");
    this.getSaboresRosado(this.localhost + "sabor/3");
  }

  ngOnInit() {
    this.types = [{ title: "Vino", image: "assets/vino_tinto.png", next: this.colores },
    { title: "Espumoso", image: "assets/cava.png", next: this.espumosos }];
    this.actualTitle = "¿Qué vino estás buscando?";
  };

  public getColores(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element,index) => {
        this.colores.types.push({ title: element.nombre,
          image: this.imagesVino[index],
          next: index === 0 ? this.saboresTinto : index === 1 ? this.saboresBlanco : this.saboresRosado})
      })
    })
  };

  public getEspumosos(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element => {
        this.espumosos.types.push({ title: element.nombre, image: "" })
      }))
    })
  }

  public getSaboresTinto(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element => {
        this.saboresTinto.types.push({ title: element.nombre, image: "" })
      }))
    })
  }

   public getSaboresBlanco(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element => {
        this.saboresBlanco.types.push({ title: element.nombre, image: "" })
      }))
    })
  }

  public getSaboresRosado(url: string): void {
    this.service.getResponseGeneral(url).subscribe(responseGeneral => {
      responseGeneral.results.map((element => {
        this.saboresRosado.types.push({ title: element.nombre, image: "" })
      }))
    })
  }


   /* public questionsMaridajeCava: { questionsTitle: string, tipos: { title: string, id: number }[] } = {
    questionsTitle: "¿Con qué lo vas a maridar?", tipos: this.maridajesBrut
  };

  public questionsMaduracionTinto = {
    questionTitle: "¿Cómo te gusta el vino?", tipos: [
      { title: "Joven", image: "assets/vino_tinto.png", url: "?maduracion=1?maduracion=2" },
      { title: "Barrica", image: "assets/vino_blanco.png", url: "?maduracion=3?maduracion=4" },
      { title: "Gran Reserva", image: "assets/vino_rosado.png", url: "?maduracion=5" },
    ]
  };

  public questionsMaduracionBlanco = {
    questionTitle: "¿Cómo te gusta el vino?", tipos: [
      { title: "Joven", image: "assets/vino_tinto.png", url: "?maduracion=1" },
      { title: "Barrica", image: "assets/vino_blanco.png", url: "?maduracion=6" }
    ]
  };

  public questionsCuerpo = {
    questionTitle: "¿Cuerpo?", tipos: [
      { title: "Ligero", image: "assets/vino_tinto.png", url: "?cuerpo=1" },
      { title: "Medio", image: "assets/vino_rosado.png", url: "?cuerpo=2" },
      { title: "Con cuerpo", image: "assets/vino_rosado.png", url: "?cuerpo=3" }
    ]
  };

  

 public questionsCava = {
    questionTitle: , nextQuestion: this.questionsMaridajeCava, tipos: [
      { title: "Brut", image: "assets/cava.png", url: "vino?espumoso=1" },
      { title: "Brut-nature", image: "assets/cava.png", url: "vino?espumoso=2 " },
      { title: "Vino espumoso", image: "assets/cava.png", url: "vino?espumoso=3" }]
  }; */

  public selectQuestion(item:ContentType): void {
    console.log(item);
 /*    types:any=item.next.types;
   this.types = 
    this.actualTitle = item.next?.questionTitle;  */
  }

}
