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
import { PmmrComponent } from './paginas/pmmr/pmmr.component';
import { ForumantirracistaComponent } from './paginas/forumantirracista/forumantirracista.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { ArtegrafiteComponent } from './paginas/artegrafite/artegrafite.component';
import { EducacaoComponent } from './paginas/educacao/educacao.component';
import { FotografiaComponent } from './paginas/fotografia/fotografia.component';
import { TematicasComponent } from './paginas/tematicas/tematicas.component';
import { FullStackComponent } from './paginas/full-stack/full-stack.component';
import { FotosComponent } from './paginas/fotos/fotos.component';
import { LoginComponent } from './paginas/login/login.component';
import { FormcadfullstackComponent } from './paginas/formcadfullstack/formcadfullstack.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AdmobComponent } from './paginas/admob/admob.component';
import { ListagemfullstackComponent } from './paginas/listagemfullstack/listagemfullstack.component';


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
    PmmrComponent,
    ForumantirracistaComponent,
    EventosComponent,
    ArtegrafiteComponent,
    EducacaoComponent,
    FotografiaComponent,
    TematicasComponent,
    FullStackComponent,
    FotosComponent,
    LoginComponent,
    FormcadfullstackComponent,
    AdmobComponent,
    ListagemfullstackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
