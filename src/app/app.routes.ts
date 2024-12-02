import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { ClientesComponent } from './clientes/clientes.component';

export const routes: Routes = [
    { path: 'prestamos', component: PrestamosComponent },
  { path: 'clientes', component: ClientesComponent },
    { path: '', component: HomeComponent },
];
