import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component'; // Importa el componente Home
import { RegistrarComponent } from 'src/app/pages/registrar/registrar.component'; // Importa el componente Registrar
import { LoginComponent } from 'src/app/pages/login/login.component'; // Importa el componente Login
import { DocenteComponent } from 'src/app/pages/docente/docente.component'; // Importa el componente Docente
import { AlumnoComponent } from 'src/app/pages/alumno/alumno.component'; // Importa el componente Alumno

console.log('Configuración de rutas cargada'); // Verificación

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrar',
    component: RegistrarComponent,
  },
  {
    path: 'docente-home',
    component: DocenteComponent,
  },
  {
    path: 'alumno-home',
    component: AlumnoComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
