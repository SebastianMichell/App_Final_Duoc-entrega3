import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonModal} from '@ionic/angular';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-pregistro',
  templateUrl: './pregistro.page.html',
  styleUrls: ['./pregistro.page.scss'],
})
export class PregistroPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  public alertInputs = [
    {
      placeholder: 'Contraseña',
    },
    {
      placeholder: 'Repetir Contraseña',
    },
  ];

  constructor(private router: Router,private auth: AutenticacionService) { }
  public mensaje = "";
  public estado: String = "";
  user = {
    usuario: "",
    password: ""
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.auth.register(this.user.usuario, this.user.password).then((res) => {
      if (res) {
        this.estado = "Usuario Existente";
      } else {
        this.mensaje = "Registro Exitoso";
        this.modal.dismiss(this.user.usuario, 'confirm');
      }
    })
  }

  ngOnInit() {
  }

}
