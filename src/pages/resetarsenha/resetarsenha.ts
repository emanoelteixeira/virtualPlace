import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-resetarsenha',
  templateUrl: 'resetarsenha.html',
})
export class ResetarsenhaPage {
  form: FormGroup;
  user: any = {};


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private authService: AuthService) {

    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.user.key],
      email: [this.user.email, Validators.required]
    });
  }

  resetaSenha(){
    if (this.form.valid) {
      this.authService.resetarSenha(this.form.value.email)
        .then(() => {
          this.toastCtrl.create({ message: 'Solicitação enviada para o email!', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((error: any) => {
          if (error.code == 'auth/invalid-email') {
            this.toastCtrl.create({ message: 'Email não é valido!', duration: 3000 }).present();
          } else if (error.code == 'auth/user-not-found') {
            this.toastCtrl.create({ message: 'Email não encontrado!', duration: 3000 }).present();
          }
        })
    }
  }
}
