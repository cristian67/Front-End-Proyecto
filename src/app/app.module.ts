import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Profesores
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorComponent } from './components/profesores/profesor.component';

//Salas
import { SalasComponent } from './components/salas/salas.component';
import { SalaComponent } from './components/salas/sala.component';

//SERVICIOS
import { ProfesoresService } from './services/profesores.service';
import { SalasService } from './services/salas.service';
import { DepartamentosService } from './services/departamentos.service';

//PIPES
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfesoresComponent,
    SalasComponent,
    ProfesorComponent,
    SalaComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ProfesoresService,
    SalasService,
    DepartamentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
