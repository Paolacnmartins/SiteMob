import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidato, CandidatoService } from 'src/app/services/candidato.service';

@Component({
  selector: 'app-listagemfullstack',
  templateUrl: './listagemfullstack.component.html',
  styleUrls: ['./listagemfullstack.component.css']
})
export class ListagemfullstackComponent {

  candidatos: Observable<Candidato[]>;

  constructor(private candidatoService: CandidatoService){
    this.candidatos =  candidatoService.getTodas();
  };
atualizarLista(){
  this.candidatos = this.candidatoService.getTodas();
}

 }

