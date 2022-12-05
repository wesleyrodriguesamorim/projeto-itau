import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoloRoutingModule } from './polo/polo-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PoloCadastrarComponent } from './polo/cadastrar/polo-cadastrar.component';
import { PoloListarComponent } from './polo/listar/polo-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PoloCadastrarComponent,
    PoloListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PoloRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
