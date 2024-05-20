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
    comentario: new FormControl('', { nonNullable: true })
  });

  public form: { usuario: string, vino: string, puntuacion: string, comentario: string } =
    { usuario: '', vino: '', puntuacion: '', comentario: '' }

  @Input() vinos: { nombre: string, id: number }[] = [];
  @Input() puntuaciones: { id: number, puntos: number, descripcion: string }[] = [];

  @Output() formSubmit = new EventEmitter<{ usuario: string, vino: string, puntuacion: string, comentario: string }>();
  public onSubmit(): void {
    this.formSubmit.emit({ 
      usuario: this.reactiveForm.getRawValue().usuario, 
      vino: this.reactiveForm.getRawValue().vino, 
      puntuacion: this.reactiveForm.getRawValue().puntuacion, 
      comentario: this.reactiveForm.getRawValue().comentario });
    this.reactiveForm.reset();
  }

}
