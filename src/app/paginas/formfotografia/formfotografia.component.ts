import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CandidatofotografiaService } from 'src/app/services/candidatofotografia.service';

@Component({
  selector: 'app-formfotografia',
  templateUrl: './formfotografia.component.html',
  styleUrls: ['./formfotografia.component.css']
})
export class FormfotografiaComponent {

  checkoutForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private candidatofotografiaservice: CandidatofotografiaService, private router: Router) {
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
    await firstValueFrom(this.candidatofotografiaservice.adicionar(this.checkoutForm.value));
    alert("Cadastro realizado com sucesso");
    this.router.navigate(["/Arte"]);
  }
}
