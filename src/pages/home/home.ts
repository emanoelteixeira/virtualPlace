import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from '../../providers/contact/contact';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../providers/auth/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ContactProvider,
    private toast: ToastController, private authService: AuthService) {

    this.contacts = this.provider.getAll();

  }

  newContact() {
    this.navCtrl.push('ContactPage');
  }


  editContact(contact: any) {
    this.navCtrl.push('ContactPage', { contact: contact });
  }

  removeContact(key: string) {
    this.provider.remove(key)
      .then(() => {
        this.toast.create({ message: 'Contato removido com sucesso', duration: 3000 }).present();
      })
      .catch(() => {
        this.toast.create({ message: 'erro ao remover o contato.', duration: 3000 }).present();
      })


  }

  deslogar() {
    this.authService.deslogar()
      .then(() => {
        this.navCtrl.setRoot(LoginPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }


}
