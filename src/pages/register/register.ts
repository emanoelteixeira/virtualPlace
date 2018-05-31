import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  form: FormGroup;
  user: any = {};
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private authService: AuthService) {

    this.createForm();  
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.user.key],
      email: [this.user.email, Validators.required],
      password: [this.user.password, Validators.required],
    });
  }

  criaUsuario() {
    if (this.form.valid) {
      this.authService.createUser(this.form.value)
        .then((user: any) => {
          this.toastCtrl.create({ message: 'Conta criada com sucesso!', duration: 3000 }).present();
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          if (error.code == 'auth/email-already-in-use') {
            this.toastCtrl.create({ message: 'Email ja está em uso!', duration: 3000 }).present();
          } else if (error.code == 'auth/invalid-email') {
            this.toastCtrl.create({ message: 'Email não é valido!', duration: 3000 }).present();
          } else if (error.code == 'auth/operation-not-allowed') {
            this.toastCtrl.create({ message: 'Não esta habilitado para criar usuários!', duration: 3000 }).present();
          } else if (error.code == 'auth/weak-password') {
            this.toastCtrl.create({ message: 'Senha digitada muito fraca!', duration: 3000 }).present();
          }
        })
    }

  }




}
