import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Usuario } from 'src/app/models/UsuarioAPI';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule, IonicModule, CommonModule],
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent implements OnInit {
  username: string = '';
  password: string = '';
  rolSeleccionado: 'docente' | 'alumno' = 'alumno'; // Rol con tipo específico
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    const nuevoUsuario: Usuario = {
      id: 0, // MockAPI generará el ID automáticamente
      nombreUsuario: this.username,
      password: this.password,
      rol: this.rolSeleccionado, // El rol seleccionado por el usuario
    };

    this.authService.registrarUser(nuevoUsuario).subscribe(
      (res) => {
        console.log('Usuario registrado con éxito', res);
        this.router.navigate(['/login']); // Redirige al login después del registro exitoso
      },
      (error) => {
        this.errorMessage = 'Error al registrar usuario: ' + error.message;
      }
    );
  }

  ngOnInit() {}
}
