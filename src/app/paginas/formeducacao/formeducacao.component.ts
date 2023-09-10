import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CandidatoeducacaoService } from 'src/app/services/candidatoeducacao.service';

@Component({
  selector: 'app-formeducacao',
  templateUrl: './formeducacao.component.html',
  styleUrls: ['./formeducacao.component.css']
})
export class FormeducacaoComponent {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private candidatoeducacaoservice: CandidatoeducacaoService, private router: Router) {
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
    await firstValueFrom(this.candidatoeducacaoservice.adicionar(this.checkoutForm.value));
    alert("Cadastro realizado com sucesso");
    this.router.navigate(["/Arte"]);
  }

}
