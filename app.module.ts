import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LancamentosComponent } from './views/lancamentos/lancamentos.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { AlojaComponent } from './views/aloja/aloja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LancamentosComponent,
    PcgamerComponent,
    ProdutosComponent,
    AlojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
