import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-vino',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-vino.component.html',
  styleUrl: './form-vino.component.css'
})
export class FormVinoComponent {
  reactiveForm = new FormGroup({
    usuario: new FormControl('', { nonNullable: true }),
    puntuacion: new FormControl('', { nonNullable: true }),
    comentarios: new FormControl('', { nonNullable: true })
  });

  public form: { usuario: string, vino: string, puntuacion: string, comentarios: string } =
    { usuario: '', vino: '', puntuacion: '', comentarios: '' }

  @Input() vinos: { id: number, nombre: string } = { id: 0, nombre: "" };
  @Input() puntuaciones: { id: number, puntos: number, descripcion: string }[] = [];

  @Output() formSubmit = new EventEmitter<{ usuario: string, vino: number, puntuacion: string, comentarios: string }>();
  public onSubmit(): void {
    this.formSubmit.emit({
      usuario: this.reactiveForm.getRawValue().usuario,
      vino: this.vinos.id,
      puntuacion: this.reactiveForm.getRawValue().puntuacion,
      comentarios: this.reactiveForm.getRawValue().comentarios
    });
    this.reactiveForm.reset();
  }
}
