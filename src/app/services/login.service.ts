import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface LoginProp {
  email: string, senha: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = "paola.nmartins@gmail.com";
  senha: string = "123456";
  logado: boolean = false

  constructor(private router: Router) { }

  logar({ email, senha }: LoginProp) {
    if (email == this.email && senha == this.senha) {
      this.logado = true
      this.router.navigate(["listagemFullStack"])
    } else{
      alert ("Email e Senha Invalidos")
    }
  }
}

