import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Candidato = {
  nome: string; 
	RG: string; 
	CPF: string; 
	telefone: string; 
	email: string; 
	periodo: string; 
	programacao: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }

  getTodas() {
    return this.http.get<Candidato[]>("http://localhost:8080/candidato");
  }

  deletePeloId(id: string) {
    return this.http.delete("http://localhost:8080/candidato/" + id);
  }

  adicionar(candidato: Candidato) {
   return this.http.post("http://localhost:8080/candidato", candidato);

  }
}
