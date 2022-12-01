import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoloListarComponent } from './listar/polo-listar.component';
import { PoloCadastrarComponent } from './cadastrar/polo-cadastrar.component';

const routes: Routes = [
  { path: 'polo-listar', component: PoloListarComponent},
  { path: 'polo-cadastrar', component: PoloCadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoloRoutingModule { }
