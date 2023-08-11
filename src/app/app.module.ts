import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { BarranavegacaoComponent } from './barranavegacao/barranavegacao.component';
import { QuemsomosComponent } from './paginas/quemsomos/quemsomos.component';
import { ProjetosComponent } from './paginas/projetos/projetos.component';
import { DoarComponent } from './paginas/doar/doar.component';
import { KaspperComponent } from './paginas/kaspper/kaspper.component';
import { NaveinternetComponent } from './paginas/naveinternet/naveinternet.component';
import { InstitutocativarComponent } from './paginas/institutocativar/institutocativar.component';
import { ForumantirracistaComponent } from './pagina/forumantirracista/forumantirracista.component';
import { PmmrComponent } from './paginas/pmmr/pmmr.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    HomeComponent,
    BarranavegacaoComponent,
    QuemsomosComponent,
    ProjetosComponent,
    DoarComponent,
    KaspperComponent,
    NaveinternetComponent,
    InstitutocativarComponent,
    ForumantirracistaComponent,
    PmmrComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
