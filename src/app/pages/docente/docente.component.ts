import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/models/UsuarioAPI';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule, IonicModule],
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent implements OnInit {
  usuarioLoggeado: Usuario | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuarioLoggeado = this.authService.getLoggedInUser();
  }

  gestionarAsignaturas() {
    // Aquí puedes redirigir a la página de gestión de asignaturas
    this.router.navigate(['/gestionar-asignaturas']);
  }

  verAsistencia() {
    // Aquí puedes redirigir a la página de asistencia
    this.router.navigate(['/ver-asistencia-docente']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
