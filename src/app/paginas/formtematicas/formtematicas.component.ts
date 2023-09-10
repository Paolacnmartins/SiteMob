import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CandidatotematicasService } from 'src/app/services/candidatotematicas.service';

@Component({
  selector: 'app-formtematicas',
  templateUrl: './formtematicas.component.html',
  styleUrls: ['./formtematicas.component.css']
})
export class FormtematicasComponent {
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatotematicasservice: CandidatotematicasService, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      nome: '',
      rg: '',
      cpf: '',
      telefone: '',
      email: '',
      periodo: '',
    });
  }
  async salvarTarefa() {
    await firstValueFrom(this.candidatotematicasservice.adicionar(this.checkoutForm.value));
    alert("Cadastro realizado com sucesso");
    this.router.navigate(["/Arte"]);
  }

}
