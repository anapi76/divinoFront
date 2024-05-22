import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  reactiveForm = new FormGroup({
    usuario: new FormControl('', { nonNullable: true }),
    vino: new FormControl('', { nonNullable: true }),
    puntuacion: new FormControl('', { nonNullable: true }),
    comentarios: new FormControl('', { nonNullable: true })
  });

  public form: { usuario: string, vino: string, puntuacion: string, comentarios: string } =
    { usuario: '', vino: '', puntuacion: '', comentarios: '' }

  @Input() vinos: { nombre: string, id: number }[] = [];
  @Input() puntuaciones: { id: number, puntos: number, descripcion: string }[] = [];

  @Output() formSubmit = new EventEmitter<{ usuario: string, vino: string, puntuacion: string, comentarios: string }>();
  public onSubmit(): void {
    this.formSubmit.emit({ 
      usuario: this.reactiveForm.getRawValue().usuario, 
      vino: this.reactiveForm.getRawValue().vino, 
      puntuacion: this.reactiveForm.getRawValue().puntuacion, 
      comentarios: this.reactiveForm.getRawValue().comentarios });
    this.reactiveForm.reset();
  }

}
