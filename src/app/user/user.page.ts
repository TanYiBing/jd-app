import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss']
})

export class UserPage {
  constructor(private navCtrl: NavController) {}

  handleLoginClicked() {
    this.navCtrl.navigateForward('login');
  }

  handleRegisterClicked() {
    this.navCtrl.navigateForward('register');
  }
}
