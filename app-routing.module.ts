import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LancamentosComponent } from './views/lancamentos/lancamentos.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { AlojaComponent } from './views/aloja/aloja.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    
  
  },

  { 
    path: 'lancamentos',
    component: LancamentosComponent
  
  }

,{
  path: 'pcgamer',
  component: PcgamerComponent

}

,{ 
  path: 'produtos',
  component: ProdutosComponent

}

,{ 
  path: 'aloja',
  component: AlojaComponent

}




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
