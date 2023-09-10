import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CandidatoService } from 'src/app/services/candidato.service';

@Component({
  selector: 'app-formcadfullstack',
  templateUrl: './formcadfullstack.component.html',
  styleUrls: ['./formcadfullstack.component.css']
})
export class FormcadfullstackComponent {

  checkoutForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private candidatoService: CandidatoService, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      nome: '',
      rg: '',
      cpf: '',
      telefone: '',
      email: '',
      periodo: '',
      programacao: '',      
    });
  }
  async salvarTarefa() {
    await firstValueFrom(this.candidatoService.adicionar(this.checkoutForm.value));
    alert("Cadastro enviado com sucesso");
    this.router.navigate(["/FullStack"]);
  }

}
