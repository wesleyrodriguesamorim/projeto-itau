import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoloRoutingModule } from './polo-routing.module';
import { PoloListarComponent } from './listar/polo-listar.component';
import { PoloCadastrarComponent } from './cadastrar/polo-cadastrar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PoloListarComponent,
    PoloCadastrarComponent
  ],
  imports: [
    CommonModule,
    PoloRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class PoloModule { }
