import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { QuemsomosComponent } from './paginas/quemsomos/quemsomos.component';
import { ProjetosComponent } from './paginas/projetos/projetos.component';
import { DoarComponent } from './paginas/doar/doar.component';
import { ForumantirracistaComponent } from './paginas/forumantirracista/forumantirracista.component';
import { InstitutocativarComponent } from './paginas/institutocativar/institutocativar.component';
import { KaspperComponent } from './paginas/kaspper/kaspper.component';
import { NaveinternetComponent } from './paginas/naveinternet/naveinternet.component';
import { PmmrComponent } from './paginas/pmmr/pmmr.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { ArtegrafiteComponent } from './paginas/artegrafite/artegrafite.component';
import { EducacaoComponent } from './paginas/educacao/educacao.component';
import { FotografiaComponent } from './paginas/fotografia/fotografia.component';
import { TematicasComponent } from './paginas/tematicas/tematicas.component';
import { FullStackComponent } from './paginas/full-stack/full-stack.component';
import { FotosComponent } from './paginas/fotos/fotos.component';
import { LoginComponent } from './paginas/login/login.component';
import { FormcadfullstackComponent } from './paginas/formcadfullstack/formcadfullstack.component';
import { AdmobComponent } from './paginas/admob/admob.component';
import { ListagemfullstackComponent } from './paginas/listagemfullstack/listagemfullstack.component';
import { FormcadartesgrafiteComponent } from './paginas/formcadartesgrafite/formcadartesgrafite.component';
import { FormeducacaoComponent } from './paginas/formeducacao/formeducacao.component';
import { FormfotografiaComponent } from './paginas/formfotografia/formfotografia.component';
import { FormtematicasComponent } from './paginas/formtematicas/formtematicas.component';



const routes: Routes = [
 { path: '', component:HomeComponent },
 { path: 'Quemsomos', component: QuemsomosComponent}, 
 { path: 'Projetos', component: ProjetosComponent},
 { path:'Doar', component: DoarComponent},
 { path: 'Forum', component: ForumantirracistaComponent},
 { path: 'Cativar', component:InstitutocativarComponent},
 { path: 'Kaspper', component: KaspperComponent},
 { path: 'Nave', component:NaveinternetComponent},
 { path:'PMMR', component: PmmrComponent},
 { path:'Evento', component: EventosComponent},
 { path: 'Arte' , component: ArtegrafiteComponent},
 { path: 'Educacao', component: EducacaoComponent},
 {path: 'Fotografia', component:FotografiaComponent },
 {path: 'Tematicas', component:TematicasComponent },
 {path:'FullStack', component: FullStackComponent },
 {path: 'Fotos', component:FotosComponent },
 {path: 'Login', component: LoginComponent},
 {path: 'FormFullStack', component: FormcadfullstackComponent},
 {path: 'AdmMob', component: AdmobComponent},
 {path:'listagemFullStack', component:ListagemfullstackComponent},
 {path:'FormArteGrafite', component: FormcadartesgrafiteComponent },
 {path:'FormEducacao', component: FormeducacaoComponent}, 
 {path:'FormFotografia', component: FormfotografiaComponent},
 {path:'FormTematicas', component: FormtematicasComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
