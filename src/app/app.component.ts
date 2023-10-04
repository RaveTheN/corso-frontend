import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-form';

  formData: {
    nome: string;
    cognome: string;
    age: string;
    username: string;
    password: string;
  } = {
    nome: '',
    cognome: '',
    age: '',
    username: '',
    password: '',
  };

  onSubmit() {
    console.log(this.formData);
  }
}
