import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule, IonicModule, CommonModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  login() {
    this.authService.login(this.username, this.password).subscribe(
      (user) => {
        // Redirigir según el rol del usuario
        if (user.rol === 'docente') {
          this.router.navigate(['/docente-home']);
        } else if (user.rol === 'alumno') {
          this.router.navigate(['/alumno-home']);
        } else {
          this.errorMessage = 'Acceso denegado: rol no permitido';
        }
      },
      (error) => {
        this.errorMessage = 'Error de autenticación: ' + error.message;
      }
    );
  }

  ngOnInit() {}
}
