import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/models/UsuarioAPI';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule, IonicModule],
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  usuarioLoggeado: Usuario | null = null;
  ngOnInit() {
    this.usuarioLoggeado = this.authService.getLoggedInUser();
    console.log('Ruta activa:', this.router.url);
  }

  verAsignaturas() {
    // Aquí puedes redirigir a la página de asignaturas del alumno
    this.router.navigate(['/ver-asignaturas']);
  }

  verAsistencia() {
    // Aquí puedes redirigir a la página de asistencia del alumno
    this.router.navigate(['/ver-asistencia-alumno']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
