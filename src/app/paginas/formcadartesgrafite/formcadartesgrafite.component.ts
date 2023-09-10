import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CandidatoarteService } from 'src/app/services/candidatoarte.service';

@Component({
  selector: 'app-formcadartesgrafite',
  templateUrl: './formcadartesgrafite.component.html',
  styleUrls: ['./formcadartesgrafite.component.css']
})
export class FormcadartesgrafiteComponent {

  checkoutForm: FormGroup; 

  constructor(private formBuilder: FormBuilder, private candidatoarteservice: CandidatoarteService, private router: Router) {
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
    await firstValueFrom(this.candidatoarteservice.adicionar(this.checkoutForm.value));
    alert("Cadastro realizado com sucesso");
    this.router.navigate(["/Arte"]);
  }
}
