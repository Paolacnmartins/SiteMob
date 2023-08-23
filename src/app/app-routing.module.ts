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



const routes: Routes = [
 { path: ' ', component:HomeComponent },
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
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
