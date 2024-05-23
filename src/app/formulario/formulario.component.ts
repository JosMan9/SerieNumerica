import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CalculosService } from '../calculos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formularioNumero: any;
  serieN = 0;
  primo = 0;
  fibonacci = 0;
  triangular = 0;

  constructor(private formBuilder: FormBuilder, private calculosService: CalculosService) { }

  ngOnInit(): void {
    this.formularioNumero = this.formBuilder.group({
      numero: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  onSubmit(n:any) {
    this.triangular = this.calculosService.triangular5(n.numero)
    this.fibonacci = this.calculosService.fibonnacci(n.numero);
    this.primo = this.calculosService.numeroPrimo3(n.numero);

    this.serieN = this.calculosService.serieN(this.primo, this.fibonacci, this.triangular);

  }

}
