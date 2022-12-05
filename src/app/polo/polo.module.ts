import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoloRoutingModule } from './polo-routing.module';
import { PoloListarComponent } from './listar/polo-listar.component';
import { PoloCadastrarComponent } from './cadastrar/polo-cadastrar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class PoloModule { }
