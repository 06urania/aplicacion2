import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Usuario } from 'src/app/models/UsuarioAPI';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule, IonicModule, CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuarioLoggeado: Usuario | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log('HomeComponent cargado');

    // Inicializa usuarioLoggeado obteniendo el usuario logueado desde el AuthService
    this.usuarioLoggeado = this.authService.getLoggedInUser();
  }

  irADocente() {
    this.router.navigate(['/docente-home']); // Redirige al panel del docente
  }

  irAAlumno() {
    this.router.navigate(['/alumno-home']); // Redirige al panel del alumno
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige al login
  }
}
