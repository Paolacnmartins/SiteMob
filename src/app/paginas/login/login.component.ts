import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      senha: '',
      
    });
  }
  logar(){
    this.loginService.logar(this.checkoutForm.value)
  }
}
