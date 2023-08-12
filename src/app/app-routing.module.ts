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
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
