import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component'; // Importa el componente Home
import { RegistrarComponent } from 'src/app/pages/registrar/registrar.component'; // Importa el componente Registrar
import { LoginComponent } from 'src/app/pages/login/login.component'; // Importa el componente Login
import { DocenteComponent } from 'src/app/pages/docente/docente.component'; // Importa el componente Docente
import { AlumnoComponent } from 'src/app/pages/alumno/alumno.component'; // Importa el componente Alumno

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent, // Cargar el componente Home directamente
  },
  {
    path: 'registrar',
    component: RegistrarComponent, // Cargar el componente Registrar directamente
  },
  {
    path: 'login',
    component: LoginComponent, // Cargar el componente Login directamente
  },
  {
    path: 'docente-home',
    component: DocenteComponent, // Cargar el componente Docente directamente
  },
  {
    path: 'alumno-home',
    component: AlumnoComponent, // Cargar el componente Alumno directamente
  },
  {
    path: '**', // Ruta comodín que captura todas las rutas no definidas
    redirectTo: 'home', // Redirige a la ruta 'home'
  },
];
