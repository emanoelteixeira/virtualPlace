import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
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

  createAccount() {
    this.navCtrl.push(RegisterPage);
  }
  
  loginAccount() {
    if (this.form.valid) {
      this.authService.logar(this.form.value)
        .then(() => {
          this.navCtrl.setRoot(HomePage);
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            this.toastCtrl.create({ message: 'Email inválido!', duration: 3000 }).present();
          } else if (error.code == 'auth/user-disabled') {
            this.toastCtrl.create({ message: 'Usuário desativado!', duration: 3000 }).present();
          } else if (error.code == 'auth/user-not-found') {
            this.toastCtrl.create({ message: 'O usuário não foi encontrado!', duration: 3000 }).present();
          } else if (error.code == 'auth/wrong-password') {
            this.toastCtrl.create({ message: 'Senha digitada inválida!', duration: 3000 }).present();
          }
        })
    }

  }
  

}
